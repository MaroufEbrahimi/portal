import React, { useEffect, useState } from "react"
import "./UpdateStudent.css"
import "../Steps/Steps.css"
import { useParams } from "react-router-dom"
import { useStateValue } from "../../context/StateProvider"
import useProtect from "../../Hooks/useProtect"
import APIEndpoints from "../../constants/APIEndpoints"
import Roles from "../../constants/Roles"
import { getTranslation } from "../../constants/KeyValue"
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

  if (student?.studentPersonalInfo) {
    Object.keys(student.studentPersonalInfo).forEach(key => {
      let t = getTranslation("studentPersonalInfo", key)
      console.log(key, t)
    })
  }
  function handleInputChangeValue() {

  }
  console.log(student)
  return (
    <div className="pdateStudent">
      <div className="update_detail">
        <h1>update this profile</h1>
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
