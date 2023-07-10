import React from "react"
import { Link, useResolvedPath, useMatch } from "react-router-dom"
import "./Navbar.css"
import { useStateValue } from "../../context/StateProvider"
import logo from "../../assets/img/logo.png"

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
  const [{ authentication }, dispatch] = useStateValue();
  console.log(authentication)

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

      {
        authentication.isAuthenticated ?
          <Link to={"/profile/" + authentication.userId} className="nav_profile">
            <div className="add_img_profile full_width">
              <img
                src={authentication.imageUrl || "/public/img/favicon.png"}
                className="input_profile_img"
                alt="user_image"
              />
            </div>
            <h4>{authentication.name} {authentication.lastname}</h4>
          </Link>
          : <Link to="/" className="nav_profile">
            <div className="add_img_profile full_width">
              <img
                src={logo}
                className="input_profile_img"
                alt="user_image"
              />
            </div>
          </Link>
      }

      <div className="navbar_menu">
        <ul className="navbar_content">
          <CustomeLinks to="/" title="خانه">
            <i className="bi bi-house-door"></i>
            <span>خانه</span>
          </CustomeLinks>
          {authentication?.roles?.includes("STUDENT") ? (
            <CustomeLinks to="/posts" title="پست ها">
              <i className="bi bi-collection"></i>
              <span>پست ها</span>
            </CustomeLinks>
          ) : null}


          {authentication?.roles?.includes("ADMIN") ?
            <div>
              <div className="navbar__title open__navbar">
                <li className="navbar__item">
                  <i className="bi bi-gear"></i>
                  <span>ادمین پنل</span>
                  <i className="bi bi-chevron-down btn_toggle"></i>
                </li>
              </div>
              <input type="checkbox" className="drop_menu_button" />
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
            : ""}

          <CustomeLinks to="/about" title="درباره">
            <i className="bi bi-building"></i>
            <span>درباره</span>
          </CustomeLinks>

        </ul>

      </div >
    </div >
  )
}

export default Navbar
