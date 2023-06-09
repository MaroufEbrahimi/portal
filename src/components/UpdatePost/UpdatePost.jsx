import React, { useEffect, useState } from "react"
import "./UpdatePost.css"
import { useParams } from "react-router-dom"
import APIEndpoints from "../../constants/APIEndpoints";
import { useStateValue } from "../../context/StateProvider";
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

const UpdatePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [{ authentication }, dispatch] = useStateValue();
  const [text, setText] = useState("")
  useEffect(() => {
    fetch(APIEndpoints.root + APIEndpoints.posts.getPost + id, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + authentication.token
      }
    }).then(res => res.json())
      .then(data => {
        setPost(data)
        setText(data?.message)
      })

  }, [])

  const deleteFile = (url) => {
    if (url != null) {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer " + authentication.token
        }
      }).then(res => res.json())
        .then(data => {

        })
    }
  }

  console.log(post)
  return (
    <div className="update_post" >
      <div className="image_header_container">
        <div className="post_header">
          <div className="post_share_with">
            <img src={post?.author?.imageUrl} alt={post?.author?.name} />
            <p>{post?.author?.name} {post?.author?.lastname}</p>
          </div>
          <div className="post_date">
            <p>{new Date(post?.dateTime).toDateString()}</p>
          </div>
        </div>
      </div>
      <div className="file_post_body">
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
        <div className="post_images">
          {/* for each item of image array render a post_file */}
          {post?.images?.map(item => {
            return (
              <div className="image_container">
                <img src={item} alt="" key={item} />
              </div>
            )
          })}

        </div>
        <div className="pdf_files_container">
          {/* for each item of pdf array render a post_file */}
          {post?.docs?.map(doc => {
            return (
              <div className="post_file" key={doc}>
                <div className="files_icon_container">
                  <i className="bi bi-file-earmark-pdf-fill"></i>
                  <p>{doc.split("/")[doc.split("/").length - 1]}</p>
                </div>
                <div className="file_download_button">
                  <button className="btn_download" type="button">
                    <span className="button_download_text">حذف فایل</span>
                    <span className="button_download_icon">
                      <i className="bi bi-trash"></i>
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

export default UpdatePost
