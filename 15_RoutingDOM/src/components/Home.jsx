import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

// test comment 

function Home() {

    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data))
    }, [])

    return (
        <div>
            {   
                (posts) ? 
                posts.map((post, i) => {
                   return <NavLink to={`/post/${post.id}`} key={i}>{post.title}</NavLink>
                }) : <div className='loading'>
                    <h1>Loading...</h1>
                </div>
            }
        </div>
    )
}

export default Home