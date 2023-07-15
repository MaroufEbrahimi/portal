import React from "react"
import { useNavigate } from "react-router-dom"
import "./Header.css"
import { useStateValue } from "../../context/StateProvider"

const Header = ({ isDark, darkModeHandler }) => {
  const navigate = useNavigate()
  const [{ authentication }, dispatch] = useStateValue()
  return (
    <div className="header display_flex align_items_center justify_content_space_between">
      <div className="header_right display_flex">
        {!authentication?.isAuthenticated ? (
          <button
            className="header_login text_color cursor_pointer border_radius_8 background_color_transparent"
            onClick={() => navigate("/login")}
          >
            ورود به سیستم
          </button>
        ) : null}
      </div>
      <div className="header_left display_flex">
        <div
          className="dark_mode_toggle cursor_pointer border_radius_8 background_color_transparent"
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
