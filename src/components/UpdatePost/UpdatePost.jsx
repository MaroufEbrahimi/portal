import React, { useEffect, useState } from "react"
import "./UpdatePost.css"
import { useParams } from "react-router-dom"
import APIEndpoints from "../../constants/APIEndpoints"
import { useStateValue } from "../../context/StateProvider"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import Button from "../UI/Button/Button"
import ICONS from "../../constants/Icons"
import BtnTypes from "../../constants/BtnTypes"
import BackDrop from "../UI/BackDrop/BackDrop"
import Spinner from "../UI/Loading/Spinner"
import MessageBox from "../MessageBox/MessageBox"
import { downloadFileFromApi } from "../../Utils/UtilsFunctions"

const UpdatePost = () => {
  const { id } = useParams()
  const [post, setPost] = useState()
  const [{ authentication }, dispatch] = useStateValue()
  const [text, setText] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [loading, setloading] = useState(true)
  const [imageOnModal, setImageOnModal] = useState("")
  const [showRemoveFileModal, setShowRemoveFileModal] = useState(false)
  const [fileUrlToRemove, setfileUrlToRemove] = useState("")
  const [files, setfiles] = useState([])
  const modalCloseHandler = () => {
    console.log("close")
    setShowModal(false)
    setloading(true)
  }

  // show image in fullscreen mode
  const fullscreen = (url) => {
    console.log(url)
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
    console.log(fileUrlToRemove)
    if (fileUrlToRemove != null) {
      fetch(fileUrlToRemove, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + authentication.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(fileUrlToRemove)
          console.log(data)
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

  // this function is used to send the update post to the api
  const sendInformationToAPI = () => {
    // let bd = {
    //   fieldOfStudy,
    //   department,
    //   message,
    //   authorId,
    //   semester,
    //   isPublic
    // }

    fetch(APIEndpoints.posts.update(post.id), {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + authentication.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
  }

  console.log(post)
  console.log(files)
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
                <div className="btn_container_for_modal">
                  <Button
                    icon={ICONS.trash}
                    type={BtnTypes.danger}
                    onClick={() =>
                      setShowRemoveFileModalHandlerAndSetFileUrl(item)
                    }
                  />
                  <Button
                    icon={ICONS.download}
                    onClick={() => downloadFileFromApi(item)}
                  />
                  <Button
                    icon={ICONS.fullscreen}
                    onClick={() => fullscreen(item)}
                  />
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
                  <i className="bi bi-file-earmark-pdf-fill"></i>
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
                      <i className="bi bi-trash"></i>
                    </span>
                  </button>
                </div>
              </div>
            )
          }) && null}
        </div>
        <BackDrop show={showModal} closeModal={modalCloseHandler}>
          {loading && <Spinner />}
          <img
            src={imageOnModal}
            onLoad={() => setloading(false)}
            alt="file_image"
          />
        </BackDrop>

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
              className="bi bi-file-earmark-plus-fill"
              title="choose your photo"
            ></i>
            <p>اضافه کردن فایل یا تصویر</p>
          </label>
        </div>
      </div>
      <Button text={"بروز رسانی پست"} onClick={sendInformationToAPI} />
    </div>
  )
}

export default UpdatePost
