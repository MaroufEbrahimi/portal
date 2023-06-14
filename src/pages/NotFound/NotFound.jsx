import React from "react"
import "./NotFound.css"
import { Link } from "react-router-dom"
import notFound from "../../assets/img/404.svg"

const NotFound = () => {
  return (
    <div className="not_found fade_in">
      <img src={notFound} className="bottom-to-top" alt="404" />
      <p className="fade_in">این صفحه یافت نشد</p>
      <button className="btn fade_in">
        <Link to="/">برگشت به خانه</Link>
      </button>
    </div>
  )
}

export default NotFound
