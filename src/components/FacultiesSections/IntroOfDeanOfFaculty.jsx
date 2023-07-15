import React from "react"
import "./FacultiesSections.css"

// معرفی رییس پوهنحی
const IntroOfDeanOfFaculty = ({
  deanImg,
  deanName,
  FieldofStudy,
  deanDegree,
  deanDuty,
  deanCallNum,
  deanEmail,
  deanTxt1,
  deanTxt2,
}) => {
  return (
    <div className="intro_of_dean_of_faculty display_flex justify_content_space_between">
      <div className="dean_of_faculty_info">
        <div className="dean_of_img display_flex align_items_center justify_content_center text_align_center">
          <img className="main_img" src={deanImg} alt="Dean image" />
        </div>
        <div className="dean_of_faculty_details">
          <ul>
            <li>
              <strong>نام کامل</strong>
              <span>{deanName}</span>
            </li>
            <li>
              <strong>رشته تحصیلی</strong>
              <span>{FieldofStudy}</span>
            </li>
            <li>
              <strong>مدرک تحصیلی</strong>
              <span>{deanDegree}</span>
            </li>
            <li>
              <strong>سمت</strong>
              <span>{deanDuty}</span>
            </li>
            <li>
              <strong>شماره تماس</strong>
              <span>{deanCallNum}</span>
            </li>
            <li>
              <strong>ایمیل</strong>
              <span>{deanEmail}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="dean_of_faculty_text">
        <p>{deanTxt1}</p>
        <p>{deanTxt2}</p>
      </div>
    </div>
  )
}

export default IntroOfDeanOfFaculty
