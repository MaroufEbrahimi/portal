import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import "./Students.css"
import Search from "../../components/Search/Search"
import { useStateValue } from "../../context/StateProvider"
import Student from "../../components/Student/Student"
import useProtect from "../../Hooks/useProtect"
import Roles from "../../constants/Roles"
import APIEndpoints from "../../constants/APIEndpoints"
import Spinner from "../../components/UI/Loading/Spinner"

const Students = () => {
  useProtect({ roles: [Roles.ADMIN] })
  const [{ authentication }, dispatch] = useStateValue()
  const [semester, setsemester] = useState()
  const [department, setdepartment] = useState()
  const [feildOfStudy, setfeildOfStudy] = useState()
  const [hasMore, setHasMore] = useState(true);
  const lastNode = useRef();
  const [pagination, setPagination] = useState({ offset: 0, pageSize: 10 })
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([])
  const [fields, setFields] = useState([])
  const [departments, setDepartments] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('')


  // useEffect(() => {
  //   fetch(APIEndpoints.root + APIEndpoints.fieldOfStudy.getAll)
  //     .then(res => {
  //       if (res.ok) {
  //         return res.json();
  //       } else {
  //         throw new Error(res.statusText)
  //       }
  //     })
  //     .then(data => {
  //       setFields(data.content)
  //     })
  //   console.log("field useeffect")
  // }, [])
  useEffect(() => {
    console.log(pagination)
    fetch(APIEndpoints.root + APIEndpoints.students.getAll + `&offset=${pagination.offset}&pageSize=${pagination.pageSize}`, {
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
        if (data.totalPages - 1 > pagination.offset) {
          setHasMore(true)
        } else {
          setHasMore(false)
        }
        setStudents([...students, ...data.content])
        setLoading(false)

      })
    console.log("student useeffect")
  }, [pagination.offset])


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



  const setfield = (e) => {
    setfeildOfStudy(e.target.value)
    const f = fields.find((item) => {
      return item.fieldName == e.target.value
    })
    fetch(APIEndpoints.root + APIEndpoints.fieldOfStudy.depratments(f.id))
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText)
        }
      })
      .then(data => {
        setDepartments(data)
      })
  }

  const handleSearchButton = () => {
    let url = APIEndpoints.root + APIEndpoints.students.getAll + `offset=${pagination.offset}&pageSize=${pagination.pageSize}`
    console.log("url: ", url)
    if (searchKeyword) {
      url += "&keyword=" + searchKeyword == "همه" ? "%" : searchKeyword;
    }
    if (feildOfStudy) {
      url += "&fieldOfStudy=" + feildOfStudy == "همه" ? "%" : feildOfStudy;
    }
    if (semester) {
      url += "&semester=" + semester == "همه" ? "%" : semester;
    }
    if (department) {
      url += "&department=" + department == "همه" ? "%" : department;
    }
    console.log(url)
    fetch(url, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + authentication.token
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setStudents(data.content)
      })
  }

  console.log(students)
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



      {/* some button for filtering */}
      <div className="students_filter_btn">
        <div className="posts_management_boxes">
          <div className="post_mana_box">
            <label>سمستر</label>
            <select
              id="type"
              value={semester}
              defaultValue={"همه"}
              onChange={(e) => setsemester(e.target.value)}
            >
              <option >همه</option>
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
              defaultValue={"همه"}
              onChange={(e) => setfield(e)}
            >
              <option >همه</option>
              {fields?.map(item => {
                return <option key={item.id}>{item.fieldName}</option>
              })}
            </select>
          </div>
          <div className="post_mana_box">
            <label>دیپارتمنت</label>
            <select
              id="type"
              value={department}
              defaultValue={"همه"}
              onChange={(e) => setdepartment(e.target.value)}
            >
              <option >همه</option>
              {departments?.map(item => {
                return <option key={item.id}>{item.departmentName}</option>
              })}
            </select>
          </div>

        </div>
        <Search
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          handleSearchButton={handleSearchButton}
          placeHolder="جستجوی محصل..." />
      </div>

      {/* All Students Here */}
      <div className="all_students">
        {students?.map((student, index) => {
          if (students?.length === index + 1) {
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
        <section style={{ position: "relative", height: "60px", width: "100%" }}>
          {hasMore && <Spinner />}
          {!hasMore && <h5 style={{ textAlign: "center" }}>end of the the posts</h5>}
        </section>
      </div>
    </div>
  )
}

export default Students
