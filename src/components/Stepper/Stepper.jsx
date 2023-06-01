import React, { useEffect, useRef, useState } from "react"
import "./Stepper.css"

const allSteps = (
  <div>
    <div className="display_nums_des">
      <div className="display_nums">{/* display numbers */}1</div>
      <div className="display_des">{/* display description */} Description</div>
    </div>

    <div className="display_line">{/* display line */}line</div>
  </div>
)

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([])
  const stepRef = useRef()

  const updateStep = (stepNumber, steps) => {}

  useEffect(() => {
    const stepState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    )

    stepRef.current = stepState
    const current = updateStep(currentStep - 1, stepRef.current)
    setNewStep(current)
  }, [steps, currentStep])

  return <div className="stepper">{allSteps}</div>
}

export default Stepper
