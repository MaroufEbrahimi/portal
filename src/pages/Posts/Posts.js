import React, { useEffect, useState } from 'react'
import "./Posts.css"
import Post from '../../components/Post/Post'

function Posts() {
    const [posts, setposts] = useState([])

    // th e auth token must be read from somewhere in the frontend
    useEffect(() => {
        fetch("http://localhost:1000/api/v1/posts/?offset=0&pageSize=10", {
            method: "GET",
            headers: { "Authorization": "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGloZXJhd2k3QGdtYWlsLmNvbSIsInJvbGVzIjpbIkFETUlOIl0sImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MTAwMC9hcGkvdjEvYXV0aC9hdXRoZW50aWNhdGUiLCJleHAiOjE2OTExNDI0NzF9.WX7Xex9TNWok9BBHBdnagoI5afIKAnhsS8htg6Q1al8" }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(res.statusText);
                }
            })
            .then(data => {
                console.log(data)
                setposts(data.content)
            })
    }, [])
    console.log(posts)
    return (
        <div className='post_page'>
            {posts.map(item => {
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
    )
}

export default Posts