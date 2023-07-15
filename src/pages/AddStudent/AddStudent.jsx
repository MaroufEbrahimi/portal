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
const components = [PersonalInformation, StudentHabitation, StudentRelatives, Complete]
let counter = 0;
const AddStudent = () => {
  useProtect({ roles: [Roles.ADMIN] })
  const navigate = useNavigate()
  const steps = ["معلومات شخصی", "تذکره و سکونت محصل", "اقارب محصل", "بخش آخر"]
  const [globalState, dispatch] = useStateValue()
  const [stepComponent, setStepComponent] = useState({ component: components[counter] })
  const [apiResponse, setApiResponse] = useState({});

  console.log(counter)
  const handleNextStep = (direction) => {
    if (direction == "back" && counter == 0) {
      navigate("/students")
      return
    }
    if (direction == "next" && counter == steps.length - 2) {
      setApiResponse({})
      sendInformation()
    }
    direction === "next" && counter >= 0 && counter < steps.length ? counter++ : counter--
    // check if steps are within bounds
    setStepComponent({ component: components[counter] })
  }
  console.log(globalState)

  const sendInformation = () => {
    const relations = [];
    for (let r in globalState.studentRelations) {
      relations.push(globalState.studentRelations[r]);
    }
    const info = {
      studentPersonalInfo: globalState.studentPersonalInfo,
      relatives: relations,
      locations: globalState.studentLocations,
      identification: globalState.studentIdenfication
    }

    fetch("http://localhost:1000/api/v1/students", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + globalState.authentication.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info)
    })
      .then(res => res.json())
      .then(data => {
        if (data?.statusCode && data.statusCode != 201) {
          setApiResponse(data)
          console.log("in if", apiResponse)
          return
        }
        console.log("after if ", data)
        sendStudentImage(data.imageUrl, globalState.studentImage.file)

      }).catch(error => setApiResponse(error))
  }
  const sendStudentImage = (imageUrl, image) => {
    console.log(imageUrl, image)
    const formDate = new FormData();
    formDate.append("file", image)
    fetch(imageUrl, {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + globalState.authentication.token,
      },
      body: formDate
    })
      .then(res => res.json())
      .then(data => {
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
        />
      }
    </div>
  )
}

export default AddStudent
