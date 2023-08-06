import React, { useState, useEffect, useRef } from "react"
import "./Wrapper.css"
import ICONS from "../../constants/Icons"
import { useParams } from "react-router-dom"

const Wrapper = (props) => {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const wrapperRef = useRef(null)
  const { id } = useParams()

  useEffect(() => {
    const wrapper = wrapperRef.current

    const handleScroll = () => {
      // Check if wrapper has been scrolled more than 200 pixels
      if (wrapper.scrollTop > 200) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }
    // Add event listener to wrapper to check if it has been scrolled
    wrapper.addEventListener("scroll", handleScroll)

    // Cleanup function to remove event listener when component unmounts
    return () => {
      wrapper.removeEventListener("scroll", handleScroll)
    }
  }, [])


  useEffect(() => {
    handleBackToTop();
  }, [id])

  const handleBackToTop = () => {
    // Scroll to top of wrapper
    const wrapper = wrapperRef.current
    wrapper.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="wrapper" id="wrapper" ref={wrapperRef}>
      {showBackToTop && (
        <div
          className={`back_to_top ${showBackToTop ? "fade_in" : "fade_out"}`}
        >
          <button
            onClick={handleBackToTop}
            className="display_flex align_items_center justify_content_center cursor_pointer border_none outline_none"
          >
            <i className={`${ICONS.arrowUpShort} text_color`}></i>
          </button>
        </div>
      )}
      {props.children}
    </div>
  )
}

export default Wrapper
