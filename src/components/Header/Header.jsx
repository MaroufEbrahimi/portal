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
        {
          !authentication?.isAuthenticated ? <button className="header_login" onClick={() => navigate("/login")}>
            ورود به سیستم
          </button> : null
        }
      </div>
      <div className="header_left">
        <div className="dark_mode_toggle">
          {isDark ? (
            <i
              onClick={darkModeHandler}
              className="bi bi-brightness-high"
              title="تغییر تم"
            ></i>
          ) : (
            <i onClick={darkModeHandler} className="bi bi-moon" title="تغییر تم"></i>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
