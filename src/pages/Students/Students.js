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
  const [page, setPage] = useState()
  const [endpoint, setEndpoint] = useState(APIEndpoints.root + APIEndpoints.students.getAll + `&offset=${pagination.offset}&pageSize=${pagination.pageSize}`);


  useEffect(() => {
    fetch(APIEndpoints.root + APIEndpoints.fieldOfStudy.getAll)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText)
        }
      })
      .then(data => {
        setFields(data.content)
      })

    fetch(endpoint, {
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
        console.log(pagination.offset + " <- offset: data ->", data)
        if (data.totalPages - 1 > pagination.offset) {
          setHasMore(true)
        } else {
          setHasMore(false)
        }
        setPage(data)
        setStudents(Array.from(new Set([...students, ...data.content])))
        setLoading(false)
      })
  }, [])


  const lastNodeReference = node => {
    if (loading) return;
    if (lastNode.current) lastNode.current.disconnect();
    lastNode.current = new IntersectionObserver(enteries => {
      if (enteries[0].isIntersecting) {
        if (hasMore && !loading && page.totalPages > pagination.offset) {
          setPagination({ offset: pagination.offset + 1, pageSize: pagination.pageSize })
          fetch(endpoint, {
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
              console.log(pagination.offset + " <- offset: data ->", data)
              if (data.totalPages - 1 > pagination.offset) {
                setHasMore(true)
              } else {
                setHasMore(false)
              }
              const newList = [...students, ...data.content].filter((obj, index, self) =>
                index === self.findIndex((o) => (
                  o.id === obj.id
                ))
              );
              setPage(data)
              setStudents(newList)
              setLoading(false)

            })
        }
      }
    })
    if (node) lastNode.current.observe(node);
  }

  // create an array with unique data



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
    resetAllStates()
    let url = APIEndpoints.root + APIEndpoints.students.getAll + `offset=${pagination.offset}&pageSize=${pagination.pageSize}`
    if (searchKeyword) {
      url += "&keyword=" + (searchKeyword == "همه" ? "%" : searchKeyword);
    }
    if (feildOfStudy) {
      url += "&fieldOfStudy=" + (feildOfStudy == "همه" ? "%" : feildOfStudy);
    }
    if (semester) {
      url += "&semester=" + (semester == "همه" ? "%" : semester);
    }
    if (department) {
      url += "&department=" + (department == "همه" ? "%" : department);
    }
    console.log('in search ', url)
    setEndpoint(url)
    fetch(url, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + authentication.token
      }
    })
      .then(res => res.json())
      .then(data => {
        setStudents(data.content)
        setPage(data)
        setLoading(false)
      })
  }

  const resetAllStates = () => {
    setPagination({ offset: 0, pageSize: 10 })
    setLoading(true);
    setStudents([])
    setPage({})
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
          {!hasMore && students.length > 0 && <h5 style={{ textAlign: "center" }}>آخرین محصل</h5>}
          {!hasMore && students.length == 0 && <h5 style={{ textAlign: "center" }}>محصل یافت نشد!</h5>}
        </section>
      </div>
    </div>
  )
}

export default Students
