import React from "react"
import "./FacultiesSections.css"

// معرفی از خود پوهنحی
const IntroductionOfFaculty = ({ facultyText1, facultyText2 }) => {
  return (
    <div className="introduction_of_faculty">
      <div className="faculties_sections_title">
        <h2>معرفی پوهنحی</h2>
      </div>
      <p>{facultyText1}</p>
      <p>{facultyText2}</p>
    </div>
  )
}

export default IntroductionOfFaculty
