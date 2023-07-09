import React, { useEffect, useRef, useState } from "react"
import "./PostManagement.css"
import Post from "../../components/Post/Post"
import { useStateValue } from "../../context/StateProvider"
import Spinner from "../../components/UI/Loading/Spinner"

const PostManagement = () => {
  const [{ authentication }, dispatch] = useStateValue()
  const [posts, setPosts] = useState([]);
  const [semester, setsemester] = useState()
  const [department, setdepartment] = useState()
  const [feildOfStudy, setfeildOfStudy] = useState()
  const [hasMore, setHasMore] = useState(true);
  const lastNode = useRef();
  const [pagination, setPagination] = useState({ offset: 0, pageSize: 3 })
  const [loading, setLoading] = useState(true);

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

  // th e auth token must be read from somewhere in the frontend
  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:1000/api/v1/posts/?semester=${semester}&offset=${pagination.offset}&pageSize=${pagination.pageSize}`, {
      method: "GET",
      headers: { "Authorization": "bearer " + authentication.token }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .then(data => {
        console.log(data)
        if (data.totalPages - 1 > pagination.offset) {
          setHasMore(true)
        } else {
          setHasMore(false)
        }
        setPosts([...posts, ...data.content])
        setLoading(false)
      })
  }, [pagination])

  const handleFilterButton =() => {
    setPosts([])
    let endpoint = `http://localhost:1000/api/v1/posts/?offset=${pagination.offset}&pageSize=${pagination.pageSize}`
   
    if(semester){
      console.log("semester", semester)
      endpoint = endpoint.concat(`&semester=${semester}`)
    }
    if(department){
      console.log("dep", department)
      endpoint = endpoint.concat(`&department=${department}`)
    }
    if(feildOfStudy){
      console.log("feildOfStudy", feildOfStudy)
      endpoint = endpoint.concat(`&feildOfStudy=${feildOfStudy}`)
    }
    
    fetch(endpoint, {
      method: "GET",
      headers: { "Authorization": "bearer " + authentication.token }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .then(data => {
        console.log(data)
        if (data.totalPages - 1 > pagination.offset) {
          setHasMore(true)
        } else {
          setHasMore(false)
        }
        setPosts([...posts, ...data.content])
        setLoading(false)
      })
  }

  return (
    <div className="posts_management">
      <div className="posts_management_tabHeader">
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
        <div className="posts_management_filter_btn">
          <button className="btn" onClick={handleFilterButton}>فیلتر</button>
        </div>
      </div>

      <div className="content_of_PostManagement">
        <div className="content_of_posts_details">
          {posts.map((item, index) => {
            if (posts.length === index + 1) {
              return <Post
                key={item.id}
                author={item.author}
                date={item.dateTime}
                images={item.images}
                docs={item.docs}
                text={item.message}
                customRef={lastNodeReference}
              />
            }
            return <Post
              key={item.id}
              author={item.author}
              date={item.dateTime}
              images={item.images}
              docs={item.docs}
              text={item.message}
            />
          })}
          <section style={{ position: "relative", height: "60px" }}>
            {hasMore && <Spinner />}
            {!hasMore && <h5 style={{ textAlign: "center" }}>end of the the posts</h5>}
          </section>
        </div>
      </div>
    </div>
  )
}

export default PostManagement
