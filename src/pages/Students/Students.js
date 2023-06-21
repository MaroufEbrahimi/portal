import React from "react"
import "./Students.css"
import Student from "../../components/Student/Student"
import Search from "../../components/Search/Search"

const Students = () => {
  return (
    <div className="students_page fade_in">
      <Search hiddenButton />

      {/* All Students Here */}
      <div className="all__students">
        <Student />
      </div>
    </div>
  )
}

export default Students
