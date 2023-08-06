import React, { useState } from "react"
import { Link, useResolvedPath, useMatch } from "react-router-dom"
import "./Navbar.css"
import { useStateValue } from "../../context/StateProvider"
import logo from "../../assets/img/logo.png"
import lowIcon from "../../assets/img/faculties/low-icon.png"
import dentistryIcon from "../../assets/img/faculties/dentistry-icon.png"
import ICONS from "../../constants/Icons"

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
  const [{ authentication }, dispatch] = useStateValue()
  const [activeFaculties, setActiveFaculties] = useState(false)
  const [activeAdminPanel, setActiveAdminPanel] = useState(false)

  const facultiesHandler = () => setActiveFaculties(!activeFaculties)
  const adminPanelHandler = () => setActiveAdminPanel(!activeAdminPanel)

  return (
    <div className={`navbar ${activeNav && "active_nav_right"}`}>
      <div className="toggle_header_navbar">
        <div
          className="toggle_header_icon display_flex align_items_center justify_content_center"
          onClick={navActiveHandler}
        >
          {activeNav ? (
            <i className={`${ICONS.chevronLeft} text_color cursor_pointer`}></i>
          ) : (
            <i
              className={`${ICONS.chevronRight} text_color cursor_pointer`}
            ></i>
          )}
        </div>
      </div>

      {authentication.isAuthenticated ? (
        <Link
          to={"/profile/" + authentication.userId}
          className="nav_profile display_flex align_items_center justify_content_center flex_direction_column"
        >
          <div className="add_img_profile display_flex">
            <img
              src={authentication.imageUrl || "/public/img/favicon.png"}
              className="input_profile_img display_flex"
              alt="user_image"
            />
          </div>
          <h4 className="text_color">
            {authentication.name} {authentication.lastname}
          </h4>
        </Link>
      ) : (
        <Link
          to="/"
          className="nav_profile display_flex align_items_center justify_content_center flex_direction_column"
        >
          <div className="add_img_profile">
            <img
              src={logo}
              className="input_profile_img display_flex"
              alt="user_image"
            />
          </div>
        </Link>
      )}

      <div className="navbar_menu">
        <ul className="navbar_content">
          <CustomeLinks to="/" title="خانه">
            <i className={ICONS.door}></i>
            <span>خانه</span>
          </CustomeLinks>
          {authentication?.roles?.includes("STUDENT") ? (
            <CustomeLinks to="/posts" title="پست ها">
              <i className={ICONS.collection}></i>
              <span>پست ها</span>
            </CustomeLinks>
          ) : null}

          {/* Links of Faculties */}
          <div className="faculties_menu">
            <div className="menu_container">
              <div className="navbar__title open__navbar display_flex">
                <li className="navbar__item display_flex align_items_center">
                  <i className={ICONS.mortarboard}></i>
                  <span>پوهنــځی‌ها</span>
                  <div style={{ paddingRight: "34px" }}>
                    {activeFaculties ? (
                      <i className={`${ICONS.chevronDown} btn_toggle`}></i>
                    ) : (
                      <i className={`${ICONS.chevronRight} btn_toggle`}></i>
                    )}
                  </div>
                </li>
              </div>
              <input
                type="checkbox"
                onClick={facultiesHandler}
                className="drop_menu_button outline_none cursor_pointer"
              />
              <div className="navbar__dropdown">
                <CustomeLinks to="faculties/0" title="کامپیوتر ساینس">
                  <i className={ICONS.window}></i>
                  <span>کامپیوتر ساینس</span>
                </CustomeLinks>
                <CustomeLinks to="faculties/1" title="طب دندان">
                  <i>
                    <img src={dentistryIcon} />
                  </i>
                  <span>طب دندان</span>
                </CustomeLinks>
                <CustomeLinks to="faculties/2" title="حقوق وعلوم سیاسی">
                  <i>
                    <img src={lowIcon} />
                  </i>
                  <span>حقوق</span>
                </CustomeLinks>
              </div>
            </div>
          </div>

          {authentication?.roles?.includes("ADMIN") ? (
            <div className="admin_menu menu_container">
              <div className="navbar__title open__navbar display_flex">
                <li className="navbar__item display_flex align_items_center">
                  <i className={ICONS.gear}></i>
                  <span>ادمین پنل</span>
                  <div style={{ paddingRight: "40px" }}>
                    {activeAdminPanel ? (
                      <i className={`${ICONS.chevronDown} btn_toggle`}></i>
                    ) : (
                      <i className={`${ICONS.chevronRight} btn_toggle`}></i>
                    )}
                  </div>
                </li>
              </div>
              <input
                type="checkbox"
                onClick={adminPanelHandler}
                className="drop_menu_button outline_none cursor_pointer"
              />
              <div className="navbar__dropdown admin_navbar__dropdown ">
                <CustomeLinks to="/admin/students" title="محصلین">
                  <i className={ICONS.people}></i>
                  <span>محصلین</span>
                </CustomeLinks>
                <CustomeLinks to="/admin/newpost" title="محتوا جدید">
                  <i className={ICONS.earmarkPlus}></i>
                  <span>محتوای جدید</span>
                </CustomeLinks>
                <CustomeLinks to="/admin/post-management" title="مدیریت پست ها">
                  <i className={ICONS.files}></i>
                  <span>مدیریت پست ها</span>
                </CustomeLinks>
                <CustomeLinks to="/admin/teachers" title="اساتید">
                  <i className={ICONS.peopleّّFill}></i>
                  <span>اساتید</span>
                </CustomeLinks>
                <CustomeLinks to="/admin/attendance-sheet" title="حاضری ها">
                  <i className={ICONS.calendar}></i>
                  <span>حاضری ها</span>
                </CustomeLinks>
                <CustomeLinks to="/admin/timetable" title="تقسیم اوقات ها">
                  <i className={ICONS.table}></i>
                  <span>تقسیم اوقات ها</span>
                </CustomeLinks>
              </div>
            </div>
          ) : (
            ""
          )}

          <CustomeLinks to="/about" title="درباره">
            <i className={ICONS.building}></i>
            <span>درباره</span>
          </CustomeLinks>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
