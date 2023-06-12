import React from "react"
import "./Slider.css"

const Arrow = ({ prevSlide, nextSlide }) => {
  return (
    <div className="arrows">
      <div>
        <span className="prev_slide" onClick={prevSlide}>
          <i className="bi bi-chevron-right"></i>
        </span>
        <span className="next_slide" onClick={nextSlide}>
          <i className="bi bi-chevron-left"></i>
        </span>
      </div>
    </div>
  )
}

export default Arrow
