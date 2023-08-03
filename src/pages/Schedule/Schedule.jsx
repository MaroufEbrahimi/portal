import React, { useState, useEffect } from "react"
import "./Schedule.css"

import APIEndpoints from "../../constants/APIEndpoints"
import { useStateValue } from "../../context/StateProvider"

const Schedule = () => {
  const [{ authentication }, dispatch] = useStateValue()
  const [posts, setPosts] = useState([])
  const [semester, setsemester] = useState()
  const [department, setdepartment] = useState()
  const [feildOfStudy, setfeildOfStudy] = useState()
  const [hasMore, setHasMore] = useState(true)
  const [requestParams, setRequestParams] = useState(``)
  const [pagination, setPagination] = useState({ offset: 0, pageSize: 3 })
  const [fields, setFields] = useState([])
  const [departments, setDepartments] = useState([])
  const [semesters, setsemesters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState()
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

    fetch(
      APIEndpoints.root +
        APIEndpoints.students.getAll +
        `offset=${pagination.offset}&pageSize=${pagination.pageSize}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + authentication.token,
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })
      .then((data) => {
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

  let endpoint =
    APIEndpoints.root +
    APIEndpoints.posts.getAllPostsForAdmin +
    `offset=${pagination.offset}&pageSize=${pagination.pageSize}`

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
    console.log(d)
    let sem = []
    for (let i = 1; i <= d.semesters; i++) sem.push(i)
    setsemesters(sem)
  }

  const handleFilterButton = () => {
    setPagination({ offset: 0, pageSize: 3 })
    setPosts([])

    let requestParam = ""
    if (semester) {
      requestParam += `&semester=${semester == "همه" ? "%" : semester}`
    }
    if (department) {
      requestParam += `&department=${department == "همه" ? "%" : department}`
    }
    if (feildOfStudy) {
      requestParam += `&fieldOfStudy=${
        feildOfStudy == "همه" ? "%" : feildOfStudy
      }`
    }
    setRequestParams(requestParam)
    console.log(requestParam)
    fetch(endpoint + requestParam, {
      method: "GET",
      headers: { Authorization: "Bearer " + authentication.token },
    })
      .then((res) => {
        console.log(res)
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((data) => {
        console.log(data)
        if (data.totalPages - 1 > pagination.offset) {
          setHasMore(true)
        } else {
          setHasMore(false)
        }
        setPosts(data.content)
        setLoading(false)
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
              defaultValue="همه"
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
              defaultValue="همه"
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
            <>
              <p>{student?.name}</p>
              <p>{student?.lastname}</p>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Schedule
