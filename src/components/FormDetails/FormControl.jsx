import React from "react"

import "./FormControl.css"

const FormControl = ({ currentStep, steps, handleNextStep }) => {
  return (
    <div className="button_control">
      {/* back button */}
      <button
        onChange={() => handleNextStep()}
        className={`next_btn btn ${currentStep === 1 ? "" : ""}`}
      >
        Back
      </button>

      {/* next button */}
      <button onChange={() => handleNextStep("next")} className="back_btn btn">
        {currentStep === steps.length - 1 ? "Confirem" : "Next"}
      </button>
    </div>
  )
}

export default FormControl
