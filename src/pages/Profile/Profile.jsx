import React, { useEffect, useState } from "react"
import "./Profile.css"
import { profileTabHeader } from "../../constants/Data"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useStateValue } from "../../context/StateProvider"
import { actionTypes } from "../../context/reducer"
import useProtect from "../../Hooks/useProtect"
import Roles from "../../constants/Roles"
import MessageBox from "../../components/MessageBox/MessageBox"
import ICONS from "../../constants/Icons"
import BackDrop from "../../components/UI/BackDrop/BackDrop"

const Profile = () => {
  const { id } = useParams()
  useProtect({ roles: [Roles.ADMIN, Roles.STUDENT], id: id })
  const [showTab, setShowTab] = useState(1)
  const [{ authentication }, dispatch] = useStateValue()
  const [student, setstudent] = useState({})
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)
  const showModalHandler = () => {
    setShowModal(true)
  }
  const modalCloseHandler = () => {
    setShowModal(false)
  }

  useEffect(() => {
    fetch("http://localhost:1000/api/v1/students/" + id, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + authentication.token,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })
      .then((data) => {
        console.log(data)
        setstudent(data)
      })
  }, [])

  const handleTabs = (index) => {
    setShowTab(index)
  }
  const logout = () => {
    localStorage.clear();
    dispatch({
      type: actionTypes.LOGOUT,
      payload: {},
    })
    navigate("/")
  }

  return (
    <div className="profile fade_in">
      <div className="profile_title">
        <div className="user_profile_img display_flex align_items_center">
          <img src={student?.imageUrl} alt="user img" />
          <h1>
            {student?.studentPersonalInfo?.name}{" "}
            {student?.studentPersonalInfo?.lastName}
          </h1>
        </div>
        <div className="logout_changePass display_flex">
          <button onClick={showModalHandler}>
            <span> خروج از حساب کاربری</span>
            <i className="bi bi-reply-all-fill"></i>
          </button>
          <button>
            <Link to="/reset-password">
              <span>تغییر رمز یا ایمیل</span>
              <i className="bi bi-check2-square"></i>
            </Link>
          </button>
        </div>
        <BackDrop show={showModal} modalClose={modalCloseHandler}>
          {<MessageBox
            messageType="asking"
            firstBtn={{ btnText: "بلی", onClick: logout }}
            secondBtn={{ btnText: "نخیر", onClick: modalCloseHandler }}
            message={"برای بیرون شدن از سیستم مطمین هستید؟"}
            iconType={ICONS.asking}
          />}
        </BackDrop>
      </div>

      <div className="profile_tab_header tab_header">
        {profileTabHeader.map((item) => (
          <ul key={item.counter}>
            <li
              className={showTab === item.counter ? "active_tab" : ""}
              onClick={() => handleTabs(item.counter)}
            >
              <span>{item.text}</span>
            </li>
          </ul>
        ))}
      </div>
      {
        authentication.roles.includes(Roles.STUDENT) ?
          <div className="content_of_profile border_radius_8">
            <div className={showTab === 1 ? "content active_content" : "content"}>
              <div className="content_boxes display_grid ">
                <div className="content_box">
                  <label>نام</label>
                  <p>{student?.studentPersonalInfo?.name}</p>
                </div>
                <div className="content_box">
                  <label>تخلص</label>
                  <p>{student?.studentPersonalInfo?.lastName}</p>
                </div>
                <div className="content_box">
                  <label>نام پدر</label>
                  <p>{student?.studentPersonalInfo?.fatherName}</p>
                </div>
                <div className="content_box">
                  <label>شماره تماس</label>
                  <p>{student?.studentPersonalInfo?.phoneNumber}</p>
                </div>
                <div className="content_box">
                  <label>ایمیل</label>
                  <p>{student?.studentPersonalInfo?.email}</p>
                </div>
                <div className="content_box">
                  <label>سال شمولیت</label>
                  <p>{student?.studentPersonalInfo?.joinedDate}</p>
                </div>
                <div className="content_box">
                  <label>دیپارتمنت</label>
                  <p>{student?.studentPersonalInfo?.department}</p>
                </div>
                <div className="content_box">
                  <label>سال</label>
                  <p>{student?.studentPersonalInfo?.year}</p>
                </div>
                <div className="content_box">
                  <label>سمستر</label>
                  <p>{student?.studentPersonalInfo?.semester}</p>
                </div>
              </div>
            </div>

            <div
              className={
                showTab === 2
                  ? "content active_content text_align_center"
                  : "content"
              }
            >
              <h1>بزودی...</h1>
            </div>

          </div>
          : null
      }
    </div >
  )
}

export default Profile
