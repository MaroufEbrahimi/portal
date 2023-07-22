import React from "react"
import { Link } from "react-router-dom"
import "./Student.css"

const Student = ({ studentInfo, customRef }) => {
  return (
    <div className="student box_shadow" ref={customRef}>
      <Link to={"/profile/" + studentInfo?.id}>
        <div className="student_title_profile">
          <div className="student_profile_header"></div>
          <div className="student_profile_img display_flex align_items_center justify_content_center">
            <img src={studentInfo?.imageUrl} />
          </div>
        </div>

        <div className="student_descriptions">
          <div className="student_personal_info display_flex align_items_center flex_direction_column text_align_center">
            <p>{studentInfo?.name}</p>
            <p>{studentInfo?.lastname}</p>
          </div>
          <div className="student_university_info display_flex align_items_center justify_content_space_around border_radius_8">
            <p>
              <span>{studentInfo?.fieldStudy}</span>
              <span>پوهنحی</span>
            </p>
            <p>
              <span>{studentInfo?.department}</span>
              <span>دیپارتمنت</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Student
