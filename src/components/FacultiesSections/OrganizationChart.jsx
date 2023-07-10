import React from "react"
import "./FacultiesSections.css"

// چارت تشکیلاتی پوهنحی
const OrganizationChart = ({ chartImg }) => {
  return (
    <div className="organizatioin_chart">
      <div className="faculties_sections_title">
        <h2>چارت تشکیلاتی</h2>
      </div>
      <div className="organization_chart_img">
        <img src={chartImg} alt="char img" />
      </div>
    </div>
  )
}

export default OrganizationChart
