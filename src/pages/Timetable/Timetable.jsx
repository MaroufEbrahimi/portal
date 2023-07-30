import React, { useState } from "react"
import "./Timetable.css"
import { timeTableImg, timetableExam } from "../../constants/Data"
import Button from "../../components/UI/Button/Button"
import ICONS from "../../constants/Icons"
import Spinner from "../../components/UI/Loading/Spinner"
import BackDrop from "../../components/UI/BackDrop/BackDrop"

const Timetable = () => {
  const [showTabTimeTable, setShowTabTimeTable] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [imageOnModal, setImageOnModal] = useState("")
  const [loading, setloading] = useState(true)

  const handleTimeTable = (index) => setShowTabTimeTable(index)

  // show image in fullscreen mode
  const fullscreen = (url) => {
    setImageOnModal(url)
    setShowModal(true)
  }

  const modalCloseHandler = () => {
    setShowModal(false)
    setloading(true)
  }

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
            <div className="time_table_img">
              <img src={img.timetable} key={img.id} />
              <div className="btn_container_for_modal display_flex align_items_center justify_content_center">
                <span title="صحفه بزرگ">
                  <Button
                    icon={ICONS.fullscreen}
                    onClick={() => fullscreen(img.timetable)}
                  />
                </span>
              </div>
            </div>
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
            <div className="time_table_img">
              <img src={img.timetableEx} key={img.id} />
              <div className="btn_container_for_modal display_flex align_items_center justify_content_center">
                <span title="صحفه بزرگ">
                  <Button
                    icon={ICONS.fullscreen}
                    onClick={() => fullscreen(img.timetableEx)}
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="back_drop_img_modal">
          <BackDrop show={showModal} closeModal={modalCloseHandler}>
            {loading && <Spinner />}
            <img
              src={imageOnModal}
              onLoad={() => setloading(false)}
              alt="file_image"
            />
          </BackDrop>
        </div>
      </div>
    </div>
  )
}

export default Timetable
