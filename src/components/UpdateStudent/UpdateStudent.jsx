import React, { useEffect, useState } from "react"
import "./UpdateStudent.css"
import "../Steps/Steps.css"
import { useParams } from "react-router-dom"
import { useStateValue } from "../../context/StateProvider"
import useProtect from "../../Hooks/useProtect"
import APIEndpoints from "../../constants/APIEndpoints"
import Roles from "../../constants/Roles"
import { PersonalInformation } from "../Steps/PersonalInformation"
import { StudentHabitation } from "../Steps/StudentHabitation"
import { actionTypes } from "../../context/reducer"
import Button from "../UI/Button/Button"


const UpdateStudent = ({ setApiResponse }) => {
  useProtect({ roles: [Roles.ADMIN] })
  const { id } = useParams()
  const [student, setStudent] = useState({});
  const [globalState, dispatch] = useStateValue();

  useEffect(() => {
    fetch(APIEndpoints.root + APIEndpoints.students.getStudent(id), {
      method: "GET",
      headers: {
        Authorization: "Bearer " + globalState.authentication.token,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })
      .then((data) => {
        console.log(data)
        setStudent(data)
        dispatch({
          type: actionTypes.ADD_STUDENT_PERONAL_INFO,
          payload: data.studentPersonalInfo
        })
        dispatch({
          type: actionTypes.ADD_STUDENT_IMAGE,
          payload: {
            file: null,
            url: data.imageUrl,
            isOk: true
          },
        })
        dispatch({
          type: actionTypes.ADD_STUDENT_IDENTIFICATION,
          payload: data.identification
        })
        let studentRelations = {}
        data.relatives.forEach(item => {
          if (item.relationship == "پدر") {
            studentRelations = { ...studentRelations, father: item }
          } else if (item.relationship == "کاکا") {
            studentRelations = { ...studentRelations, uncle: item }
          } else if (item.relationship == "ماما") {
            studentRelations = { ...studentRelations, aunt: item }
          } else if (item.relationship == "برادر") {
            studentRelations = { ...studentRelations, brother: item }
          }
        })
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: studentRelations
        })
        let studentLocations = {}
        data.locations.forEach(item => {
          if (item.current) {
            studentLocations = { ...studentLocations, previous: item }
          } else {
            studentLocations = { ...studentLocations, current: item }
          }
        })

        dispatch({
          type: actionTypes.ADD_STIUDENT_LOCATIONS,
          payload: studentLocations
        })
      })
  }, [id])


  const sendInformationToAPI = () => {
    console.log(globalState)
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
    fetch(APIEndpoints.root + APIEndpoints.students.updateStudent(id), {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + globalState.authentication.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (globalState.studentImage.file) {
          sendStudentImage(data.imageUrl, globalState.studentImage.file)
        }
        setApiResponse({ ...data, show: true })
      })
      .catch((error) => setApiResponse(error))
  }

  const sendStudentImage = (imageUrl, image) => {
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
      })
  }


  const handleInputChangeValue = (e, inputName) => {

    switch (inputName) {
      case "پدر.name": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...globalState.studentRelations,
            father: {
              ...globalState.studentRelations?.father,
              name: e.target.value,
              relationship: "پدر"
            }
          }
        })
        break;
      }
      case "پدر.job": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...globalState.studentRelations,
            father: {
              ...globalState.studentRelations?.father,
              job: e.target.value
            }
          }
        })
        break;
      }
      case "پدر.jobLocation": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...globalState.studentRelations,
            father: {
              ...globalState.studentRelations?.father,
              jobLocation: e.target.value
            }
          }
        })
        break;
      }

      case "پدر.phoneNumber": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...globalState.studentRelations,
            father: {
              ...globalState.studentRelations?.father,
              phoneNumber: e.target.value
            }

          }
        })
        break;
      }
      case "کاکا.name": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...globalState.studentRelations,
            uncle: {
              ...globalState.studentRelations?.uncle,
              name: e.target.value,
              relationship: "کاکا"
            }
          }
        })
        break;
      }
      case "کاکا.job": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...globalState.studentRelations,
            uncle: {
              ...globalState.studentRelations?.uncle,
              job: e.target.value
            }
          }
        })
        break;
      }
      case "کاکا.jobLocation": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...globalState.studentRelations,
            uncle: {
              ...globalState.studentRelations?.uncle,
              jobLocation: e.target.value
            }
          }
        })
        break;
      }
      case "کاکا.phoneNumber": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...globalState.studentRelations,
            uncle: {
              ...globalState.studentRelations?.uncle,
              phoneNumber: e.target.value
            }
          }
        })
        break;
      }
      case "ماما.name": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...globalState.studentRelations,
            aunt: {
              ...globalState.studentRelations?.aunt,
              name: e.target.value,
              relationship: "ماما"
            }
          }
        })
        break;
      }
      case "ماما.job": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...globalState.studentRelations,
            aunt: {
              ...globalState.studentRelations?.aunt,
              job: e.target.value
            }
          }
        })
        break;
      }
      case "ماما.jobLocation": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...globalState.studentRelations,
            aunt: {
              ...globalState.studentRelations?.aunt,
              jobLocation: e.target.value
            }
          }
        })
        break;
      }
      case "ماما.phoneNumber": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...globalState.studentRelations,
            aunt: {
              ...globalState.studentRelations?.aunt,
              phoneNumber: e.target.value
            }
          }
        })
        break;
      }
      case "برادر.name": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...globalState.studentRelations,
            brother: {
              ...globalState.studentRelations?.brother,
              name: e.target.value,
              relationship: "برادر"
            }
          }
        })
        break;
      }
      case "برادر.job": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...globalState.studentRelations,
            brother: {
              ...globalState.studentRelations?.brother,
              job: e.target.value
            }
          }
        })
        break;
      }
      case "برادر.jobLocation": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...globalState.studentRelations,
            brother: {
              ...globalState.studentRelations?.brother,
              jobLocation: e.target.value
            }
          }
        })
        break;
      }
      case "برادر.phoneNumber": {
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: {
            ...globalState.studentRelations,
            brother: {
              ...globalState.studentRelations?.brother,
              phoneNumber: e.target.value
            }
          }
        })
        break;
      }
    }
  }
  return (
    <>
      <div className="updateStudent">
        <div className="update_detail">
          <h1>بروزرسانی اطلاعات محصل</h1>
          {/* Personal Information */}

          <div className="form_details_student personal_info right-to-left">
            <PersonalInformation />
          </div>

          {/* Student Habitation */}
          <div className="form_details_student student_habitation left-to-right">
            <StudentHabitation />
          </div>

          {/* Student Relatives */}
          {
            globalState.studentRelations && Object.keys(globalState.studentRelations).map(item => {
              item = globalState.studentRelations[item]
              return <div className="form_details_student student_relatives left-to-right">
                <form>
                  <div className="full_width">
                    <h3>{item.relationship}</h3>
                  </div>
                  <div className="build_box">
                    <label>نام</label>
                    <input type="text" value={item.name} onChange={(e) => handleInputChangeValue(e, item.relationship + ".name")} />
                  </div>
                  <div className="build_box">
                    <label>وظیفه</label>
                    <input type="text" value={item.job} onChange={(e) => handleInputChangeValue(e, item.relationship + ".job")} />
                  </div>
                  <div className="build_box">
                    <label>محل وظیفه</label>
                    <input type="text" value={item.jobLocation} onChange={(e) => handleInputChangeValue(e, item.relationship + ".jobLocation")} />
                  </div>
                  <div className="build_box">
                    <label>شماره تماس</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      required
                      value={item.phoneNumber} onChange={(e) => handleInputChangeValue(e, item.relationship + ".phoneNumber")}
                    />
                  </div>
                </form>
              </div>
            })
          }
        </div>

      </div>
      <Button text={"بروزرسانی اطلاعات"} onClick={sendInformationToAPI} />
    </>
  )
}

export default UpdateStudent
