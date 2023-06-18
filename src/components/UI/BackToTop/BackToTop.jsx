import React, { useState, useEffect } from "react"
import "./BackToTop.css"

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 90 ? setBackToTop(true) : setBackToTop(false)
    })
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  const backTopFun = () => {
    window.scroll(0, 0)
  }
  return backToTop ? (
    <div className={`back_to_top ${backToTop ? "fade_in" : "fade_out"}`}>
      <button onClick={backTopFun}>
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </div>
  ) : null
}

export default BackToTop
