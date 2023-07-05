import React, { useState } from "react"
import "./UniversityInfo.css"
import { universityInfoTabHeader } from "../../constants/Data"
import Post from "../../components/Post/Post"

const UniversityInfo = () => {
  const [showTab, setShowTab] = useState(1)
  const handleTabs = (index) => setShowTab(index)

  return (
    <div className="university_info">
      <div className="title_info">
        <h1>تمامی سلاید ها و منابع خود را در این جا بیابید!</h1>
        <p>
          این یک متن تستی برای شما است شما می توانید در تمامی عرصه های زندگی از
          موارد زیادی برای تست استفاده نماید
        </p>
      </div>

      <h2>تمامی سمستر ها</h2>
      <div className="university_navbar">
        {universityInfoTabHeader.map((item) => (
          <ul>
            <li
              className={showTab === item.counter ? "active_tab" : ""}
              onClick={() => handleTabs(item.counter)}
            >
              <span>{item.text}</span>
            </li>
          </ul>
        ))}
      </div>

      <div className="content_of_universityInfo">
        <div className={showTab === 1 ? "content active_content" : "content"}>
          <Post />
          <Post />
          <Post />
        </div>

        <div className={showTab === 2 ? "content active_content" : "content"}>
          <Post />
        </div>

        <div className={showTab === 3 ? "content active_content" : "content"}>
          <Post />
        </div>

        <div className={showTab === 4 ? "content active_content" : "content"}>
          <Post />
        </div>

        <div className={showTab === 5 ? "content active_content" : "content"}>
          <Post />
        </div>

        <div className={showTab === 6 ? "content active_content" : "content"}>
          <Post />
        </div>

        <div className={showTab === 7 ? "content active_content" : "content"}>
          <Post />
        </div>

        <div className={showTab === 8 ? "content active_content" : "content"}>
          <Post />
        </div>
      </div>
    </div>
  )
}

export default UniversityInfo
