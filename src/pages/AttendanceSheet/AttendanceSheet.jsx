import React, { useState, useEffect } from "react"
import "./AttendanceSheet.css"
import APIEndpoints from "../../constants/APIEndpoints"
import { useStateValue } from "../../context/StateProvider"
import { getTheMonthDays } from "../../Utils/DateTimeUtils"

const AttendanceSheet = () => {
  const [{ authentication }, dispatch] = useStateValue()
  const [semester, setsemester] = useState()
  const [department, setdepartment] = useState()
  const [feildOfStudy, setfeildOfStudy] = useState()
  const [subject, setSubject] = useState()
  const [fields, setFields] = useState([])
  const [departments, setDepartments] = useState([])
  const [semesters, setsemesters] = useState([])
  const [subjects, setSubjects] = useState([])
  const [months, setMonths] = useState([])
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [date, setDate] = useState(new Date())
  const [daysInMonth, setDaysInMonth] = useState([])
  const [data, setData] = useState()

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

  const setSemeter = (e) => {
    console.log(e.target.value)
    setsemester(e.target.value)
    let requestParam = "field=" + feildOfStudy + "&department=" + department + "&semester=" + e.target.value

    fetch(APIEndpoints.root + APIEndpoints.subjects.subjectSearch + requestParam)
      .then(res => res.json())
      .then(body => {
        console.log(body)
        setSubjects(body.records)
      })
  }

  const handleFilterButton = () => {
    if (!feildOfStudy || !department || !semester || !subject || !date) {
      return
    }
    let requestParam = `fieldOfStudy=${feildOfStudy}&semester=${semester}&department=${department}&subject=${subject}&year=${+date.split("-")[0]}&month=${+date.split("-")[1]}`
    //console.log(requestParam)
    console.log(
      APIEndpoints.root +
      APIEndpoints.attendances.getStudentAttendances +
      requestParam
    )
    fetch(
      APIEndpoints.root +
      APIEndpoints.attendances.getStudentAttendances +
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
        console.log(data)
        setLoading(false)
        setData(data)
        let days = []
        for (let i = 1; i <= data.daysInMonth; i++) days.push(i)
        setDaysInMonth(days)
        setStudents(data.students)
      })
  }


  // this function is used to do the present and absent actions
  const presentOrAbsentActions = (e, studentId, dayNumber) => {
    console.log(date)
    let dateObject = new Date(date)
    dateObject.setFullYear(date.getFullYear)
    console.log(e, studentId, date)
    console.log(typeof date)

    // create the request body
    const body = {
      isPresent: e.target.checked,
      localDate: new Date(date.split("-")[0], date.split("-")[1], dayNumber),
      fieldOfStudy: feildOfStudy,
      department: department,
      subject: subject,
      semester: +semester,
      studentId: studentId
    }
    console.log(body)

    // make an api call in here

  }

  return (
    <div className="attendance">
      {/* Here you can add Faculty */}
      <div className="attendance_faculty">
        <h2>حـاضـری مـربـوطـه را انـتخـاب نـمـایـد</h2>
        <div className="posts_management_boxes">
          <div className="post_mana_box">
            <label>پوهنحی</label>
            <select
              id="type"
              value={feildOfStudy}
              onChange={(e) => setfield(e)}
              defaultValue="پوهنحی"
            >
              <option disabled>پوهنحی</option>
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
              defaultValue="دیپارتمنت"
            >
              <option disabled>دیپارتمنت</option>
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
              onChange={(e) => setSemeter(e)}
              defaultValue="سمستر"
            >
              <option disabled>سمستر</option>
              {semesters.map((sem) => {
                return <option key={sem}>{sem}</option>
              })}
            </select>
          </div>
          <div className="post_mana_box">
            <label>مضمون</label>
            <select
              id="type"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              defaultValue="مضمون"
            >
              <option disabled>مضمون</option>
              {subjects.map((sub) => {
                return <option key={sub.id}>{sub.name}</option>
              })}
            </select>
          </div>
          <div className="post_mana_box">
            <label>تاریخ</label>
            <input
              type="month"
              id="type"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="attendance_faculty_btn posts_management_filter_btn">
          <button className="btn" onClick={handleFilterButton}>
            دریافت حاضری
          </button>
        </div>
      </div>

      <div className="attendance_content">
        <table className="attendance_table">
          <thead>
            <tr>
              <td id="number_counter">شـمـاره</td>
              <td id="student_name">نـام</td>
              <td id="student_lastname">نـام پـدر</td>
              {daysInMonth.map((num, index) => {
                return (
                  <td key={index} className="data_cell">
                    {num}
                  </td>
                )
              })}
              <td>ح</td>
              <td>غ</td>
              <td>مجموعه</td>
            </tr>
          </thead>

          <tbody className="attendance_details">
            {students?.map((student, index) => {
              return (<tr key={index}>
                <td>{index + 1}</td>
                <td>{student?.name}</td>
                <td>{student?.fatherName}</td>
                {daysInMonth.map((num, index) => {
                  return <td key={index} className="data_cell">
                    <input type="checkbox" onChange={(e) => presentOrAbsentActions(e, student.studentId, num)} />
                  </td>
                })}
                <td>{student?.totalPresent}</td>
                <td>{student?.totalAbsent}</td>
                <td>{data?.daysWithoutHolidays}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AttendanceSheet
