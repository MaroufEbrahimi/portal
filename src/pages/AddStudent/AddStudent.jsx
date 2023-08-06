import React, { useState } from "react"
import { useStateValue } from "../../context/StateProvider"
import "./AddStudent.css"
import Stepper from "../../components/Stepper/Stepper"
import FormControl from "../../components/FormControl/FormControl"

import { PersonalInformation } from "../../components/Steps/PersonalInformation"
import { StudentHabitation } from "../../components/Steps/StudentHabitation"
import { StudentRelatives } from "../../components/Steps/StudentRelatives"
import { Complete } from "../../components/Steps/Complete"
import { useNavigate } from "react-router-dom"
import useProtect from "../../Hooks/useProtect"
import Roles from "../../constants/Roles"
import { actionTypes } from "../../context/reducer"
import APIEndpoints from "../../constants/APIEndpoints"

const components = [
  PersonalInformation,
  StudentHabitation,
  StudentRelatives,
  Complete,
]
let counter = 0
const AddStudent = () => {
  useProtect({ roles: [Roles.ADMIN] })
  const navigate = useNavigate()
  const steps = ["معلومات شخصی", "تذکره و سکونت محصل", "اقارب محصل", "بخش آخر"]
  const [globalState, dispatch] = useStateValue()
  const [stepComponent, setStepComponent] = useState({
    component: components[counter],
  })
  const [apiResponse, setApiResponse] = useState({})

  console.log(counter)
  const handleNextStep = (direction) => {
    if (direction == "back" && counter == 0) {
      navigate("/admin/students")
      return
    }
    if (direction == "next" && counter == steps.length - 2) {
      setApiResponse({})
      sendInformation()
    }
    if (direction == "next" && counter == steps.length - 1) {
      counter = 0
      dispatch({
        type: actionTypes.REMOVE_STUDENT_REGISTERATION_STATE,
      })
      navigate("/admin/students")
      return
    }
    direction === "next" && counter >= 0 && counter < steps.length
      ? counter++
      : counter--
    // check if steps are within bounds
    setStepComponent({ component: components[counter] })
  }
  console.log(globalState)

  const sendInformation = () => {
    const relations = []
    for (let r in globalState.studentRelations) {
      relations.push(globalState.studentRelations[r])
    }
    const info = {
      studentPersonalInfo: globalState.studentPersonalInfo,
      relatives: relations,
      locations: globalState.studentLocations,
      identification: globalState.studentIdenfication,
    }
    if (!globalState?.studentImage?.file) {
      setApiResponse({
        isFinished: false,
        message: "لطفا عکس محصل را وارد نمائید!",
      })
      return
    }
    fetch(APIEndpoints.root + APIEndpoints.students.addStudent, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + globalState.authentication.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.statusCode && data.statusCode != 201) {
          setApiResponse({ ...data, isFinished: false })
          return
        }
        sendStudentImage(data.imageUrl, globalState.studentImage.file)
      })
      .catch((error) => setApiResponse(error))
  }

  // send the student image to the API
  const sendStudentImage = (imageUrl, image) => {
    console.log(imageUrl, image)
    const formDate = new FormData()
    formDate.append("file", image)
    fetch(imageUrl, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + globalState.authentication.token,
      },
      body: formDate,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode == 201) {
          setApiResponse({ ...data, isFinished: true })
          return
        }
        setApiResponse(data)
        console.log(data)
      })
  }
  console.log(apiResponse)
  return (
    <div className="add_new fade_in border_radius_8">
      {/* Stepper */}
      <div className="stepper_step">
        <Stepper steps={steps} currentStep={counter} />
      </div>

      {/* Display components */}
      <div className="">
        {counter < components.length - 1 ? (
          <stepComponent.component />
        ) : (
          <stepComponent.component apiResponse={apiResponse} />
        )}
      </div>

      {/* Navigation control */}
      {
        <FormControl
          handleNextStep={handleNextStep}
          currentStep={counter}
          steps={steps}
          isFinished={apiResponse?.isFinished}
        />
      }
    </div>
  )
}

export default AddStudent
