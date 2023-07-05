import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
import "./Login.css"
import axios from "axios"

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState(null)
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("/auth/login", inputs)
      navigate("/")
    } catch (err) {
      setError(err.response.data)
    }
  }

  return (
    <div className="login fade_in">
      <div className="avatart">
        <i className="bi bi-person"></i>
      </div>
      <div className="login_container login_details">
        <form action="">
          <div className="form_container">
            <div className="login_box">
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <i className="bi bi-person-circle"></i>
            </div>
            <div className="login_box">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <i className="bi bi-lock-fill"></i>
            </div>
          </div>
          <p className="error">{error && "ایمیل یا رمز اشتباه است!"}</p>
          <div className="btn_login">
            <button className="login_button" onClick={handleSubmit}>
              ورود به سیستم
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
