import React, { useEffect, useState } from "react"
import "./UpdatePost.css"
import { useNavigate, useParams } from "react-router-dom"
import APIEndpoints from "../../constants/APIEndpoints"
import { useStateValue } from "../../context/StateProvider"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import Button from "../UI/Button/Button"
import ICONS from "../../constants/Icons"
import BtnTypes from "../../constants/BtnTypes"
import BackDrop from "../UI/BackDrop/BackDrop"
import Spinner from "../UI/Loading/Spinner"
import MessageBox from "../UI/MessageBox/MessageBox"
import { downloadFileFromApi } from "../../Utils/UtilsFunctions"

const UpdatePost = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState()
  const [{ authentication }, dispatch] = useStateValue()
  const [text, setText] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [loading, setloading] = useState(true)
  const [imageOnModal, setImageOnModal] = useState("")
  const [showRemoveFileModal, setShowRemoveFileModal] = useState(false)
  const [fileUrlToRemove, setfileUrlToRemove] = useState("")
  const [files, setfiles] = useState([])
  const [fields, setFields] = useState([])
  const [departments, setDepartments] = useState([])
  const [semesters, setsemesters] = useState([])
  const [completeMsg, setCompleteMsg] = useState({ show: false, msg: "" })
  const modalCloseHandler = () => {
    setShowModal(false)
    setloading(true)
  }

  // show image in fullscreen mode
  const fullscreen = (url) => {
    setImageOnModal(url)
    setShowModal(true)
  }

  const setShowRemoveFileModalHandlerAndSetFileUrl = (fileUrl) => {
    setShowRemoveFileModal(true)
    setfileUrlToRemove(fileUrl)
  }

  // this function is used to remove file on the server
  const removeFile = (type) => {
    // to do
    // remove the file on the server
    if (fileUrlToRemove != null) {
      fetch(fileUrlToRemove, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + authentication.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.statusCode == 200) {
            setShowRemoveFileModal(false)
            if (type == "image") {
              const images = post.images.filter(
                (item) => item != fileUrlToRemove
              )
              setPost({ ...post, images: images })
            }
          }
        })
    }
  }
  useEffect(() => {
    fetch(APIEndpoints.root + APIEndpoints.posts.getPost + id, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + authentication.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPost(data)
        setText(data?.message)
      })
  }, [])

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
        const f = data.content.find((item) => {
          return item.fieldName == post?.fieldOfStudy
        })
        fetch(APIEndpoints.root + APIEndpoints.fieldOfStudy.depratments(f?.id))
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
      })
  }, [post])

  // this function is used to send the update post to the api
  const sendInformationToAPI = () => {
    const body = {
      fieldOfStudy: post.fieldOfStudy,
      department: post.department,
      message: text,
      authorId: authentication.userId,
      semester: post.semester,
      isPublic: post.isPublic == "صفحه اصلی" ? true : false,
    }

    fetch(APIEndpoints.root + APIEndpoints.posts.update(post.id), {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + authentication.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
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
    setPost({ ...post, fieldOfStudy: e.target.value })
    const f = fields.find((item) => {
      return item.fieldName == e.target.value
    })
    fetch(APIEndpoints.fieldOfStudy.depratments(f.id))
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((data) => {
        setDepartments(data)
        setPost({ ...post, department: data[0].departmentName })
      })
  }

  return (
    <div className="update_post">
      <div className="image_header_container">
        <div className="post_header display_flex align_items_center justify_content_space_between">
          <div className="post_share_with display_flex align_items_center">
            <img src={post?.author?.imageUrl} alt={post?.author?.name} />
            <p>
              {post?.author?.name} {post?.author?.lastname}
            </p>
          </div>
          <div className="post_date">
            <p>{new Date(post?.dateTime).toDateString()}</p>
          </div>
        </div>
      </div>
      <div className="file_post_body display_flex flex_direction_column">
        <p className="post_section_title">متن پست:</p>
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={text}
            onChange={setText}
          />
        </div>
        {post?.images.length > 0 || post?.docs.length > 0 ? (
          <p className="post_section_title">فایلهای پست:</p>
        ) : null}
        <div className="post_images display_flex">
          {/* for each item of image array render a post_file */}
          {post?.images?.map((item) => {
            return (
              <div className="image_container" key={item}>
                <img src={item} alt="" key={item} />
                <div className="btn_container_for_modal display_flex align_items_center justify_content_center">
                  <span title="پاک کردن">
                    <Button
                      icon={ICONS.trash}
                      type={BtnTypes.danger}
                      onClick={() =>
                        setShowRemoveFileModalHandlerAndSetFileUrl(item)
                      }
                    />
                  </span>
                  <span title="دانلود">
                    <Button
                      icon={ICONS.download}
                      onClick={() => downloadFileFromApi(item)}
                    />
                  </span>
                  <span title="صحفه بزرگ">
                    <Button
                      icon={ICONS.fullscreen}
                      onClick={() => fullscreen(item)}
                    />
                  </span>
                </div>
              </div>
            )
          })}
        </div>
        <div className="pdf_files_container">
          {/* for each item of pdf array render a post_file */}
          {post?.docs?.map((doc) => {
            return (
              <div className="post_file display_flex " key={doc}>
                <div className="files_icon_container display_flex">
                  <i className={ICONS.fileEarmarkPdfFill}></i>
                  <p className="text_color display_flex align_items_center">
                    {doc.split("/")[doc.split("/").length - 1]}
                  </p>
                </div>
                <div className="file_download_button">
                  <button
                    className="btn_download display_flex align_items_center justify_content_center cursor_pointer"
                    type="button"
                  >
                    <span className="button_download_text">حذف فایل</span>
                    <span className="button_download_icon display_flex align_items_center justify_content_center">
                      <i className={ICONS.trash}></i>
                    </span>
                  </button>
                </div>
              </div>
            )
          }) && null}
        </div>
        <div className="back_drop_img_modal">
          <BackDrop show={showModal} closeModal={modalCloseHandler}>
            {loading && <Spinner />}
            <img
              src={imageOnModal}
              onLoad={() => setloading(false)}
              alt="file_image"
            />
          </BackDrop>
        </div>
        <BackDrop show={showRemoveFileModal} modalClose={modalCloseHandler}>
          {
            <MessageBox
              messageType="asking"
              firstBtn={{
                btnText: "بلی",
                btnType: BtnTypes.danger,
                onClick: () => removeFile("image"),
              }}
              secondBtn={{
                btnText: "نخیر",
                onClick: () => setShowRemoveFileModal(false),
              }}
              message={"برای حذف شدن فایل از سیستم مطمین هستید؟"}
              iconType={ICONS.asking}
            />
          }
        </BackDrop>
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
                setPost({
                  ...post,
                  isPublic: e.target.value == "صفحه اصلی" ? true : false,
                })
              }
              defaultValue={!post?.isPublic ? "صفحه محصل" : "صفحه اصلی"}
            >
              <option disabled>موقعیت</option>
              <option>صفحه محصل</option>
              <option>صفحه اصلی</option>
            </select>
          </div>
          {!post?.isPublic ? (
            <>
              <div className="post_box">
                <select
                  id="type"
                  value={post?.fieldOfStudy}
                  onChange={(e) => fieldOfStudeyInputHandling(e)}
                >
                  {fields.map((item) => {
                    return <option key={item.id}>{item.fieldName}</option>
                  })}
                </select>
              </div>
              <div className="post_box">
                <select
                  id="type"
                  onChange={(e) =>
                    setPost({ ...post, department: e.target.value })
                  }
                  value={post?.department}
                >
                  {departments.map((item) => {
                    return <option key={item.id}>{item.departmentName}</option>
                  })}
                </select>
              </div>
              <div className="post_box">
                <select
                  id="type"
                  onChange={(e) =>
                    setPost({ ...post, semester: e.target.value })
                  }
                  value={post?.semester}
                >
                  {semesters.map((item) => {
                    return <option>{item}</option>
                  })}
                </select>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
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
      <div className="updatePost_edit text_align_center">
        <Button text={"بروز رسانی پست"} onClick={sendInformationToAPI} />
      </div>
    </div>
  )
}

export default UpdatePost
