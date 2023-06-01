import React, { useState } from "react"
import "./AddStudent.css"
import Stepper from "../../components/Stepper/Stepper"
import FormDetails from "../../components/FormDetails/FormDetails"

import { PersonalInformation } from "../../components/Steps/PersonalInformation"
import { StudentHabitation } from "../../components/Steps/StudentHabitation"
import { StudentRelatives } from "../../components/Steps/StudentRelatives"
import { Complete } from "../../components/Steps/Complete"

const AddStudent = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const steps = [
    "Personal Information",
    "Student Habitation",
    "Student Relatives",
    "Complete",
  ]

  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <PersonalInformation />

      case 2:
        return <StudentHabitation />

      case 3:
        return <StudentRelatives />

      case 4:
        return <Complete />

      default:
    }
  }

  return (
    <div className="add_new">
      {/* Stepper */}
      <Stepper steps={steps} currentStep={currentStep} />

      {/* for test */}
      <PersonalInformation />

      {/* Navigation control */}
      <FormDetails />
    </div>
  )
}

export default AddStudent
