import React from "react"
import "./FormControl.css"

const FormControl = ({ handleNextStep, currentStep, steps }) => {
  return (
    <div className="button_control display_flex align_items_center justify_content_space_around">
      {/* back button */}

      <button onClick={() => handleNextStep("back")} className="back_btn btn">
        بازگشت
      </button>

      {/* next button */}
      <button onClick={() => handleNextStep("next")} className="back_btn btn">
        {currentStep === steps.length - 2
          ? "تایید و ارسال"
          : currentStep === steps.length - 1
          ? "پایان"
          : "بعدی"}
      </button>
    </div>
  )
}

export default FormControl
