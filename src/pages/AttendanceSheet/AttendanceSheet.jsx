import React, { useState, useEffect } from "react"
import "./AttendanceSheet.css"
import APIEndpoints from "../../constants/APIEndpoints"
import { useStateValue } from "../../context/StateProvider"
import Button from "../../components/UI/Button/Button"
import { handlePrintTable } from "../../Utils/printTableUtils"
import ICONS from "../../constants/Icons"
import AttendanceStatusBox from "../../components/UI/AttendanceStatusBox/AttendanceStatusBox"
import AttendanceStatusName from "../../constants/AttendanceStatusName"
import { attendanceTableStyles } from "../../constants/PrintCssStyles"

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
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [date, setDate] = useState(new Date())
  const [monthDetails, setMonthDetails] = useState([])
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
    setdepartment("دیپارتمنت")
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
    for (let i = 1; i <= d.semesters; i++) { sem.push(i) }

    setsemesters(sem)
    setSemeter(null)
  }

  const setSemeter = (e) => {
    setsemester(e?.target?.value)
    let requestParam =
      "field=" +
      feildOfStudy +
      "&department=" +
      department +
      "&semester=" +
      e.target.value
    fetch(
      APIEndpoints.root + APIEndpoints.subjects.subjectSearch + requestParam
    )
      .then((res) => res.json())
      .then((body) => {
        setSubjects(body.records)
      })
  }

  const handleFilterButton = () => {
    if (!feildOfStudy || !department || !semester || !subject || !date) {
      return
    }
    setStudents([])
    let requestParam = `fieldOfStudy=${feildOfStudy}&semester=${semester}&department=${department}&subject=${subject}&year=${+date.split(
      "-"
    )[0]}&month=${+date.split("-")[1]}`
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
        setLoading(false)
        setData(data)
        console.log(data)
        // let days = []
        // for (let i = 1; i <= data.daysInMonth; i++) days.push(i)
        setMonthDetails(data?.monthDetails)
        setStudents(data.students)
      })
  }

  // this function is used to perform the present and absent operations
  const sendAttendanceDataToAPI = (attendanceStatus, studentId, dayNumber) => {
    let dateObject = new Date(date)
    dateObject.setFullYear(date.getFullYear)

    // create the request body
    const body = {
      attendanceStatus: attendanceStatus,
      yearNumber: +date.split("-")[0],
      monthNumber: +date.split("-")[1],
      dayNumber: +dayNumber,
      fieldOfStudy: feildOfStudy,
      department: department,
      subject: subject,
      semester: +semester,
      studentId: studentId,
    }
    console.log(body)
    // make an api call in here
    fetch(APIEndpoints.root + APIEndpoints.attendances.addAttendance, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + authentication.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((body) => console.log(body))

    let studentIndex = students.findIndex((item) => {
      return item.studentId == studentId
    })
    let attendanceIndex = students[studentIndex].monthlyAttendance.findIndex(
      (item) => {
        return item.day == dayNumber
      }
    )
    // update the state
    let updatedStudent = { ...students[studentIndex] }
    updatedStudent.monthlyAttendance[attendanceIndex].attendanceStatusName = attendanceStatus
    console.log("attendance name: " + attendanceStatus)
    // calculate the total absent and present days
    if (attendanceStatus == AttendanceStatusName.PRESENT) {
      updatedStudent.totalPresent = updatedStudent.totalPresent + 1
    } else if (attendanceStatus == AttendanceStatusName.ABSENT) {
      updatedStudent.totalPresent -= 1
      updatedStudent.totalAbsent += 1
    } else if (attendanceStatus == AttendanceStatusName.UNKNOWN) {
      updatedStudent.totalAbsent -= 1
    }

    students[studentIndex] = updatedStudent
    setStudents([...students])
  }

  // print attendance table 
  const printTable = () => {
    let pageTitle = `جدول حاضری  مضمون ${subject} تاریخ ${date} سمستر ${semester} دیپارتمنت ${department}`;
    handlePrintTable(pageTitle, attendanceTableStyles)
  }

  return (
    <div className="attendance">
      {/* Here you can add Faculty */}
      <div className="attendance_faculty">
        <h2>حـاضـری مـربـوطـه را انـتخـاب نـمـایـد</h2>
        <div className="posts_management_boxes ">
          <div className="post_mana_box ">
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
          <div className="post_mana_box ">
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
          <div className="post_mana_box ">
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
          <div className="post_mana_box  ">
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
          <div className="post_mana_box ">
            <label>تاریخ</label>
            <input
              type="month"
              id="type"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="attendance_faculty_btn display_flex align_items_center justify_content_center posts_management_filter_btn">
          <button className="btn" onClick={handleFilterButton}>
            دریافت حاضری
          </button>
        </div>
      </div>


      {students?.length > 0 && (
        <>
          <div className="attendance_content box_shadow " id="attendance_table_container">
            <div className="attendance_header display_grid">
              <div className="attendance_header_boxes display_grid text_align_center">
                <div className="attendance_header_box">
                  <p>پـوهـنـحـی</p>
                  <p>{feildOfStudy}</p>
                </div>
                <div className="attendance_header_box">
                  <p>دیـپـارتـمـنـت</p>
                  <p>{department}</p>
                </div>
                <div className="attendance_header_box">
                  <p>سمـسـتـر</p>
                  <p>{semester}</p>
                </div>
                <div className="attendance_header_box">
                  <p>مـضـمـون</p>
                  <p>{subject}</p>
                </div>
                <div className="attendance_header_box">
                  <p>تـاریـخ</p>
                  <p>{date}</p>
                </div>
                <div className="attendance_header_box">
                  <p>تـعـداد کـردیـت ها</p>
                  <p>{
                    subjects.find(item => item.name == subject)?.credit
                  }</p>
                </div>
              </div>

              <table className="attendance_header_keys">
                <tr>
                  <th colspan="2">کـلـیـد واژه ها</th>
                </tr>
                <tr>
                  <td>ح</td>
                  <td>حاضر</td>
                </tr>
                <tr>
                  <td>غ</td>
                  <td>غیر حاضر</td>
                </tr>
              </table>
            </div>

            <table className="attendance_table">
              <thead>
                <tr>
                  <td id="number_counter">شـمـاره</td>
                  <td id="student_name">نـام</td>
                  <td id="student_lastname">نـام پـدر</td>
                  {monthDetails?.map((item, index) => {
                    return (
                      <td
                        key={index}
                        className={
                          "data_cell " + (item.isHoliday ? "holiday" : "")
                        }
                      >
                        <p>{item?.dayOfWeek?.substring(0, 2)}</p>
                        {item?.dayOfMonth}
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
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{student?.name}</td>
                      <td>{student?.fatherName}</td>
                      {student?.monthlyAttendance?.map((item, index) => {
                        return (
                          <td
                            key={index}
                            className={
                              "data_cell text_align_center align_items_center justify_content_center " +
                              (item.isHoliday ? "holiday" : "")
                            }
                          >
                            {/* <input
                              type="checkbox"
                              hidden={item.isHoliday}
                              checked={item.isPresent}
                              onChange={(e) =>
                                presentOrAbsentActions(
                                  e,
                                  student.studentId,
                                  item.day
                                )
                              }
                            /> */}
                            <AttendanceStatusBox
                              attendanceStatus={item.attendanceStatusName}
                              hidden={item.isHoliday}
                              dayNumber={item.day}
                              studentId={student.studentId}
                              sendDataToTheAPI={sendAttendanceDataToAPI} />
                          </td>
                        )
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
          <div className="print_button text_align_center">
            <Button
              text={"پرینت حاضری"}
              icon={ICONS.printer}
              onClick={printTable}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default AttendanceSheet
