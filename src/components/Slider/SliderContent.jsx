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
          <div className="slides_container">
            <h2 className="slide_title bottom-to-top">{slide.title}</h2>
            <h4 className="slide_description fade_in">{slide.desc}</h4>
          </div>
        </div>
      ))}
    </section>
  )
}

export default SliderContent
