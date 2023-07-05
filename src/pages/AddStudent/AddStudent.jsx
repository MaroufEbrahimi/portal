import React, { useState } from "react"
import { StepperContext } from "../../context/StateProvider"
import "./AddStudent.css"
import Stepper from "../../components/Stepper/Stepper"
import FormControl from "../../components/FormDetails/FormControl"

import { PersonalInformation } from "../../components/Steps/PersonalInformation"
import { StudentHabitation } from "../../components/Steps/StudentHabitation"
import { StudentRelatives } from "../../components/Steps/StudentRelatives"
import { Complete } from "../../components/Steps/Complete"

const AddStudent = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState("")
  const [finalData, setFinalData] = useState([])
  const steps = ["معلومات شخصی", "تذکره و سکونت محصل", "اقارب محصل", "بخش آخر"]

  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <PersonalInformation />

      case 2:
        return <StudentHabitation />

      case 3:
        return <StudentRelatives />

      case 4:
        return <Complete handleNextStep={handleNextStep} />

      default:
    }
  }

  const handleNextStep = (direction) => {
    let newStep = currentStep

    direction === "next" ? newStep++ : newStep--
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
  }

  return (
    <div className="add_new fade_in">
      {/* Stepper */}
      <div className="stepper_step">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>

      {/* Display components */}
      <div className="">
        <StepperContext.Provider
          value={{
            userData,
            setUserData,
            finalData,
            setFinalData,
          }}
        >
          {displaySteps(currentStep)}
        </StepperContext.Provider>
      </div>

      {/* Navigation control */}
      {currentStep !== steps.length && (
        <FormControl
          handleNextStep={handleNextStep}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  )
}

export default AddStudent
