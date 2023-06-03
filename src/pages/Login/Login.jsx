import React from "react"
import "./Login.css"
import LOGO from "../../assets/img/logo.png"

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <form>
          <img className="avatar" src={LOGO} alt="Profile svg" />
          <h2>دانشگاه هریوا</h2>
          <div className="input-div one">
            <div className="i">
              <i className="bi bi-person-circle"></i>
            </div>
            <div>
              <h5>نام کاربری</h5>
              <input className="input" type="text" />
            </div>
          </div>
          <div className="input-div two">
            <div className="i">
              <i className="bi bi-lock-fill"></i>
            </div>
            <div>
              <h5>رمز کاربری</h5>
              <input className="input" type="password" />
            </div>
          </div>
          <a href="#">رمز را فراموش کرده اید؟</a>
          <input type="submit" className="btn" value="ورود به سیستم" />
        </form>
      </div>
    </div>
  )
}

export default Login
