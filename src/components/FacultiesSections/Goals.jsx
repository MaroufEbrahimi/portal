import React, { useState } from "react"
import "./FacultiesSections.css"

// اهداف و ارزش های پوهنحی
const Goals = ({ goals = [], values = [] }) => {
  const [showTab, setShowTab] = useState(1)

  const handleTabs = (index) => setShowTab(index)

  return (
    <div className="goals">
      <div className="faculties_sections_title">
        <h2>اهداف و ارزش ها</h2>
      </div>

      <div className="goals_tabHeader tab_header">
        <ul>
          <li
            className={showTab === 1 ? "active_tab" : ""}
            onClick={() => handleTabs(1)}
          >
            <span>اهداف</span>
          </li>
          <li
            className={showTab === 2 ? "active_tab" : ""}
            onClick={() => handleTabs(2)}
          >
            <span>ارزش ها</span>
          </li>
        </ul>
      </div>

      <div className="goals_contents faculties_tabHeader_contents">
        <div
          className={
            showTab === 1
              ? "tab_header_display active_content box_shadow"
              : "tab_header_display"
          }
        >
          {goals.map((item) => (
            <ul>
              <li>
                <span>{item}</span>
              </li>
            </ul>
          ))}
        </div>
        <div
          className={
            showTab === 2
              ? "tab_header_display active_content box_shadow"
              : "tab_header_display"
          }
        >
          {values.map((item) => (
            <ul>
              <li>
                <span>{item}</span>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Goals
