import React, { useState } from "react"
import { Link, useResolvedPath, useMatch } from "react-router-dom"
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
      <ul className="navbar_menu">
        <CustomeLinks to="/">
          <i className="bi bi-house-door"></i>
          <span>Home</span>
        </CustomeLinks>
        <CustomeLinks to="/search">
          <i className="bi bi-search"></i>
          <span>Search</span>
        </CustomeLinks>
        <CustomeLinks to="/students">
          <i className="bi bi-people"></i>
          <span>Students</span>
        </CustomeLinks>
      </ul>
    </div>
  )
}

export default Navbar
