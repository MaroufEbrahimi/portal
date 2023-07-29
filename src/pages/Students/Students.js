import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Students.css"
import Search from "../../components/Search/Search"
import { useStateValue } from "../../context/StateProvider"
import Student from "../../components/Student/Student"
import useProtect from "../../Hooks/useProtect"
import Roles from "../../constants/Roles"
import APIEndpoints from "../../constants/APIEndpoints"
import Spinner from "../../components/UI/Loading/Spinner"
import Button from "../../components/UI/Button/Button"
import { actionTypes } from "../../context/reducer"
const Students = () => {
  useProtect({ roles: [Roles.ADMIN] })
  const navigate = useNavigate()
  const [{ authentication }, dispatch] = useStateValue()
  const [semester, setsemester] = useState()
  const [department, setdepartment] = useState()
  const [feildOfStudy, setfeildOfStudy] = useState()
  const [hasMore, setHasMore] = useState(true)
  const lastNode = useRef()
  const [pagination, setPagination] = useState({ offset: 0, pageSize: 15, totalPages: null })
  const [loading, setLoading] = useState(true)
  const [students, setStudents] = useState([])
  const [fields, setFields] = useState([])
  const [departments, setDepartments] = useState([])
  const [semesters, setsemesters] = useState([])
  const [searchKeyword, setSearchKeyword] = useState("")
  const [page, setPage] = useState()
  const [requestParams, setRequestParams] = useState("")

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
    console.log("useEffet run")
  }, [])

  // const lastNodeReference = (node) => {
  //   if (loading) return
  //   if (lastNode.current) lastNode.current.disconnect()
  //   lastNode.current = new IntersectionObserver((enteries) => {
  //     if (enteries[0].isIntersecting) {
  //       if (hasMore && !loading && page.totalPages >= pagination.offset) {
  //         fetch(
  //           APIEndpoints.root +
  //           APIEndpoints.students.getAll +
  //           `offset=${pagination.offset + 1}&pageSize=${pagination.pageSize
  //           }` +
  //           requestParams,
  //           {
  //             method: "GET",
  //             headers: {
  //               Authorization: "Bearer " + authentication.token,
  //             },
  //           }
  //         )
  //           .then((res) => {
  //             if (res.ok) {
  //               return res.json()
  //             }
  //           })
  //           .then((data) => {
  //             console.log(pagination.offset + 1 + " <- offset: data ->", data)
  //             if (data.totalPages - 1 > pagination.offset) {
  //               setHasMore(true)
  //             } else {
  //               setHasMore(false)
  //             }
  //             const newList = [...students, ...data.content].filter(
  //               (obj, index, self) =>
  //                 index === self.findIndex((o) => o.id === obj.id)
  //             )
  //             setPage(data)
  //             setStudents(newList)
  //             setLoading(false)
  //             setPagination({
  //               offset: pagination.offset + 1,
  //               pageSize: pagination.pageSize,
  //             })
  //           })
  //       }
  //     }
  //   })
  //   if (node) lastNode.current.observe(node)
  // }

  // create an array with unique data

  const setfield = (e) => {
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

  const handleSearchButton = (e) => {
    setLoading(true)
    e.preventDefault()


    let url = ""
    if (searchKeyword) {
      url += "&keyword=" + (searchKeyword == "همه" ? "%" : searchKeyword)
    }
    if (feildOfStudy) {
      url += "&fieldOfStudy=" + (feildOfStudy == "همه" ? "%" : feildOfStudy)
    }
    if (semester) {
      url += "&semester=" + (semester == "همه" ? "%" : semester)
    }
    if (department) {
      url += "&department=" + (department == "همه" ? "%" : department)
    }
    setRequestParams(url)
    console.log(url)
    fetch(
      APIEndpoints.root +
      APIEndpoints.students.getAll +
      `offset=0&pageSize=${pagination.pageSize}` +
      url,
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
        console.log(data)
        setStudents(data.content)
        setPage(data)
        setHasMore(false)

      })
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      APIEndpoints.root +
      APIEndpoints.students.getAll +
      `offset=${pagination.offset + 1}&pageSize=${pagination.pageSize
      }` +
      requestParams,
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
        console.log(pagination.offset + 1 + " <- offset: data ->", data)
        if (data.totalPages - 1 > pagination.offset) {
          setHasMore(true)
        } else {
          setHasMore(false)
        }
        const newList = [...students, ...data.content].filter(
          (obj, index, self) =>
            index === self.findIndex((o) => o.id === obj.id)
        )
        setPage(data)
        setStudents(newList)
        setLoading(false)
        setPagination({
          ...pagination,
          offset: pagination.offset + 1,
          ...data.totalPages,
          ...data.totalItems,
        });
        setPagination({
          ...pagination,
          offset: pagination.offset + 1,
        })
      })

  };



  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight &&
      hasMoreFunction()
    ) {
      setPagination({
        ...pagination,
        page: pagination.page + 1,
      });
    }
  };

  const hasMoreFunction = () => {
    return pagination.page < pagination.totalPages;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="students_page fade_in">
      {/* add new student */}
      <div className="students_add_new_student display_flex align_items_center justify_content_space_between">
        <Button
          text={"محصل جدید"}
          onClick={() => {
            navigate("/admin/add-student")
            dispatch({
              type: actionTypes.REMOVE_STUDENT_REGISTERATION_STATE,
            })
          }}
        />
        <Button
          text="محتوای جدید"
          onClick={() => {
            navigate("/admin/newpost")
          }}
        />
      </div>

      {/* some button for filtering */}
      <div className="students_filter_btn display_flex align_items_center justify_content_center">
        <div className="posts_management_boxes">
          <div className="post_mana_box">
            <label>پوهنحی</label>
            <select
              id="type"
              value={feildOfStudy}
              defaultValue={"همه"}
              onChange={(e) => setfield(e)}
            >
              <option>همه</option>
              {fields?.map((item) => {
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
              onChange={(e) => setDep(e.target.value)}
            >
              <option>همه</option>
              {departments?.map((item) => {
                return <option key={item.id}>{item.departmentName}</option>
              })}
            </select>
          </div>
          <div className="post_mana_box">
            <label>سمستر</label>
            <select
              id="type"
              value={semester}
              defaultValue={"همه"}
              onChange={(e) => setsemester(e.target.value)}
            >
              <option>همه</option>
              {semesters.map((item) => {
                return <option key={item}>{item}</option>
              })}
            </select>
          </div>
        </div>
        <Search
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          handleSearchButton={handleSearchButton}
          placeHolder="جستجوی محصل..."
        />
      </div>

      {/* All Students Here */}
      <div className="all_students display_flex justify_content_center">
        {students?.map((student, index) => {
          return <Student key={student.id} studentInfo={student} />
        })}
        <section className="students_not_found text_align_center">
          {hasMore && <Spinner />}
          {!hasMore && students.length > 0 && (
            <>
              <h5>آخرین محصل</h5>
              <h6 style={{ paddingTop: "10px" }}>تعداد کل محصلین {students.length}</h6>
            </>
          )}
          {!hasMore && students.length == 0 && <h5>محصل یافت نشد!</h5>}
        </section>
      </div>
    </div>
  )
}

export default Students
