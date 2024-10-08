import React, { useEffect, useState } from 'react'

function Home() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data))
    }, [])


    return (
        <div>
            {
                posts.map((post) => {
                   return <li>{post.title}</li>
                })
            }
        </div>
    )
}

export default Home