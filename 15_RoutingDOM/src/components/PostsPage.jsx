import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PostsPage() {
    const [post, setPost] = useState(null)

    const params = useParams()
    console.log(params)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
            .then((res) => res.json())
            .then((data) => setPost(data))
    }, [])

    console.log(post)
    return (
        <div className='post-container'>
            {
                post ? 
                <>
                    <h1>{post.title}</h1>
                    <h6>Post id: {post.id}</h6>
                    <p>{post.body}</p>
                </> : <p>Please wait...</p>
            }
        </div>
  )
}

export default PostsPage