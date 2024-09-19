import { useEffect, useState } from 'react'
import getPosts from './api/jsonPlaceholder'
import './App.css'

function App() {

  const [posts, setPosts] = useState(null)

  useEffect(() => {
    getPosts().then(
      (data) => setPosts(data)
    )

  }, [])
  return (
    <div>
      {
        posts ? posts.map((e) => <li>{e.title}</li>) : <h3>Loading</h3>
      }
    </div>
  )
}

export default App
