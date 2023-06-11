import React from "react"
import "./Post.css"
import post from "../../assets/img/user3.jpg"
import imgpost from "../../assets/img/imgpost.jpg"

const Post = () => {
  return (
    <div className="post">
      <div className="image_post">
        <div className="post_header">
          <div className="post_share_with">
            <img src={post} alt="" />
            <p>معروف ابراهیمی</p>
          </div>
          <div className="post_date">
            <p>06-04-2023</p>
          </div>
        </div>
        <div className="img_post_body">
          <p>این یک پست تستی است</p>
          <img src={imgpost} alt="" />
        </div>
      </div>
      <div className="file_post_body">
        <div className="file_post_containter">
          <img src={post} />
        </div>
        <div className="file_post_title">
          <div className="file_post_details">
            <p>موبایل اپلیکیشن.pdf</p>
            <p>استاد ابراهیمی</p>
          </div>
          <div className="file_post_date">
            <button className="btn_download" type="button">
              <span className="button_download_text">دانلود</span>
              <span className="button_download_icon">
                <i className="bi bi-download"></i>
              </span>
            </button>
            {/* <button className="btn_download" title="برای دانلو کلیک نماید">
              دانلود
            </button> */}
            <p>06-04-2023</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
