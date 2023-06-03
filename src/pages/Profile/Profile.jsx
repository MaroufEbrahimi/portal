import React from "react"
import { Link } from "react-router-dom"
import USER from "../../assets/img/user.jpg"
import "./Profile.css"

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile_title">
        <div className="user_profile_img">
          <img src={USER} alt="user img" />
          <h1>معروف ابراهیمی</h1>
        </div>
      </div>
      <div className="profile_links">
        <ul>
          <li><Link to="/">معلومات شخصی</Link></li>
          <li><Link to="/">معلومات دانشگاه</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Profile
