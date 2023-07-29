import React, { useState } from "react"
import "./Post.css"
import { Link } from "react-router-dom"
import { timeSince } from "../../Utils/DateTimeUtils"
import Roles from "../../constants/Roles"
import { downloadFileFromApi } from "../../Utils/UtilsFunctions"
import APIEndpoints from "../../constants/APIEndpoints"
import { useStateValue } from "../../context/StateProvider"
import ICONS from "../../constants/Icons"

const Post = ({
  role,
  id,
  images,
  docs,
  author,
  date,
  text,
  isUpdated = false,
  isHidden,
  handleDelete,
  customRef = null,
}) => {
  const [{ authentication }, dispatch] = useStateValue()
  const [isHide, setIsHide] = useState(isHidden)

  const handleHideShow = () => {
    console.log(isHidden)
    fetch(APIEndpoints.root + APIEndpoints.posts.toggleHideShow(id), {
      headers: {
        Authorization: "Bearer " + authentication.token,
      },
    }).then((res) => {
      if (res.ok) {
        setIsHide(!isHide)
      }
    })
  }
  return (
    <div className="post" ref={customRef}>
      <div className="image_header_container">
        <div className="post_header display_flex justify_content_space_between">
          <div className="post_share_with display_flex align_items_center">
            <img src={author?.imageUrl} alt={author?.name} />
            <div className="post_date">
              <p>
                {author?.name} {author?.lastname}
              </p>
              <p style={{ fontSize: "10px" }}>
                {timeSince(new Date(date))}
                {isUpdated && " بروزرسانی شد"}
              </p>
            </div>
          </div>
          {role == Roles.ADMIN ? (
            // Post Settings on left of Posts
            <div className="post_settings">
              <span className="setting_icon cursor_pointer">
                <i className={ICONS.threeDots}></i>
              </span>
              <div className="setting_menu">
                <ul>
                  <li className="setting_option">
                    <Link to={"edit/" + id} className="setting_option_details">
                      <i className={ICONS.pencilSquare}></i>
                      <span>ویرایش پست</span>
                    </Link>
                  </li>
                  {/* Handle Hide & UnHide of the Post */}
                  <li className="setting_option" onClick={handleHideShow}>
                    <span className="setting_option_details">
                      {!isHide ? (
                        <i className={ICONS.eyeSlashFill}></i>
                      ) : (
                        <i className={ICONS.eyeFill}></i>
                      )}
                      {!isHide ? (
                        <span>پنهان کردن</span>
                      ) : (
                        <span>نمایش دادن</span>
                      )}
                    </span>
                  </li>
                  <li className="setting_option" onClick={handleDelete}>
                    <span className="setting_option_details">
                      <i className={ICONS.trashFill}></i>
                      <span>حذف پست</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="file_post_body display_flex flex_direction_column">
        {/* This is Text for each post */}
        <div className="post_text">
          <p dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
        {/* For each item of image array render a post_file */}
        <div className="post_images">
          {images?.map((item) => {
            return <img src={item} alt="" key={item} />
          })}
        </div>
        <div className="pdf_files_container">
          {/* For each item of pdf array render a post_file */}
          {docs?.map((doc) => {
            return (
              <div className="post_file display_flex" key={doc}>
                <div className="files_icon_container display_flex">
                  <i className={ICONS.fileEarmarkPdfFill}></i>
                  <p className="text_color display_flex align_items_center">
                    {doc.split("/")[doc.split("/").length - 1]}
                  </p>
                </div>
                <div className="file_download_button">
                  <button
                    className="btn_download display_flex cursor_pointer align_items_center justify_content_center"
                    type="button"
                    onClick={() => downloadFileFromApi(doc)}
                  >
                    <span className="button_download_text">دانلود</span>
                    <span className="button_download_icon display_flex align_items_center justify_content_center">
                      <i className={ICONS.download}></i>
                    </span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Post
