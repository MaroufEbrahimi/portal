import React from "react"
import { useNavigate } from "react-router-dom"
import "./Header.css"


const Header = ({isDark, darkModeHandler}) => {
  const navigate = useNavigate()
  return (
    <div className="header">
      <div className="header_right">
        <button className="header_login" onClick={() => navigate("/login")}>
          لاگین
        </button>
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
