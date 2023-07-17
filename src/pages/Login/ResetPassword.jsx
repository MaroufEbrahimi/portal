import React, { useState } from "react"
import "./Login.css"
import "./ResetPassword.css"
import APIEnpoints from "../../constants/APIEndpoints"
import { useStateValue } from "../../context/StateProvider"
import APIEndpoints from "../../constants/APIEndpoints"

const ResetPassword = () => {
  const [email, setEmail] = useState({ value: localStorage.getItem("email") || '', msg: '' })
  const [password, setPassword] = useState({ value: '', msg: '' })
  const [prePassword, setPrePassword] = useState({ value: '', msg: '' })
  const [{ authentication }, dispatch] = useStateValue()

  const sendInformation = (e) => {
    console.log(authentication)
    e.preventDefault();

    // here should do some messaging
    if (password.value.length < 5 && prePassword.value.length < 5) {
      return;
    }
    if (password.value == prePassword.value) {
      return;
    }
    fetch(APIEndpoints.root + APIEnpoints.login.update, {
      method: "PUT",
      headers: {
        "Authorization": "Bearer " + authentication.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email.value,
        previousPassword: prePassword.value,
        newPassword: password.value
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }
  return (
    <div className="reset_password box_shadow">
      <div className="reset_password_title">
        <h2>ایمیل و رمز جدید تان را وارد نماید.</h2>
      </div>
      <form
        action=""
        className="display_flex align_items_center justify_content_center flex_direction_column"
      >
        <div className="form_container reset_password_form text_align_center border_radius_8">
          <div className="login_box display_grid">
            <input
              type="email"
              placeholder="ایمیل جدید"
              name="resetemail"
              value={email.value}
              onChange={(e) => email(e.target.value)}
              inputMode="email"
            />
            <i className="bi bi-person-circle"></i>
          </div>
          <div className="login_box display_grid">
            <input type="password" value={prePassword.value} onChange={(e) => setPrePassword({ ...prePassword, value: e.target.value })} placeholder="رمز قبلی" name="password" />
            <i className="bi bi-lock"></i>
          </div>
          <div className="login_box display_grid">
            <input type="password" value={password.value} onChange={(e) => setPassword({ ...password, value: e.target.value })} placeholder="رمز جدید" name="password" />
            <i className="bi bi-lock-fill"></i>
          </div>
        </div>
        <div className="reset_button">
          <button className="btn" onClick={sendInformation}>ارسال</button>
        </div>
      </form>
    </div>
  )
}

export default ResetPassword
