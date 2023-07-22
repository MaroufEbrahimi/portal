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
import BtnTypes from "../../constants/BtnTypes"
import APIEndpoints from "../../constants/APIEndpoints"

const Profile = () => {
  const { id } = useParams()
  useProtect({ roles: [Roles.ADMIN, Roles.STUDENT], id: id })
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
    fetch(APIEndpoints.root + APIEndpoints.students.getStudent(id), {
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
  }, [id])

  const logout = () => {
    localStorage.clear()
    dispatch({
      type: actionTypes.LOGOUT,
      payload: {},
    })
    navigate("/")
  }
  console.log(student)
  return (
    <div className="profile fade_in box_shadow display_flex border_radius_8">
      <div className="profile_title display_flex align_items_center justify_content_center flex_direction_column">
        <div className="user_profile_img display_flex align_items_center flex_direction_column">
          {(authentication.roles.includes(Roles.ADMIN) &&
            id != authentication?.userId) ||
          (authentication.roles.includes(Roles.STUDENT) &&
            id == authentication?.userId) ? (
            <img src={student?.imageUrl} alt="user img" />
          ) : null}

          <h1>
            {student?.studentPersonalInfo?.name}{" "}
            {student?.studentPersonalInfo?.lastName}
          </h1>
        </div>
        <div className="logout_changePass display_flex align_items_center flex_direction_column">
          <button>
            <Link to={"/reset-password/" + id}>
              <span>تغییر رمز یا ایمیل</span>
              <i className="bi bi-check2-square"></i>
            </Link>
          </button>
          {authentication.roles.includes(Roles.ADMIN) &&
            authentication.userId != id && (
              <button>
                <Link to={"/admin/update-student/" + id}>
                  <span>بروزرسانی اطلاعات</span>
                  <i className="bi bi-arrow-repeat"></i>
                </Link>
              </button>
            )}
          <button onClick={showModalHandler}>
            <span> خروج از حساب کاربری</span>
            <i className="bi bi-reply-all-fill"></i>
          </button>
        </div>
        <BackDrop show={showModal} modalClose={modalCloseHandler}>
          {
            <MessageBox
              messageType="asking"
              firstBtn={{
                btnText: "بلی",
                btnType: BtnTypes.danger,
                onClick: logout,
              }}
              secondBtn={{ btnText: "نخیر", onClick: modalCloseHandler }}
              message={"برای بیرون شدن از سیستم مطمین هستید؟"}
              iconType={ICONS.asking}
            />
          }
        </BackDrop>
      </div>

      {(authentication.roles.includes(Roles.ADMIN) &&
        id != authentication?.userId) ||
      (authentication.roles.includes(Roles.STUDENT) &&
        id == authentication?.userId) ? (
        <div className="profile_details">
          <div className="content_of_profile border_radius_8">
            <div className="content">
              <div className="content_boxes display_grid ">
                <div className="content_box">
                  <label>نـام</label>
                  <p>{student?.studentPersonalInfo?.name}</p>
                </div>
                <div className="content_box">
                  <label>تـخـلـص</label>
                  <p>{student?.studentPersonalInfo?.lastName}</p>
                </div>
                <div className="content_box">
                  <label>نـام پـدر</label>
                  <p>{student?.studentPersonalInfo?.fatherName}</p>
                </div>
                <div className="content_box">
                  <label>شـمـاره تـمـاس</label>
                  <p>{student?.studentPersonalInfo?.phoneNumber}</p>
                </div>
                <div className="content_box">
                  <label>سـال شـمـولـیت</label>
                  <p>{student?.studentPersonalInfo?.joinedDate}</p>
                </div>
                <div className="content_box">
                  <label>دیـپارتمـنت</label>
                  <p>{student?.studentPersonalInfo?.department}</p>
                </div>
                <div className="content_box">
                  <label>سـال</label>
                  <p>{student?.studentPersonalInfo?.year}</p>
                </div>
                <div className="content_box">
                  <label>سـمـستر</label>
                  <p>{student?.studentPersonalInfo?.semester}</p>
                </div>
                <div className="content_box profile_full_box">
                  <label>ایـمـیل</label>
                  <p>{student?.studentPersonalInfo?.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Profile
