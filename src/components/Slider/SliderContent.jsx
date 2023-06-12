import React from "react"
import "./Slider.css"

const SliderContent = ({ activeIndex, imageSlider }) => {
  return (
    <section className="slider_content">
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active_slide" : "inactive"}
        >
          <img className="img_slide" src={slide.sliderImg} alt="" />
          <h2 className="slide_title">{slide.title}</h2>
          <h3 className="slide_description">{slide.desc}</h3>
        </div>
      ))}
    </section>
  )
}

export default SliderContent
