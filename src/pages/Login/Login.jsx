import React from "react"
import "./Login.css"
import LOGO from "../../assets/img/logo.png"

const Login = () => {
  return (
    <div className="login fade_in">
      <div className="login_container login_details">
        <div className="avatart">
          <i className="bi bi-person"></i>
        </div>
        <form action="">
          <div className="form_container">
            <div className="login_box">
              <input type="text" placeholder="Email" />
              <i className="bi bi-person-circle"></i>
            </div>
            <div className="login_box">
              <input type="password" placeholder="Password" />
              <i className="bi bi-lock-fill"></i>
            </div>
          </div>
          <div className="btn_login">
            <button className="login_button">ورود به سیستم</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
