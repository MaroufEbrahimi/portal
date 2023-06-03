import React from "react"
import "./Post.css"
import post from "../../assets/img/user3.jpg"

const Post = () => {
  return (
    <div className="post">
      <div className="post_body">
        <div className="post_containter">
          <img src={post} alt="post img" />
        </div>
        <div className="post_title">
          <div className="post_details">
            <p>موبایل اپلیکیشن.pdf</p>
            <p>استاد ابراهیمی</p>
          </div>
          <div className="post_date">
            <p>1 hour ago</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
