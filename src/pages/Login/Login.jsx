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
      body: inputs,
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
        setCookie("lastName", data.lastName)
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
