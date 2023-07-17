import React from "react"
import "./Spinner.css"

function Spinner() {
  return (
    <div className="spinner__wrapper text_align_center">
      <div className="spinner__circle">
        <div>
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
