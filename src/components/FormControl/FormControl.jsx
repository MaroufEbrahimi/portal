import React from "react"
import "./FormControl.css"

const FormControl = ({ handleNextStep, currentStep, steps }) => {
  return (
    <div className="button_control">
      {/* back button */}
      <button
        onClick={() => handleNextStep("back")}
        className="back_btn btn"
      >
        بازگشت
      </button>

      {/* next button */}
      <button onClick={() => handleNextStep("next")} className="back_btn btn">
        {currentStep === steps.length - 1 ? "تایید" : "بعدی"}
      </button>
    </div>
  )
}

export default FormControl
