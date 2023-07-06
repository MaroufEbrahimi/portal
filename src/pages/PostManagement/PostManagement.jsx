import React, { useState } from "react"
import "./PostManagement.css"
import { PostManagementTabHeader } from "../../constants/Data"
import Post from "../../components/Post/Post"
import Search from "../../components/Search/Search"

const PostManagement = () => {
  const [showTab, setShowTab] = useState(1)
  const handleTabs = (index) => setShowTab(index)

  return (
    <div className="posts_management">
      <div className="title_posts_management">
        <div className="title_posts_title">
          <h2>تمامی پست ها درین جا موجود است</h2>
        </div>
        <div className="title_posts_divs">
          <div>کامپیوتر ساینس</div>
          <div>ستوماتالوژی</div>
          <div>حقوق</div>
        </div>
      </div>

      <div className="posts_management_search">
        <Search hiddenButton />
      </div>

      <div className="posts_management_tabHeader">
        {PostManagementTabHeader.map((item) => (
          <ul>
            <li
              className={showTab === item.counter ? "active_tab" : ""}
              onClick={() => handleTabs(item.counter)}
            >
              <span>{item.text}</span>
            </li>
          </ul>
        ))}
      </div>

      <div className="content_of_PostManagement">
        <div className={showTab === 1 ? "content active_content" : "content"}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>

        <div className={showTab === 2 ? "content active_content" : "content"}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>

        <div className={showTab === 3 ? "content active_content" : "content"}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>

        <div className={showTab === 4 ? "content active_content" : "content"}>
          <Post />
        </div>

        <div className={showTab === 5 ? "content active_content" : "content"}>
          <Post />
        </div>

        <div className={showTab === 6 ? "content active_content" : "content"}>
          <Post />
        </div>

        <div className={showTab === 7 ? "content active_content" : "content"}>
          <Post />
        </div>

        <div className={showTab === 8 ? "content active_content" : "content"}>
          <Post />
        </div>
      </div>
    </div>
  )
}

export default PostManagement
