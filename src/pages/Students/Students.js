import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Students.css"
import Search from "../../components/Search/Search"
import { StuFilterButtons } from "../../constants/Data"
import { allStudents } from "../../constants/Data"

const Students = () => {
  const [showTab, setShowTab] = useState(1)
  const handleTabs = (index) => setShowTab(index)

  return (
    <div className="students_page fade_in">
      <Search hiddenButton />

      {/* add new student */}
      <div className="students_add_new_student">
        <button>
          <Link to="/admin/addstudent">محصل جدید</Link>
        </button>
        <button>
          <Link to="/admin/newpost">محتوای جدید</Link>
        </button>
      </div>

      {/* some button for filtering */}
      <div className="students_filter_btn">
        {StuFilterButtons.map((item) => (
          <button
            className={showTab === item.counter ? "active_tab" : ""}
            onClick={() => handleTabs(item.counter)}
          >
            {item.text}
          </button>
        ))}
      </div>

      {/* All Students Here */}
      <div className="all__students">
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
      </div>
    </div>
  )
}

export default Students
