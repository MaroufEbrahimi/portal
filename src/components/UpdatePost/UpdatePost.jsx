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
import Backdrop from "../UI/BackDrop/BackDrop"
import Spinner from "../UI/Loading/Spinner"
import ModalDelete from "../UI/ModalDelete/ModalDelete"

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
  const modalCloseHandler = () => {
    setShowModal(false)
    setloading(true)
  }
  const fullscreen = (url) => {
    setImageOnModal(url)
    setShowModal(true)
  }
  const setShowRemoveFileModalHandlerAndSetFileUrl = (fileUrl) => {
    setShowRemoveFileModal(true)
    setfileUrlToRemove(fileUrl)
  }
  const removeFile = () => {
    // to do
    // remove the file on the server
    setShowRemoveFileModal(false)
    alert("file removed")
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

  const deleteFile = (url) => {
    if (url != null) {
      fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + authentication.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {})
    }
  }

  console.log(post)
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
        <p className="post_section_title">فایلهای پست:</p>
        <div className="post_images display_flex">
          {/* for each item of image array render a post_file */}
          {post?.images?.map((item) => {
            return (
              <div className="image_container" key={item}>
                <img src={item} alt="" key={item} />
                <div className="btn_container">
                  <Button
                    icon={ICONS.trash}
                    type={BtnTypes.danger}
                    onClick={() =>
                      setShowRemoveFileModalHandlerAndSetFileUrl(item)
                    }
                  />
                  <Button icon={ICONS.download} />
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
          })}
        </div>
        <Backdrop show={showModal} modalClose={modalCloseHandler}>
          {loading && <Spinner />}
          <img
            src={imageOnModal}
            onLoad={() => setloading(false)}
            alt="file_image"
          />
        </Backdrop>
        <ModalDelete show={showRemoveFileModal} modalClose={modalCloseHandler}>
          <div className="logout">
            <i className="bi bi-exclamation-triangle-fill"></i>
            <p>برای حذف شدن فایل از سیستم مطمین هستید؟</p>
            <div className="logout_buttons">
              <button className="btn logout_btn" onClick={() => removeFile()}>
                بلی
              </button>
              <button
                className="btn"
                onClick={() => setShowRemoveFileModal(false)}
              >
                نخیر
              </button>
            </div>
          </div>
        </ModalDelete>
      </div>
    </div>
  )
}

export default UpdatePost
