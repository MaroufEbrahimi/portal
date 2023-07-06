import React from "react"
import { Link } from "react-router-dom"
import "./Student.css"

const Student = ({ studentInfo }) => {
  return (
    <div className="student">
      <Link to={"/profile/" + studentInfo?.id} className="students_details">
        <div className="student_title_profile">
          <div className="student_profile_header"></div>
          <div className="student_profile_img">
            <img src={studentInfo?.imageUrl} />
          </div>
        </div>

        <div className="student_descriptions">
          <div className="student_personal_info">
            <p>{studentInfo?.name}</p>
            <p>{studentInfo?.lastname}</p>
          </div>
          <div className="student_university_info">
            <p>
              <span>{studentInfo?.department}</span>
              <span>دیپارتمنت</span>
            </p>
            <p>
              <span>{studentInfo?.semester}</span>
              <span>سمستر</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Student
