import React, { useEffect, useState } from "react"
import SliderContent from "../SliderContent"
import Arrow from "../Arrow"
import Dots from "../Dots"
import { imageSliderData } from "../../../constants/Data"
import "./ShowCaseSlider.css"

const len = imageSliderData.length - 1
const ShowCaseSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
    }, 7000)
    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <div className="showcase_slider border_radius_8 box_shadow">
      <SliderContent activeIndex={activeIndex} imageSlider={imageSliderData} />
      <Arrow
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        imageSlider={imageSliderData}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  )
}

export default ShowCaseSlider
