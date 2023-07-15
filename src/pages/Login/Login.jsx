import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { actionTypes } from "../../context/reducer"
import { setCookie } from "../../Utils/Cookie"
import { useStateValue } from "../../context/StateProvider"

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  })
  const [, dispatch] = useStateValue()
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:1000/api/v1/auth/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((res) => {
        console.log(res)
        if (res.ok) {
          return res.json()
        } else {
          // do some error handling
          throw new Error(res.statusText)
        }
      })
      .then((data) => {
        console.log(data)
        // if successfully authenticated
        setCookie("token", data?.token)
        setCookie("name", data?.name)
        setCookie("lastname", data.lastname)
        setCookie("email", data?.email)
        setCookie("userId", data?.userId)
        setCookie("imageUrl", data?.imageUrl)
        localStorage.setItem("roles", data?.roles.toString())
        dispatch({
          type: actionTypes.SET_AUTHENTICATION,
          payload: data,
        })
        navigate("/")
      })
  }

  return (
    <div className="login fade_in display_flex align_items_center flex_direction_column">
      <div className="avatart display_flex align_items_center justify_content_center"></div>
      <div className="login_container login_details display_flex align_items_center justify_content_center">
        <form action="">
          <div className="form_container">
            <div className="login_box display_grid">
              <input
                type="text"
                placeholder="ایمیل"
                name="email"
                value={inputs?.email}
                onChange={(e) => handleChange(e)}
              />
              <i className="bi bi-person-circle"></i>
            </div>
            <div className="login_box display_grid">
              <input
                type="password"
                placeholder="رمز عبور"
                name="password"
                value={inputs.password}
                onChange={(e) => handleChange(e)}
              />
              <i className="bi bi-lock-fill"></i>
            </div>
          </div>
          <p className="error">{error && "ایمیل یا رمز اشتباه است!"}</p>
          <div className="btn_login display_flex">
            <button
              className="login_button border_none outline_none cursor_pointer"
              onClick={handleSubmit}
            >
              ورود به سیستم
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
