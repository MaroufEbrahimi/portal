import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import "./Students.css"
import Search from "../../components/Search/Search"
import { StuFilterButtons } from "../../constants/Data";
import { useStateValue } from "../../context/StateProvider"
import Student from "../../components/Student/Student"

const Students = () => {
  const [{ authentication }, dispatch] = useStateValue()
  const [semester, setsemester] = useState(1)
  const [department, setdepartment] = useState()
  const [feildOfStudy, setfeildOfStudy] = useState()
  const [hasMore, setHasMore] = useState(true);
  const lastNode = useRef();
  const [pagination, setPagination] = useState({ offset: 0, pageSize: 3 })
  const [loading, setLoading] = useState(true);
  const [students, setstudents] = useState([])
  console.log(authentication)
  useEffect(() => {
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
              <option>کامپیوتر ساینس</option>
              <option>حقوق</option>
              <option>ستوماتالوژی</option>
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
              <option>سافت ویر</option>
              <option>دیتابیس</option>
              <option>نتورک</option>
            </select>
          </div>
        </div>
      </div>

      {/* All Students Here */}
      <div className="all_students">
        {students?.map(student => {
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
