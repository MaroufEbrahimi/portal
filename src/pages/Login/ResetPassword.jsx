import React, { useState } from "react"
import "./Login.css"
import "./ResetPassword.css"
import APIEnpoints from "../../constants/APIEndpoints"
import { useStateValue } from "../../context/StateProvider"
import APIEndpoints from "../../constants/APIEndpoints"
import BackDrop from "../../components/UI/BackDrop/BackDrop"
import { useNavigate } from "react-router-dom"
import { actionTypes } from "../../context/reducer"
import MessageBox from "../../components/MessageBox/MessageBox"
import ICONS from "../../constants/Icons"

const ResetPassword = () => {
  const [email, setEmail] = useState({ value: localStorage.getItem("email") || '', msg: '' })
  const [password, setPassword] = useState({ value: '', msg: '' })
  const [prePassword, setPrePassword] = useState({ value: '', msg: '' })
  const [{ authentication }, dispatch] = useStateValue()
  const [completeMsg, setCompleteMsg] = useState({ show: false, msg: "" })
  const navigate = useNavigate()

  const sendInformation = (e) => {
    console.log(authentication)
    e.preventDefault();

    // here should do some messaging
    if (password.value.length < 5 && prePassword.value.length < 5) {
      return;
    }
    if (password.value == prePassword.value) {
      return;
    }
    fetch(APIEndpoints.root + APIEnpoints.login.update, {
      method: "PUT",
      headers: {
        "Authorization": "Bearer " + authentication.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email.value,
        previousPassword: prePassword.value,
        newPassword: password.value
      })
    })
      .then(res => {
        if (res.ok) {
          setCompleteMsg({
            show: true,
            msg: "اطلاعات کاربری با موفقیت بروزرسانی شد!"
          })
          return res.json()
        }
      })
      .then(data => {
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
              value={email.value}
              onChange={(e) => email(e.target.value)}
              inputMode="email"
            />
            <i className="bi bi-person-circle"></i>
          </div>
          <div className="login_box display_grid">
            <input type="password" value={prePassword.value} onChange={(e) => setPrePassword({ ...prePassword, value: e.target.value })} placeholder="رمز قبلی" name="password" />
            <i className="bi bi-lock"></i>
          </div>
          <div className="login_box display_grid">
            <input type="password" value={password.value} onChange={(e) => setPassword({ ...password, value: e.target.value })} placeholder="رمز جدید" name="password" />
            <i className="bi bi-lock-fill"></i>
          </div>
        </div>
        <div className="reset_button">
          <button className="btn" onClick={sendInformation}>ارسال</button>
        </div>
      </form>
      <BackDrop show={completeMsg.show}>
        {<MessageBox
          messageType="info"
          firstBtn={{ btnText: "تایید", onClick: () => navigate("/") }}
          message={completeMsg.msg}
          iconType={ICONS.info}
        />}
      </BackDrop>
    </div>
  )
}

export default ResetPassword
