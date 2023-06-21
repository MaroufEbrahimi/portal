import React, { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import "./NewPost.css"

const NewPost = () => {
  const [description, setDescription] = useState("")
  return (
    <div className="new_post fade_in">
      <div className="post_description">
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={description}
            onChange={setDescription}
          />
        </div>
      </div>
      <div className="post_file_img">
        <div className="file_handler">
          <input
            type="file"
            name="image-upload"
            id="input"
            // onChange={this.imageHandler}
            accept="image/*"
          />
          <label htmlFor="input" className="image-upload">
            <i
              className="bi bi-file-earmark-plus-fill"
              title="choose your photo"
            ></i>
            <p>اضافه کردن فایل یا تصویر</p>
          </label>
        </div>
      </div>

      <div className="share_post_on">
        <h3>اشتراک گذاری در کجا</h3>
        <div className="post_boxes">
          <div className="post_box">
            <select id="type">
              <option>سمستر</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>
          <div className="post_box">
            <select id="type">
              <option>دیپارتمنت</option>
              <option>سافت ویر</option>
              <option>دیتابیس</option>
              <option>نتورک</option>
            </select>
          </div>
          <div className="post_box">
            <select id="type">
              <option>پوهنحی</option>
              <option>کامپیوتر ساینس</option>
              <option>حقوق</option>
              <option>ستوماتالوژی</option>
            </select>
          </div>
          <div className="post_box">
            <select id="type">
              <option>صفحه محصل</option>
              <option>صفحه اصلی</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPost
