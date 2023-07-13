import React from "react"
import { useNavigate } from "react-router-dom"
import "./Header.css"
import { useStateValue } from "../../context/StateProvider"

const Header = ({ isDark, darkModeHandler }) => {
  const navigate = useNavigate()
  const [{ authentication }, dispatch] = useStateValue()
  return (
    <div className="header">
      <div className="header_right">
        {!authentication?.isAuthenticated ? (
          <button className="header_login" onClick={() => navigate("/login")}>
            ورود به سیستم
          </button>
        ) : null}
      </div>
      <div className="header_left">
        <div
          className="dark_mode_toggle"
          onClick={darkModeHandler}
          title="تغییر تم"
        >
          {isDark ? (
            <i className="bi bi-brightness-high"></i>
          ) : (
            <i className="bi bi-moon"></i>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
