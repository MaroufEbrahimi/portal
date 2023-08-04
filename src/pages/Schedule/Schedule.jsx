import React, { useState, useEffect } from "react"
import "./Schedule.css"

import APIEndpoints from "../../constants/APIEndpoints"

const Schedule = () => {
  const [semester, setsemester] = useState()
  const [department, setdepartment] = useState()
  const [feildOfStudy, setfeildOfStudy] = useState()
  const [fields, setFields] = useState([])
  const [departments, setDepartments] = useState([])
  const [semesters, setsemesters] = useState([])
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch(APIEndpoints.root + APIEndpoints.fieldOfStudy.getAll)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((data) => {
        setFields(data.content)
      })
  }, [])

  const setfield = (e) => {
    setDepartments([])
    setfeildOfStudy(e.target.value)
    const f = fields.find((item) => {
      return item.fieldName == e.target.value
    })
    fetch(APIEndpoints.root + APIEndpoints.fieldOfStudy.depratments(f.id))
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((data) => {
        setDepartments(data)
        let sem = []
        for (let i = 1; i <= data[0].semesters; i++) sem.push(i)
        setsemesters(sem)
      })
  }

  const setDep = (e) => {
    setdepartment(e)
    const d = departments.find((item) => {
      return item.departmentName == e
    })
    let sem = []
    for (let i = 1; i <= d.semesters; i++) sem.push(i)
    setsemesters(sem)
  }

  const handleFilterButton = () => {
    let requestParam = ""
    if (semester && department && feildOfStudy) {
      requestParam += `&semester=${semester == "همه" ? "%" : semester}`
      requestParam += `&department=${department == "همه" ? "%" : department}`
      requestParam += `&fieldOfStudy=${
        feildOfStudy == "همه" ? "%" : feildOfStudy
      }`
    }
  }

  return (
    <div className="schedule">
      {/* Here you can add Faculty */}
      <div className="schedule_faculty">
        <h2>حـاضـری مـربـوطـه را انـتخـاب نـمـایـد</h2>
        <div className="posts_management_boxes">
          <div className="post_mana_box">
            <label>پوهنحی</label>
            <select
              id="type"
              value={feildOfStudy}
              onChange={(e) => setfield(e)}
              defaultValue="هیچکدام"
            >
              <option>هیچکدام</option>
              {fields.map((item) => {
                return <option key={item.id}>{item.fieldName}</option>
              })}
            </select>
          </div>
          <div className="post_mana_box">
            <label>دیپارتمنت</label>
            <select
              id="type"
              value={department}
              onChange={(e) => setDep(e.target.value)}
              defaultValue="هیچکدام"
            >
              <option>هیچکدام</option>
              {departments.map((item) => {
                return <option key={item.id}>{item.departmentName}</option>
              })}
            </select>
          </div>
          <div className="post_mana_box">
            <label>سمستر</label>
            <select
              id="type"
              value={semester}
              onChange={(e) => setsemester(e.target.value)}
              defaultValue="هیچکدام"
            >
              <option>هیچکدام</option>
              {semesters.map((sem) => {
                return <option>{sem}</option>
              })}
            </select>
          </div>
        </div>
        <div className="schedule_faculty_btn posts_management_filter_btn">
          <button className="btn" onClick={handleFilterButton}>
            ارسال
          </button>
        </div>
      </div>

      <div className="schedule_header"></div>

      <div className="schedule_students">
        {students?.map((student, index) => {
          return (
            <ul>
              <li>
                <span>{student?.name} </span>
                <span>{student?.lastname}</span>
              </li>
            </ul>
          )
        })}
      </div>
    </div>
  )
}

export default Schedule
