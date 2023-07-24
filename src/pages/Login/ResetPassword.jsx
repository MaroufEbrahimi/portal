import React, { useState, useEffect } from "react"
import "./Login.css"
import "./ResetPassword.css"
import APIEnpoints from "../../constants/APIEndpoints"
import { useStateValue } from "../../context/StateProvider"
import APIEndpoints from "../../constants/APIEndpoints"
import BackDrop from "../../components/UI/BackDrop/BackDrop"
import { useNavigate, useParams } from "react-router-dom"
import { actionTypes } from "../../context/reducer"
import MessageBox from "../../components/MessageBox/MessageBox"
import ICONS from "../../constants/Icons"
import Roles from "../../constants/Roles"
import Button from "../../components/UI/Button/Button"

const ResetPassword = () => {
  const { id } = useParams()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [prePassword, setPrePassword] = useState("")
  const [{ authentication }, dispatch] = useStateValue()
  const [error, setError] = useState(null)
  const [completeMsg, setCompleteMsg] = useState({ show: false, msg: "" })
  const navigate = useNavigate()
  const [loading, setloading] = useState(false)

  console.log(authentication)
  useEffect(() => {
    if (
      authentication.roles.includes(Roles.ADMIN) &&
      authentication.userId != id
    ) {
      fetch(APIEndpoints.root + APIEndpoints.students.getStudent(id), {
        method: "GET",
        headers: {
          Authorization: "Bearer " + authentication.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setEmail(data?.studentPersonalInfo?.email)
        })
        .catch(() => navigate("/"))
    } else if (
      (authentication.roles.includes(Roles.STUDENT) &&
        authentication.userId == id) ||
      (authentication.roles.includes(Roles.ADMIN) &&
        authentication.userId == id)
    ) {
      setEmail(localStorage.getItem("email"))
    } else {
      navigate("/")
    }
  }, [id])

  const sendInformation = (e) => {
    console.log(authentication)
    setError(null)
    e.preventDefault()

    // here should do some messaging
    if (password.length < 5) {
      setError("رمز باید بیشتر از 5 کارکتر باشد!")
      return
    }
    if (password == prePassword) {
      setError("!رمز جدید با رمز قبلی یکی است")
      return
    }
    setloading(true)
    fetch(APIEndpoints.root + APIEnpoints.login.update, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + authentication.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: id,
        email: email,
        previousPassword: prePassword,
        newPassword: password,
      }),
    })
      .then((res) => {
        setloading(false)
        if (res.ok) {
          setCompleteMsg({
            show: true,
            msg: "اطلاعات کاربری با موفقیت بروزرسانی شد!",
          })
          return res.json()
        }
      })
      .then((data) => {
        if(authentication.userId == id){
          localStorage.setItem("token", data?.token)
          localStorage.setItem("name", data?.name)
          localStorage.setItem("lastname", data.lastname)
          localStorage.setItem("email", data?.email)
          localStorage.setItem("userId", data?.userId)
          localStorage.setItem("imageUrl", data?.imageUrl)
          localStorage.setItem("roles", data?.roles.toString())
          dispatch({
            type: actionTypes.SET_AUTHENTICATION,
            payload: data,
          })
        }
      })
  }
  return (
    <div className="reset_password box_shadow">
      <div className="reset_password_title">
        <h2>ایمیل و رمز جدید تان را وارد نماید.</h2>
      </div>
      <form
        action=""
        className="display_flex align_items_center justify_content_center flex_direction_column"
      >
        <div className="form_container reset_password_form text_align_center border_radius_8">
          <div className="login_box display_grid">
            <input
              type="email"
              placeholder="ایمیل جدید"
              name="resetemail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputMode="email"
            />
            <i className={ICONS.personCircle}></i>
          </div>
          <div className="login_box display_grid">
            <input
              type="password"
              value={prePassword}
              onChange={(e) => setPrePassword(e.target.value)}
              placeholder="رمز قبلی"
              name="password"
            />
            <i className={ICONS.lock}></i>
          </div>
          <div className="login_box display_grid">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="رمز جدید"
              name="password"
            />
            <i className={ICONS.lockFill}></i>
          </div>
          {error && <p className="error">{error}</p>}
        </div>
        <div className="reset_button">
          <Button loading={loading} onClick={sendInformation} text="ارسال" />
        </div>
      </form>
      <BackDrop show={completeMsg.show}>
        {
          <MessageBox
            messageType="info"
            firstBtn={{ btnText: "تایید", onClick: () => navigate("/") }}
            message={completeMsg.msg}
            iconType={ICONS.info}
          />
        }
      </BackDrop>
    </div>
  )
}

export default ResetPassword
