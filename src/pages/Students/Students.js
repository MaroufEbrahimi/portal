import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Students.css"
import Student from "../../components/Student/Student"
import Search from "../../components/Search/Search"
import { StuFilterButtons } from "../../constants/Data"

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
        <Student />
      </div>
    </div>
  )
}

export default Students
