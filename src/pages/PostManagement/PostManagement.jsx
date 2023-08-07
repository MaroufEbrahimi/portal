import React, { useEffect, useRef, useState } from "react"
import "./PostManagement.css"
import Post from "../../components/Post/Post"
import { useStateValue } from "../../context/StateProvider"
import Spinner from "../../components/UI/Loading/Spinner"
import useProtect from "../../Hooks/useProtect"
import Roles from "../../constants/Roles"
import APIEndpoints from "../../constants/APIEndpoints"
import BackDrop from "../../components/UI/BackDrop/BackDrop"
import MessageBox from "../../components/UI/MessageBox/MessageBox"
import ICONS from "../../constants/Icons"
import BtnTypes from "../../constants/BtnTypes"

const PostManagement = () => {
  useProtect({ roles: [Roles.ADMIN] })
  const [{ authentication }, dispatch] = useStateValue()
  const [posts, setPosts] = useState([])
  const [semester, setsemester] = useState()
  const [department, setdepartment] = useState()
  const [feildOfStudy, setfeildOfStudy] = useState()
  const [hasMore, setHasMore] = useState(true)
  const lastNode = useRef()
  const [pagination, setPagination] = useState({ offset: 0, pageSize: 3 })
  const [loading, setLoading] = useState(true)
  const [fields, setFields] = useState([])
  const [departments, setDepartments] = useState([])
  const [semesters, setsemesters] = useState([])
  const [requestParams, setRequestParams] = useState(``)
  const [deleteModal, setDeleteModal] = useState(false)
  const [postToDelete, setPostToDelete] = useState()
  const [completeMsg, setCompleteMsg] = useState({ show: false, msg: "" })
  let endpoint =
    APIEndpoints.root +
    APIEndpoints.posts.getAllPostsForAdmin +
    `offset=${pagination.offset}&pageSize=${pagination.pageSize}`

  // this function is for handing the infinite scrolling
  const lastNodeReference = (node) => {
    if (loading) return
    if (lastNode.current) lastNode.current.disconnect()
    lastNode.current = new IntersectionObserver((enteries) => {
      if (enteries[0].isIntersecting) {
        if (hasMore) {
          setPagination({
            offset: pagination.offset + 1,
            pageSize: pagination.pageSize,
          })
        }
      }
    })
    if (node) lastNode.current.observe(node)
  }

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

  // The authentication token must be read from somewhere in the frontend
  useEffect(() => {
    setLoading(true)
    fetch(endpoint + requestParams, {
      method: "GET",
      headers: { Authorization: "Bearer " + authentication.token },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((data) => {
        if (data.totalPages - 1 > pagination.offset) {
          setHasMore(true)
        } else {
          setHasMore(false)
        }
        const newPosts = [...posts, ...data.content].filter(
          (obj, index, self) => index === self.findIndex((o) => o.id === obj.id)
        )
        setPosts(newPosts)
        setLoading(false)
      })
  }, [pagination])

  const showDeleteModal = (id) => {
    setDeleteModal(true)
    setPostToDelete(id)
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
    fetch(endpoint + requestParam, {
      method: "GET",
      headers: { Authorization: "Bearer " + authentication.token },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((data) => {
        if (data.totalPages - 1 > pagination.offset) {
          setHasMore(true)
        } else {
          setHasMore(false)
        }
        setPosts(data.content)
        setLoading(false)
      })
  }
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

  const handleDelete = () => {
    fetch(APIEndpoints.root + APIEndpoints.posts.deletePost(postToDelete), {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + authentication.token,
      },
    })
      .then((res) => {
        setDeleteModal(false)
        if (res.ok) return res.json()
        else throw new Error(res.statusText)
      })
      .then((data) => {
        setCompleteMsg({ msg: data.message, show: true })
        const newList = posts.filter((item) => item.id != postToDelete)
        setPosts(newList)
      })
      .catch((error) => {
        setCompleteMsg({ msg: error.message, show: true })
      })
  }

  return (
    <div className="posts_management">
      <div className="posts_management_tabHeader">
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
        <div className="posts_management_filter_btn">
          <button className="btn" onClick={handleFilterButton}>
            فیلتر
          </button>
        </div>
      </div>

      <div className="content_of_PostManagement">
        <div className="content_of_posts_details">
          <div className="display_flex align_items_center justify_content_center flex_direction_column">
            {Array.from(new Set(posts)).map((item, index) => {
              if (posts.length === index + 1) {
                return (
                  <div className="">
                    <Post
                      key={item.id}
                      role={Roles.ADMIN}
                      author={item.author}
                      date={item.dateTime}
                      images={item.images}
                      id={item.id}
                      docs={item.docs}
                      text={item.message}
                      isUpdated={item.isUpdated}
                      handleDelete={() => showDeleteModal(item.id)}
                      customRef={lastNodeReference}
                    />
                  </div>
                )
              }
              return (
                <div className="">
                  <Post
                    key={item.id}
                    role={Roles.ADMIN}
                    author={item.author}
                    date={item.dateTime}
                    images={item.images}
                    id={item.id}
                    docs={item.docs}
                    isHidden={item.isHidden}
                    isUpdated={item.isUpdated}
                    text={item.message}
                    handleDelete={() => showDeleteModal(item.id)}
                  />
                </div>
              )
            })}
          </div>
          <section className="end_of_posts">
            {hasMore && <Spinner />}
            {!hasMore && (
              <div className="text_align_center">
                <h5 className="text_color text_align_center">
                  {posts.length > 0 ? "آخرین پست" : "پست های مورد نظر یافت نشد"}{" "}
                </h5>
                <h6 style={{ paddingTop: "10px" }}>
                  تعداد کل پست ها {posts.length}
                </h6>
              </div>
            )}
          </section>
        </div>
      </div>
      <BackDrop show={deleteModal}>
        {
          <MessageBox
            messageType="asking"
            firstBtn={{
              btnText: "بلی",
              btnType: BtnTypes.danger,
              onClick: handleDelete,
            }}
            secondBtn={{
              btnText: "نخیر",
              onClick: () => setDeleteModal(false),
            }}
            message={"برای حذف شدن پست از سیستم مطمئن هستید؟"}
            iconType={ICONS.asking}
          />
        }
      </BackDrop>
      <BackDrop show={completeMsg.show}>
        {
          <MessageBox
            messageType="info"
            firstBtn={{
              btnText: "تایید",
              onClick: () => setCompleteMsg({ show: false, msg: "" }),
            }}
            message={completeMsg.msg}
            iconType={ICONS.info}
          />
        }
      </BackDrop>
    </div>
  )
}

export default PostManagement
