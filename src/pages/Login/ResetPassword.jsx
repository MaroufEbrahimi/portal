import React from "react"
import "./Login.css"
import "./ResetPassword.css"

const ResetPassword = () => {
  return (
    <div className="reset_password box_shadow">
      <div className="reset_password_title">
        <h2>ایمیل و رمز جدید تان را وارد نماید.</h2>
      </div>
      <form action="">
        <div className="form_container reset_password_form">
          <div className="login_box">
            <input type="text" placeholder="ایمیل جدید" name="resetemail" />
            <i className="bi bi-person-circle"></i>
          </div>
          <div className="login_box">
            <input type="password" placeholder="رمز قبلی" name="password" />
            <i className="bi bi-lock"></i>
          </div>
          <div className="login_box">
            <input type="password" placeholder="رمز جدید" name="password" />
            <i className="bi bi-lock-fill"></i>
          </div>
        </div>
        <div className="reset_button">
          <button className="btn">ارسال</button>
        </div>
      </form>
    </div>
  )
}

export default ResetPassword
