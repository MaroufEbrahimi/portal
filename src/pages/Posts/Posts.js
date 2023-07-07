import React, { useEffect, useState, useRef } from 'react'
import "./Posts.css"
import Post from '../../components/Post/Post'
import Spinner from "../../components/UI/Loading/Spinner"

function Posts() {
    const [posts, setposts] = useState([])
    const [hasMore, setHasMore] = useState(true);
    const lastNode = useRef();
    const [pagination, setPagination] = useState({ offset: 0, pageSize: 1 })
    const [loading, setLoading] = useState(true);

    const lastNodeReference = node => {
        if (loading) return;
        if (lastNode.current) lastNode.current.disconnect();
        lastNode.current = new IntersectionObserver(enteries => {
            if (enteries[0].isIntersecting) {
                if (hasMore) {
                    setPagination({ offset: pagination.offset + 1, pageSize: pagination.pageSize })
                }
            }
        })
        if (node) lastNode.current.observe(node);
    }

    // th e auth token must be read from somewhere in the frontend
    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:1000/api/v1/posts/?offset=${pagination.offset}&pageSize=${pagination.pageSize}`, {
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
                if (data.totalPages - 1 > pagination.offset) {
                    setHasMore(true)
                } else {
                    setHasMore(false)
                }
                setposts([...posts, ...data.content])
                setLoading(false)
            })
    }, [pagination])

    console.log(posts)
    return (
        <div className='post_page'>
            {posts.map((item, index) => {
                if (posts.length === index + 1) {
                    return <Post
                        key={item.id}
                        author={item.author}
                        date={item.dateTime}
                        images={item.images}
                        docs={item.docs}
                        text={item.message}
                        customRef={lastNodeReference}
                    />
                }
                return <Post
                    key={item.id}
                    author={item.author}
                    date={item.dateTime}
                    images={item.images}
                    docs={item.docs}
                    text={item.message}
                />
            })}
            <section style={{ position: "relative" }}>
                {hasMore && <Spinner />}
                {!hasMore && <h5 style={{ textAlign: "center" }}>end of the the posts</h5>}
            </section>
        </div>
    )
}

export default Posts