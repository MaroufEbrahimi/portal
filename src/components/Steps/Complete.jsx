import React from "react"
import { Link } from "react-router-dom"

export const Complete = ({ handleNextStep }) => {
  return (
    <div className="bottom-to-top">
      <h1>your stepper is compeleted successfly</h1>
      <Link to="/students">
        <button className="btn">بستن</button>
      </Link>
      <button onClick={() => handleNextStep()} className="btn">
        بازگشت
      </button>
    </div>
  )
}
