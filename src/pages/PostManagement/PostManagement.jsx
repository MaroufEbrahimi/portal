import React, { useEffect, useState } from "react"
import "./PostManagement.css"
import { PostManagementTabHeader } from "../../constants/Data"
import Post from "../../components/Post/Post"
import Search from "../../components/Search/Search"
import { useStateValue } from "../../context/StateProvider"

const PostManagement = () => {
  const [{ authentication }, dispatch] = useStateValue();
  const [showTab, setShowTab] = useState(1)
  const handleTabs = (index) => setShowTab(index)
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1000/api/v1/posts/?offset=0&pageSize=4&semester="+1, {
      method: "GET",
      headers: {
        authorization: "Bearer " + authentication.token
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        console.log(data)
        setPosts(data.content)
      })
  }, [])

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
          {posts?.map(item => {
            return <Post
              key={item.id}
              author={item.author}
              date={item.dateTime}
              images={item.images}
              docs={item.docs}
              text={item.message}
            />
          })}
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
