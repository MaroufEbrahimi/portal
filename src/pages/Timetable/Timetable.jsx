import React, { useState } from "react"
import "./Timetable.css"
import { timeTableImg, timetableExam } from "../../constants/Data"

const Timetable = () => {
  const [showTabTimeTable, setShowTabTimeTable] = useState(1)

  const handleTimeTable = (index) => setShowTabTimeTable(index)

  return (
    <div className="time_table">
      <div className="faculties_sections_title">
        <h2>تقـسـیم اوقات ها</h2>
      </div>

      <div className="time_table_tabHeader tab_header">
        <ul>
          <li
            className={showTabTimeTable === 1 ? "active_tab" : ""}
            onClick={() => handleTimeTable(1)}
          >
            <span>تقـسـیم اوقات های روزانه</span>
          </li>
          <li
            className={showTabTimeTable === 2 ? "active_tab" : ""}
            onClick={() => handleTimeTable(2)}
          >
            <span>تقـسـیم اوقات های امـتحانات</span>
          </li>
        </ul>
      </div>

      {/* Time Table Content */}
      <div className="time_table_content">
        <div
          className={
            showTabTimeTable === 1
              ? "tab_header_display active_content box_shadow"
              : "tab_header_display"
          }
        >
          {timeTableImg.map((img) => (
            <img src={img.timetable} key={img.id} />
          ))}
        </div>

        <div
          className={
            showTabTimeTable === 2
              ? "tab_header_display active_content box_shadow"
              : "tab_header_display"
          }
        >
          {timetableExam.map((img) => (
            <img src={img.timetableEx} key={img.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timetable
