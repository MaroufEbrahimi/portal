import React from "react"
import { Link } from "react-router-dom"

export const Complete = ({ handleNextStep }) => {
  return (
    <div className="complete_step">
      <div className="complete_details">
        <h2>فرم موفقانه خانه پوری شد</h2>
      </div>
      <div className="complete_buttons">
        <button onClick={() => handleNextStep()} className="btn right-to-left">
          بازگشت
        </button>
        <Link to="/students">
          <button className="btn left-to-right">بستن</button>
        </Link>
      </div>
    </div>
  )
}
