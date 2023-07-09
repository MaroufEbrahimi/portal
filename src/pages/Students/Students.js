import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import "./Students.css"
import Search from "../../components/Search/Search"
import { useStateValue } from "../../context/StateProvider"
import Student from "../../components/Student/Student"
import useProtect from "../../Hooks/useProtect"
import Roles from "../../constants/Roles"

const Students = () => {
  useProtect(Roles.ADMIN)
  const [{ authentication }, dispatch] = useStateValue()
  const [semester, setsemester] = useState(1)
  const [department, setdepartment] = useState()
  const [feildOfStudy, setfeildOfStudy] = useState()
  const [hasMore, setHasMore] = useState(true);
  const lastNode = useRef();
  const [pagination, setPagination] = useState({ offset: 0, pageSize: 3 })
  const [loading, setLoading] = useState(true);
  const [students, setstudents] = useState([])
  const [fields, setFields] = useState([])
  const [departments, setDepartments] = useState([]);
  console.log(authentication)
  useEffect(() => {
    fetch("http://localhost:1000/api/v1/field-of-studies")
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText)
        }
      })
      .then(data => {
        console.log(data)
        setFields(data.content)
      })
    fetch("http://localhost:1000/api/v1/students/?&offset=0&pageSize=20", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + authentication.token
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        setstudents(data.content)
        console.log(data)
      })

  }, [])

  const lastNodeReference = node => {
    if (loading) return;
    if (lastNode.current) lastNode.current.disconnect();
    lastNode.current = new IntersectionObserver(enteries => {
      if (enteries[0].isIntersecting) {
        if (hasMore) {
          setPagination({ offset: pagination.offset + 1, pageSize: pagination.pageSize })
        }
      }
    })
    if (node) lastNode.current.observe(node);
  }


  return (
    <div className="students_page fade_in">
      {/* add new student */}
      <div className="students_add_new_student">
        <button>
          <Link to="/admin/addstudent">محصل جدید</Link>
        </button>
        <button>
          <Link to="/admin/newpost">محتوای جدید</Link>
        </button>
      </div>

      <Search hiddenButton />

      {/* some button for filtering */}
      <div className="students_filter_btn">
        <div className="posts_management_boxes">
          <div className="post_mana_box">
            <label>سمستر</label>
            <select
              id="type"
              value={semester}
              onChange={(e) => setsemester(e.target.value)}
            >
              <option disabled selected>سمستر</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>
          <div className="post_mana_box">
            <label>پوهنحی</label>
            <select
              id="type"
              value={feildOfStudy}
              onChange={(e) => setfeildOfStudy(e.target.value)}
            >
              <option disabled selected>پوهنحی</option>
              {fields.map(item => {
                return <option key={item.id}>{item.fieldName}</option>
              })}
            </select>
          </div>
          <div className="post_mana_box">
            <label>دیپارتمنت</label>
            <select
              id="type"
              value={department}
              onChange={(e) => setdepartment(e.target.value)}
            >
              <option disabled selected>دیپارتمنت</option>
              {departments.map(item => {
                return <option key={item.id}>{item.departmentName}</option>
              })}
            </select>
          </div>
        </div>
      </div>

      {/* All Students Here */}
      <div className="all_students">
        {students?.map((student, index) => {
          if (students.length === index + 1) {
            return <Student
              key={student.id}
              studentInfo={student}
              customRef={lastNodeReference}
            />
          }
          return <Student
            key={student.id}
            studentInfo={student
            } />
        })}
      </div>
    </div>
  )
}

export default Students
