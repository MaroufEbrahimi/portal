import React, { useEffect, useState } from "react"
import "./Profile.css"
import { useNavigate, useParams } from "react-router-dom"
import { useStateValue } from "../../context/StateProvider"
import { actionTypes } from "../../context/reducer"
import useProtect from "../../Hooks/useProtect"
import Roles from "../../constants/Roles"
import MessageBox from "../../components/MessageBox/MessageBox"
import ICONS from "../../constants/Icons"
import BackDrop from "../../components/UI/BackDrop/BackDrop"
import BtnTypes from "../../constants/BtnTypes"
import APIEndpoints from "../../constants/APIEndpoints"
import Button from "../../components/UI/Button/Button"

const Profile = () => {
  const { id } = useParams()
  useProtect({ roles: [Roles.ADMIN, Roles.STUDENT], id: id })
  const [{ authentication }, dispatch] = useStateValue()
  const [student, setstudent] = useState({})
  const navigate = useNavigate()

  // State of All Modals
  const [showModal, setShowModal] = useState(false)
  const [removeModal, setremoveModal] = useState(false)
  const [disableModal, setdisableModal] = useState(false)
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

  const removeStudent = () => {}

  const disableStudentAccount = () => {}
  console.log(student)
  return (
    <div className="profile fade_in box_shadow display_flex border_radius_8">
      <div className="profile_title display_flex align_items_center justify_content_center flex_direction_column">
        {/* User Profile Image */}
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
        {/* Profile Edit buttons */}
        <div className="student_profile_buttons display_flex align_items_center flex_direction_column">
          {authentication.roles.includes(Roles.ADMIN) &&
            authentication.userId != id && (
              <div className="delete_lock_buttons display_flex align_items_center justify_content_space_between">
                <Button
                  icon={ICONS.trash}
                  onClick={() => setremoveModal(true)}
                  text={"حذف کردن"}
                />
                <Button
                  icon={student.isEnable ? ICONS.unlock : ICONS.lock}
                  onClick={() => setdisableModal(true)}
                  text={student.isEnable ? "فعال سازی" : "غیرفعال سازی"}
                />
              </div>
            )}

          <Button
            icon={ICONS.square}
            onClick={() => navigate("/reset-password/" + id)}
            text={"تغییر رمز یا ایمیل"}
          />
          {authentication.roles.includes(Roles.ADMIN) &&
            authentication.userId != id && (
              <Button
                icon={ICONS.edit}
                text={"بروزرسانی اطلاعات"}
                onClick={() => navigate("/admin/update-student/" + id)}
              />
            )}
          <Button
            icon={ICONS.logout}
            text={"خروج از حساب کاربری"}
            onClick={showModalHandler}
          />
        </div>

        {/* Message box for Enable or Not Enable */}
        <BackDrop show={disableModal} modalClose={() => setdisableModal(false)}>
          {
            <MessageBox
              messageType="asking"
              firstBtn={{
                btnText: "بلی",
                btnType: BtnTypes.danger,
                onClick: disableStudentAccount,
              }}
              secondBtn={{
                btnText: "نخیر",
                onClick: () => setdisableModal(false),
              }}
              message={
                student.isEnable
                  ? "برای فعال سازی پروفایل محصل مطمین هستید؟"
                  : "برای غیر فعال سازی پروفایل محصل مطمین هستید؟"
              }
              iconType={ICONS.asking}
            />
          }
        </BackDrop>

        {/* Message box for Delete Student */}
        <BackDrop show={removeModal} modalClose={() => setremoveModal(false)}>
          {
            <MessageBox
              messageType="asking"
              firstBtn={{
                btnText: "بلی",
                btnType: BtnTypes.danger,
                onClick: removeStudent,
              }}
              secondBtn={{
                btnText: "نخیر",
                onClick: () => setremoveModal(false),
              }}
              message={"برای حذف کردن محصل از سیستم مطمین هستید؟"}
              iconType={ICONS.asking}
            />
          }
        </BackDrop>

        {/* Message box for Logout */}
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

      {/* Student Personal Information */}
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
