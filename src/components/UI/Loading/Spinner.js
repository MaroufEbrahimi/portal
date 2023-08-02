import React from "react"
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className="spinner__wrapper display_flex align_items_center justify_content_center">
      <div className="spinner__circle">
        <div className="display_grid">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default Spinner
