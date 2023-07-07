import React, { useEffect, useState } from "react"
import USER from "../../assets/img/user.jpg"
import "./Profile.css"
import { profileTabHeader } from "../../constants/Data"
import Post from "../../components/Post/Post"
import { useParams } from "react-router-dom"
import { useStateValue } from "../../context/StateProvider"

const Profile = () => {
  const { id } = useParams()
  const [showTab, setShowTab] = useState(1)
  const [{ authentication }, dispatch] = useStateValue()
  const [student, setstudent] = useState({})

  console.log(authentication)
  useEffect(() => {
    fetch("http://localhost:1000/api/v1/students/" + id, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + authentication.token
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        console.log(data)
        setstudent(data)
      })

  }, [])

  const handleTabs = (index) => {
    setShowTab(index)
  }

  return (
    <div className="profile fade_in">
      <div className="profile_title">
        <div className="user_profile_img">
          <img src={student?.imageUrl} alt="user img" />
          <h1>{student?.studentPersonalInfo?.name} {student?.studentPersonalInfo?.lastName}</h1>
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
              <p>{student?.studentPersonalInfo?.name}</p>
            </div>
            <div className="content_box">
              <label>تخلص</label>
              <p>{student?.studentPersonalInfo?.lastName}</p>
            </div>
            <div className="content_box">
              <label>نام پدر</label>
              <p>{student?.studentPersonalInfo?.fatherName}</p>
            </div>
            <div className="content_box">
              <label>شماره تماس</label>
              <p>{student?.studentPersonalInfo?.phoneNumber}</p>
            </div>
            <div className="content_box">
              <label>ایمیل</label>
              <p>{student?.studentPersonalInfo?.phoneNumber}</p>
            </div>
            <div className="content_box">
              <label>سال شمولیت</label>
              <p>{student?.studentPersonalInfo?.phoneNumber}</p>
            </div>
            <div className="content_box">
              <label>دیپارتمنت</label>
              <p>{student?.studentPersonalInfo?.department}</p>
            </div>
            <div className="content_box">
              <label>سال</label>
              <p>{student?.studentPersonalInfo?.year}</p>
            </div>
            <div className="content_box">
              <label>سمستر</label>
              <p>{student?.studentPersonalInfo?.semester}</p>
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
