import React, { useState } from "react"
import "./PostManagement.css"
import { PostManagementTabHeader } from "../../constants/Data"
import Post from "../../components/Post/Post"
import Search from "../../components/Search/Search"
import { useStateValue } from "../../context/StateProvider"

const PostManagement = () => {
  const [{ authentication }, dispatch] = useStateValue()
  const [description, setDescription] = useState("")
  const [semester, setsemester] = useState("")
  const [department, setdepartment] = useState("")
  const [feildOfStudy, setfeildOfStudy] = useState("")
  const [isPublic, setisPublic] = useState("")
  const sendInfo = () => {
    const body = {
      fieldOfStudy: feildOfStudy,
      department: department,
      message: description,
      authorId: 1,
      semester: semester,
      isPublic: isPublic == "صفحه اصلی" ? true : false,
    }
    fetch("http://localhost:1000/api/v1/posts", {
      method: "POST",
      headers: {
        Auhtorization: "Bearer " + authentication?.token,
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((data) => {
        console.log(data)
      })
  }

  return (
    <div className="posts_management">
      <div className="title_posts_management">
        <div className="title_posts_title">
          <h2>تمامی پست ها درین جا موجود است</h2>
        </div>
        <div className="title_posts_divs">
          <div>کامپیوتر ساینس</div>
          <div>ستوماتالوژی</div>
          <div>حقوق</div>
        </div>
      </div>

      <div className="posts_management_search">
        <Search hiddenButton />
      </div>

      <div className="posts_management_tabHeader">
        <div className="posts_management_boxes">
          <div className="post_mana_box">
            <select
              id="type"
              value={semester}
              onChange={(e) => setsemester(e.target.value)}
            >
              <option>سمستر</option>
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
            <select
              id="type"
              value={feildOfStudy}
              onChange={(e) => setfeildOfStudy(e.target.value)}
            >
              <option disabled>پوهنحی</option>
              <option>کامپیوتر ساینس</option>
              <option>حقوق</option>
              <option>ستوماتالوژی</option>
            </select>
          </div>
          <div className="post_mana_box">
            <select
              id="type"
              value={department}
              onChange={(e) => setdepartment(e.target.value)}
            >
              <option disabled>دیپارتمنت</option>
              <option>سافت ویر</option>
              <option>دیتابیس</option>
              <option>نتورک</option>
            </select>
          </div>
        </div>
        <div className="posts_management_filter_btn">
          <button className="btn">فیلتر</button>
        </div>
      </div>

      <div className="content_of_PostManagement">
        <div className="content_of_posts_details">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  )
}

export default PostManagement
