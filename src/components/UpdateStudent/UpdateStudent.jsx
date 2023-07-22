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


const UpdateStudent = () => {
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
          type: actionTypes.ADD_STUDENT_IDENTIFICATION,
          payload: data.identification
        })
        dispatch({
          type: actionTypes.ADD_STUDENT_RELATIONS,
          payload: data.relatives
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


  const handleInputChangeValue = (e, inputName) => {
    switch (inputName) {
      case "father.name": {
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
      case "father.job": {
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
      case "father.jobLocation": {
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

      case "father.phoneNumber": {
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
      case "uncle.name": {
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
      case "uncle.job": {
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
      case "uncle.jobLocation": {
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
      case "uncle.phoneNumber": {
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
      case "aunt.name": {
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
      case "aunt.job": {
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
      case "aunt.jobLocation": {
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
      case "aunt.phoneNumber": {
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
      case "brother.name": {
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
      case "brother.job": {
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
      case "brother.jobLocation": {
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
      case "brother.phoneNumber": {
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
  console.log(student)
  return (
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
        {student?.relatives?.map(item => {

          return <div className="form_details_student student_relatives left-to-right">
            <form>
              <div className="full_width">
                <h3>{item.relationship}</h3>
              </div>
              <div className="build_box">
                <label>نام</label>
                <input type="text" value={item.name} onChange={(e) => handleInputChangeValue(e, "father.name")} />
              </div>
              <div className="build_box">
                <label>وظیفه</label>
                <input type="text" value={item.job} onChange={(e) => handleInputChangeValue(e, "father.job")} />
              </div>
              <div className="build_box">
                <label>محل وظیفه</label>
                <input type="text" value={item.jobLocation} onChange={(e) => handleInputChangeValue(e, "father.jobLocation")} />
              </div>
              <div className="build_box">
                <label>شماره تماس</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                  value={item.phoneNumber} onChange={(e) => handleInputChangeValue(e, "father.phoneNumber")}
                />
              </div>
            </form>
          </div>
        })}
      </div>
    </div>
  )
}

export default UpdateStudent
