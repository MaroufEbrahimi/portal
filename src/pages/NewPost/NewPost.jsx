import React, { useEffect, useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import "./NewPost.css"
import { useStateValue } from "../../context/StateProvider"
import { useNavigate } from "react-router-dom"
import useProtect from "../../Hooks/useProtect"
import Roles from "../../constants/Roles"
import BackDrop from "../../components/UI/BackDrop/BackDrop"
import MessageBox from "../../components/UI/MessageBox/MessageBox"
import ICONS from "../../constants/Icons"
import APIEndpoints from "../../constants/APIEndpoints"

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
  const [semesters, setsemesters] = useState([])
  const [completeMsg, setCompleteMsg] = useState({ show: false, msg: "" })
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
    fetch(APIEndpoints.root + APIEndpoints.posts.addPost, {
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
        if (files.length > 0) {
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
              setCompleteMsg({ show: true, msg: "پست با موفقیت ارسال شد!" })
            }
          })
        } else {
          setCompleteMsg({ show: true, msg: "پست با موفقیت ارسال شد!" })
        }
      })
  }

  const fieldOfStudeyInputHandling = (e) => {
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
        console.log(data)
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
            accept=".pdf,.jpg,.jpeg,.png"
          />
          <label
            htmlFor="input"
            className="image-upload display_flex align_items_center justify_content_center text_align_center cursor_pointer"
          >
            <i
              className={ICONS.fileEarmarkPlusFill}
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
                <select id="type" onChange={(e) => setDep(e.target.value)}>
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
                  {semesters.map((sem) => {
                    return <option>{sem}</option>
                  })}
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
      <BackDrop show={completeMsg.show}>
        {
          <MessageBox
            messageType="info"
            firstBtn={{
              btnText: "تایید",
              onClick: () => navigate("/admin/post-management"),
            }}
            message={completeMsg.msg}
            iconType={ICONS.info}
          />
        }
      </BackDrop>
    </div>
  )
}

export default NewPost
