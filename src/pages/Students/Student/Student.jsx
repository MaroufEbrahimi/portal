import React from "react"
import { Link } from "react-router-dom"
import "./Student.css"
import logo from "../../../assets/img/user.jpg"

const Student = () => {
  return (
    <Link to="/" className="student">
      <div className="student_title_profile">
        <div className="student_profile_header"></div>
        <div className="student_profile_img">
          <img src={logo} />
        </div>
      </div>
      <div className="student_descriptions">
        <div className="student_personal_info">
          <p>معروف ابراهیمی</p>
          <p>famout@gmail.com</p>
        </div>
        <div className="student_university_info">
          <p>
            <span>سافت ویر</span>
            <span>دیپارتمنت</span>
          </p>
          {/* <button>محتوا بیشتر</button> */}
          <p>
            <span>8</span>
            <span>سمستر</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Student
