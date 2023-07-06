import React from "react"
import "./Post.css"
import imgpost from "../../assets/img/imgpost.jpg"

const Post = ({ images, docs, author, date, text }) => {
  console.log(images)
  return (
    <div className="post">
      <div className="image_header_container">
        <div className="post_header">
          <div className="post_share_with">
            <img src={author?.imageUrl} alt={author?.name} />
            <p>{author?.lastname} {author?.name}</p>
          </div>
          <div className="post_date">
            <p>{date}</p>
          </div>
        </div>
      </div>
      <div className="file_post_body">
        <div className="post_text">
          <p>{text}</p>
        </div>
        <div className="post_images">
          {/* for each item of image array render a post_file */}
          {images?.map(item => {
            return <img src={item} alt="" key={item} />
          })}

        </div>
        <div className="pdf_files_container">
          {/* for each item of pdf array render a post_file */}
          {docs?.map(doc => {
            return (
              <div className="post_file" key={doc}>
                <div className="files_icon_container">
                  <i className="bi bi-file-earmark-pdf-fill"></i>
                  <p>{doc.split("/")[doc.split("/").length - 1]}</p>
                </div>
                <div className="file_download_button">
                  <button className="btn_download" type="button">
                    <span className="button_download_text">دانلود</span>
                    <span className="button_download_icon">
                      <i className="bi bi-download"></i>
                    </span>
                  </button>
                </div>
              </div>)
          })}
        </div>
      </div>
    </div>
  )
}

export default Post
