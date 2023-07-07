import React, { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import "./NewPost.css"
import { useStateValue } from "../../context/StateProvider"

const NewPost = () => {
  const [{ authentication }, dispatch] = useStateValue()
  const [description, setDescription] = useState("")
  const [semester, setsemester] = useState("")
  const [department, setdepartment] = useState("")
  const [feildOfStudy, setfeildOfStudy] = useState("")
  const [isPublic, setisPublic] = useState("")
  const [files, setfiles] = useState([])
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
    <div className="new_post fade_in">
      <div className="post_description">
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={description}
            onChange={setDescription}
          />
        </div>
      </div>
      <div className="post_file_img">
        <div className="file_handler">
          <input
            type="file"
            name="image-upload"
            id="input"
            multiple
            onChange={(e) => setfiles(e.target.files)}
            accept="image/*"
          />
          <label htmlFor="input" className="image-upload">
            <i
              className="bi bi-file-earmark-plus-fill"
              title="choose your photo"
            ></i>
            <p>اضافه کردن فایل یا تصویر</p>
          </label>
        </div>
      </div>

      <div className="share_post_on">
        <h3>اشتراک گذاری در کجا</h3>
        <div className="post_boxes">
          <div className="post_box">
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
          <div className="post_box">
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
          <div className="post_box">
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
          <div className="post_box">
            <select id="type">
              <option>صفحه محصل</option>
              <option>صفحه اصلی</option>
            </select>
          </div>
        </div>
        <div className="send_post">
          <button onClick={() => sendInfo("next")} className=" btn">
            ارسال
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewPost
