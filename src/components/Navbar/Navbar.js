import React, { useState, useContext } from "react"
import { Link, useResolvedPath, useMatch } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
import profile from "../../assets/img/profile_avatar.png"
import "./Navbar.css"

const CustomeLinks = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

const Navbar = ({ activeNav, navActiveHandler }) => {
  const authContext = useContext(AuthContext)

  return (
    <div className={`navbar ${activeNav && "active_nav_right"}`}>
      <div className="toggle_header_navbar">
        <div className="toggle_header_icon" onClick={navActiveHandler}>
          {activeNav ? (
            <i className="bi bi-chevron-left"></i>
          ) : (
            <i className="bi bi-chevron-right"></i>
          )}
        </div>
      </div>

      <Link to="/profile/1" className="nav_profile">
        <img src={profile} alt="logo" className="logo_img" />
        <h4>معروف ابراهیمی</h4>
      </Link>

      <div className="navbar_menu">
        <ul className="navbar_content">
          <CustomeLinks to="/" title="خانه">
            <i className="bi bi-house-door"></i>
            <span>خانه</span>
          </CustomeLinks>
          {authContext.isAuth ? (
            <CustomeLinks to="/posts" title="پست ها">
              <i className="bi bi-collection"></i>
              <span>پست ها</span>
            </CustomeLinks>
          ) : null}
          <div className="navbar__title open__navbar">
            <li className="navbar__item">
              <i className="bi bi-gear"></i>
              <span>ادمین پنل</span>
              <i className="bi bi-chevron-down btn_toggle"></i>
            </li>
          </div>
        </ul>
        <div className="navbar__dropdown">
          <CustomeLinks to="/students" title="محصلین">
            <i className="bi bi-people"></i>
            <span>محصلین</span>
          </CustomeLinks>
          <CustomeLinks to="/admin/newpost" title="محتوا جدید">
            <i className="bi bi-file-earmark-plus"></i>
            <span>محتوای جدید</span>
          </CustomeLinks>
          <CustomeLinks to="/admin/postmanagement" title="مدیریت پست ها">
            <i className="bi bi-files"></i>
            <span>مدیریت پست ها</span>
          </CustomeLinks>
        </div>
      </div>
    </div>
  )
}

export default Navbar
