import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className="header">
      <div className="header_right">
        <button className="header_login" onClick={() => navigate("/login")}>
          لاگین
        </button>
      </div>
      <div className="header_left">
        <p>dark mode</p>
      </div>
    </div>
  )
}

export default Header
