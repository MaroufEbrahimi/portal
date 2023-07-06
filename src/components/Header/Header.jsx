import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { DarkModeContext } from "../../context/darkMode"
import "./Header.css"

const Header = () => {
  const navigate = useNavigate()
  const { toggle, darkMode } = useContext(DarkModeContext)

  return (
    <div className="header">
      <div className="header_right">
        <button className="header_login" onClick={() => navigate("/login")}>
          لاگین
        </button>
      </div>
      <div className="header_left">
        <div className="dark_mode_toggle">
          {darkMode ? (
            <i
              onClick={toggle}
              className="bi bi-brightness-high"
              title="تغییر تم"
            ></i>
          ) : (
            <i onClick={toggle} className="bi bi-moon" title="تغییر تم"></i>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
