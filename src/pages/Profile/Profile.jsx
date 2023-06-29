import React, { useState } from "react"
import USER from "../../assets/img/user.jpg"
import "./Profile.css"

import { profileTabHeader } from "../../constants/Data"
import Post from "../../components/Post/Post"

const Profile = () => {
  const [showTab, setShowTab] = useState(1)

  const handleTabs = (index) => {
    setShowTab(index)
  }

  return (
    <div className="profile fade_in">
      <div className="profile_title">
        <div className="user_profile_img">
          <img src={USER} alt="user img" />
          <h1>معروف ابراهیمی</h1>
        </div>
      </div>

      <div className="tab_header">
        {profileTabHeader.map((item) => (
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
      <div className="content_of_profile">
        <div className={showTab === 1 ? "content active_content" : "content"}>
          <div className="content_boxes">
            <div className="content_box">
              <label>نام</label>
              <p>معروف</p>
            </div>
            <div className="content_box">
              <label>تخلص</label>
              <p>ابراهیمی</p>
            </div>
            <div className="content_box">
              <label>نام پدر</label>
              <p>ابراهیمی</p>
            </div>
            <div className="content_box">
              <label>شماره تماس</label>
              <p>0799503350</p>
            </div>
            <div className="content_box">
              <label>ایمیل</label>
              <p>famous@gmail.com</p>
            </div>
            <div className="content_box">
              <label>سال شمولیت</label>
              <p>1398</p>
            </div>
            <div className="content_box">
              <label>دیپارتمنت</label>
              <p>سافت ویر</p>
            </div>
            <div className="content_box">
              <label>سال</label>
              <p>4</p>
            </div>
            <div className="content_box">
              <label>سمستر</label>
              <p>8</p>
            </div>
          </div>
        </div>

        <div className={showTab === 2 ? "content active_content" : "content"}>
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  )
}

export default Profile
