import React, { useState, useEffect } from "react"
import "./Attendance.css"
import APIEndpoints from "../../constants/APIEndpoints"
import { useStateValue } from "../../context/StateProvider"

const Attendance = () => {
  const [{ authentication }, dispatch] = useStateValue()
  const [semester, setsemester] = useState()
  const [department, setdepartment] = useState()
  const [feildOfStudy, setfeildOfStudy] = useState()
  const [fields, setFields] = useState([])
  const [departments, setDepartments] = useState([])
  const [semesters, setsemesters] = useState([])
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)


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
    if (feildOfStudy) {
      requestParam += "&fieldOfStudy=" + (feildOfStudy == "همه" ? "%" : feildOfStudy)
    }
    if (semester) {
      requestParam += "&semester=" + (semester == "همه" ? "%" : semester)
    }
    if (department) {
      requestParam += "&department=" + (department == "همه" ? "%" : department)
    }

    console.log(requestParam)
    fetch(
      APIEndpoints.root +
      APIEndpoints.students.getAll +
      `offset=0&pageSize=1000` +
      requestParam,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + authentication.token,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setStudents(data.content)
      })
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
              defaultValue="همه"
            >
              <option>همه</option>
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
              defaultValue="همه"
            >
              <option>همه</option>
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
              defaultValue="همه"
            >
              <option>همه</option>
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
        <ul>
          {students?.map((student, index) => {
            return (

              <li key={index}>
                <span>{student?.name} </span>
                <span>{student?.lastname}</span>
              </li>

            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Attendance
