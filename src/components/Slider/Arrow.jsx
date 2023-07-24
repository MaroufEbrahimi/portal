import React from "react"
import "./Slider.css"
import ICONS from "../../constants/Icons"

const Arrow = ({ prevSlide, nextSlide }) => {
  return (
    <div className="arrows">
      <div>
        <span className="prev_slide" onClick={prevSlide}>
          <i className={ICONS.chevronRight}></i>
        </span>
        <span className="next_slide" onClick={nextSlide}>
          <i className={ICONS.chevronLeft}></i>
        </span>
      </div>
    </div>
  )
}

export default Arrow
