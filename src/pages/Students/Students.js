import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Students.css"
import Student from "../../components/Student/Student"
import Search from "../../components/Search/Search"
import { StuFilterButtons } from "../../constants/Data"
import { useStateValue } from "../../context/StateProvider"

const Students = () => {
  const [{ authentication }, dispatch] = useStateValue()
  const [showTab, setShowTab] = useState(1)
  const handleTabs = (index) => setShowTab(index)
  const [students, setstudents] = useState([])
  console.log(authentication)
  useEffect(() => {
    fetch("http://localhost:1000/api/v1/students/find?name= &offset=0&pageSize=5", {
      method: "GET",
      headers: {
        "Authorization": authentication.token
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

    fetch("http://localhost:1000/api/v1/auth/authenticate", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: "aliherawi7@gmail.com",
        password: "12345"
      })
    })
      .then(res => {
        console.log(res)
        if (res.ok) {
          return res.json();
        } else {
          // do some error handling
          throw new Error(res.statusText)
        }
      })

  }, [])
  let t = ["d", "fg"];
  console.log(t.toString())


  return (
    <div className="students_page fade_in">
      <Search hiddenButton />

      {/* add new student */}
      <div className="students_add_new_student">
        <button>
          <Link to="/admin/addstudent">محصل جدید</Link>
        </button>
        <button>
          <Link to="/admin/newpost">محتوای جدید</Link>
        </button>
      </div>

      {/* some button for filtering */}
      <div className="students_filter_btn">
        {StuFilterButtons.map((item) => (
          <button
            className={showTab === item.counter ? "active_tab" : ""}
            onClick={() => handleTabs(item.counter)}
            key={Math.random()}
          >
            {item.text}
          </button>
        ))}
      </div>

      {/* All Students Here */}
      <div className="all_students">
        {students.map(student => {
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
