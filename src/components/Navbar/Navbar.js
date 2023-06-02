import React, { useState } from "react"
import { Link, useResolvedPath, useMatch } from "react-router-dom"
import LOGO from "../../assets/img/logo.png"
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

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={LOGO} alt="logo" className="logo_img" />
      </div>
      <ul className="navbar_menu">
        <CustomeLinks to="/" title="خانه">
          <i className="bi bi-house-door"></i>
          <span>خانه</span>
        </CustomeLinks>
        <CustomeLinks to="/search" title="جستجو">
          <i className="bi bi-search"></i>
          <span>جستجو</span>
        </CustomeLinks>
        <CustomeLinks to="/students" title="محصلین">
          <i className="bi bi-people"></i>
          <span>محصلین</span>
        </CustomeLinks>
        <CustomeLinks to="/sttings" title="تنظیمات">
          <i className="bi bi-gear"></i>
          <span>تنظیمات</span>
        </CustomeLinks>
      </ul>
    </div>
  )
}

export default Navbar
