import React from "react"
import { Link } from "react-router-dom"
import "./Student.css"
import { allStudents } from "../../constants/Data"

const Student = ({ email }) => {
  return (
    <div className="student">
      {allStudents.map((item, index) => (
        <Link to="/" className="students_details">
          <div className="student_title_profile">
            <div className="student_profile_header"></div>
            <div className="student_profile_img">
              <img src={item.profileImg} />
            </div>
          </div>

          <div className="student_descriptions">
            <div className="student_personal_info">
              <p>{item.studentName}</p>
              <p>{item.studentEmail}</p>
            </div>
            <div className="student_university_info">
              <p>
                <span>{item.studentDepartement}</span>
                <span>دیپارتمنت</span>
              </p>
              <p>
                <span>{item.studentSemester}</span>
                <span>سمستر</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Student
