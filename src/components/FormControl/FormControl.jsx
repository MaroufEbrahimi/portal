import React from "react"
import "./FormControl.css"

const FormControl = ({ handleNextStep, currentStep, steps, isFinished }) => {
  return (
    <div className="button_control display_flex align_items_center justify_content_space_around">
      {/* back button */}
      {currentStep === steps.length - 1 && isFinished ? null : (
        <button onClick={() => handleNextStep("back")} className="back_btn btn">
          بازگشت
        </button>
      )}

      {/* next button */}
      {currentStep === steps.length - 2 ? (
        <button onClick={() => handleNextStep("next")} className="back_btn btn">
          تایید و ارسال
        </button>
      ) : currentStep === steps.length - 1 && isFinished ? (
        <button onClick={() => handleNextStep("next")} className="back_btn btn">
          پایان
        </button>
      ) : currentStep < steps.length - 1 ? (
        <button onClick={() => handleNextStep("next")} className="back_btn btn">
          بعدی
        </button>
      ) : null}
    </div>
  )
}

export default FormControl
