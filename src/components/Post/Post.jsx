import React from "react"
import "./Post.css"
import { Link } from "react-router-dom"
import { timeSince } from "../../Utils/DateTimeUtils"


const Post = ({ id, images, docs, author, date, text, customRef = null }) => {

  return (
    <div className="post" ref={customRef}>
      <div className="image_header_container">
        <div className="post_header display_flex justify_content_space_between">
          <div className="post_share_with display_flex align_items_center">
            <img src={author?.imageUrl} alt={author?.name} />
            <div className="post_date">
              <p>{author?.name} {author?.lastname}</p>
              <p style={{ fontSize: "10px" }}>{timeSince(new Date(date))}</p>
            </div>

          </div>
          <div className="post_settings">
            <span className="setting_icon"><i className="bi bi-three-dots"></i></span>
            <div className="setting_menu">
              <ul>
                <li className="setting_option">
                  <Link to={"edit/" + id}>
                    <i className="bi bi-brush"></i>
                    ویرایش پست
                  </Link>
                </li>
                <li className="setting_option"><i className="bi bi-save-fill"></i>پنهان کردن</li>
                <li className="setting_option"><i className="bi bi-trash-fill"></i>حذف پست</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="file_post_body display_flex flex_direction_column">
        <div className="post_text">
          <p dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
        <div className="post_images display_flex">
          {/* for each item of image array render a post_file */}
          {images?.map((item) => {
            return <img src={item} alt="" key={item} />
          })}
        </div>
        <div className="pdf_files_container">
          {/* for each item of pdf array render a post_file */}
          {docs?.map((doc) => {
            return (
              <div className="post_file display_flex" key={doc}>
                <div className="files_icon_container display_flex">
                  <i className="bi bi-file-earmark-pdf-fill"></i>
                  <p className="text_color display_flex align_items_center">
                    {doc.split("/")[doc.split("/").length - 1]}
                  </p>
                </div>
                <div className="file_download_button">
                  <button
                    className="btn_download display_flex cursor_pointer align_items_center justify_content_center"
                    type="button"
                  >
                    <span className="button_download_text">دانلود</span>
                    <span className="button_download_icon display_flex align_items_center justify_content_center">
                      <i className="bi bi-download"></i>
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
