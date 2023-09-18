import React, { useEffect, useRef, useState } from "react"
import "./Stepper.css"
import ICONS from "../../constants/Icons"

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([])
  const stepRef = useRef()

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps]
    let count = 0

    while (count < newSteps.length) {
      // current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        }
        count++
      }
      // step compeleted
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        }
        count++
      }
      // step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        }
        count++
      }
    }
    return newSteps
  }

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
    const current = updateStep(currentStep, stepRef.current)
    setNewStep(current)
  }, [steps, currentStep])

  const allSteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "full-width display_stepper fade_in"
            : "display_stepper fade_in"
        }
      >
        <div className="display_nums_des display_flex align_items_center justify_content_center flex_direction_column text_align_center">
          <div
            className={`display_nums display_flex align_items_center justify_content_center ${step.selected ? "numbers_completed" : ""
              }`}
          >
            {/* Display Numbers  */}

            {step.completed ? (
              <span className="display_flex">
                <i className={ICONS.checkLg}></i>
              </span>
            ) : (
              <span>{index + 1}</span>
            )}
          </div>
          <div
            className={`display_des display_flex ${step.highlighted
              ? "description_highlighted"
              : "description_not_highlighted"
              }`}
          >
            {/*  Display Description  */}
            <p className="text_color">{step.description}</p>
          </div>
        </div>
        <div
          className={`display_line ${step.completed
            ? "display_line_completed"
            : "display_line_not_completed"
            }`}
        >
          {/* Display Line */}
        </div>
      </div>
    )
  })

  return (
    <div className="stepper display_flex align_items_center justify_content_space_between">
      {allSteps}
    </div>
  )
}

export default Stepper
