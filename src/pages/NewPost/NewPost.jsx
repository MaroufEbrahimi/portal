import React, { useEffect, useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import "./NewPost.css"
import { useStateValue } from "../../context/StateProvider"
import { useNavigate } from "react-router-dom"
import useProtect from "../../Hooks/useProtect"
import Roles from "../../constants/Roles"

const NewPost = () => {
  // this is for security purpose
  useProtect({ roles: [Roles.ADMIN] })
  const navigate = useNavigate()
  const [{ authentication }, dispatch] = useStateValue()
  const [description, setDescription] = useState("")
  const [semester, setsemester] = useState("")
  const [department, setdepartment] = useState("")
  const [fieldOfStudy, setfeildOfStudy] = useState("")
  const [isPublic, setIsPublic] = useState(true)
  const [files, setfiles] = useState([])
  const [fields, setFields] = useState([])
  const [departments, setDepartments] = useState([])
  useEffect(() => {
    fetch("http://localhost:1000/api/v1/field-of-studies")
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((data) => {
        console.log(data)
        setFields(data.content)
      })
  }, [])

  // sends information to the api
  const sendInfo = () => {
    const body = {
      fieldOfStudy: fieldOfStudy,
      department: department,
      message: description,
      authorId: authentication.userId,
      semester: semester,
      isPublic: isPublic == "صفحه اصلی" ? true : false,
    }
    console.log(files)
    fetch("http://localhost:1000/api/v1/posts", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + authentication.token,
        "Content-Type": "application/json",
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
        // now send the file
        const formData = new FormData()
        for (let f in files) {
          formData.append("files", files[f])
        }
        fetch(data.filesUrl, {
          method: "POST",
          headers: {
            Authorization: "Bearer " + authentication.token,
          },
          body: formData,
        }).then((res) => {
          if (res.ok) {
            navigate("/admin/postmanagement")
          }
        })
      })
  }

  const fieldOfStudeyInputHandling = (e) => {
    setfeildOfStudy(e.target.value)
    const f = fields.find((item) => {
      return item.fieldName == e.target.value
    })
    console.log(f)
    fetch(
      "http://localhost:1000/api/v1/field-of-studies/" + f.id + "/departments"
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((data) => {
        console.log(data)
        setDepartments(data)
      })
  }

  return (
    <div className="new_post fade_in">
      <div className="post_description display_flex flex_direction_column">
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={description}
            onChange={setDescription}
          />
        </div>
      </div>
      <div className="post_file_img display_flex">
        <div className="file_handler">
          <input
            type="file"
            name="image-upload"
            id="input"
            multiple
            onChange={(e) => setfiles(e.target.files)}
            accept="image/*"
          />
          <label
            htmlFor="input"
            className="image-upload display_flex align_items_center justify_content_center text_align_center cursor_pointer"
          >
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
        <div className="post_boxes display_grid">
          <div className="post_box">
            <select
              id="type"
              onChange={(e) =>
                setIsPublic(e.target.value == "صفحه اصلی" ? true : false)
              }
            >
              <option selected disabled>
                موقعیت
              </option>
              <option>صفحه محصل</option>
              <option>صفحه اصلی</option>
            </select>
          </div>
          {!isPublic ? (
            <>
              <div className="post_box">
                <select
                  id="type"
                  onChange={(e) => fieldOfStudeyInputHandling(e)}
                >
                  <option disabled selected>
                    پوهنحی
                  </option>
                  {fields.map((item) => {
                    return <option key={item.id}>{item.fieldName}</option>
                  })}
                </select>
              </div>
              <div className="post_box">
                <select
                  id="type"
                  onChange={(e) => setdepartment(e.target.value)}
                >
                  <option selected disabled>
                    دیپارتمنت
                  </option>
                  {departments.map((item) => {
                    return <option key={item.id}>{item.departmentName}</option>
                  })}
                </select>
              </div>
              <div className="post_box">
                <select id="type" onChange={(e) => setsemester(e.target.value)}>
                  <option selected disabled>
                    سمستر
                  </option>
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
            </>
          ) : (
            ""
          )}
        </div>
        <button
          style={{ width: "160px", marginTop: "20px", float: "left" }}
          onClick={() => sendInfo("next")}
          className=" btn"
        >
          ارسال
        </button>
      </div>
    </div>
  )
}

export default NewPost
