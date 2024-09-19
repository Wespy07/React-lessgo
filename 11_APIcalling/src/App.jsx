import { useEffect, useState } from 'react'
import getPosts from './api/jsonPlaceholder'
import Postcard from './components/Postcard'
import './App.css'

function App() {

  const [posts, setPosts] = useState(null)

  useEffect(() => {
    getPosts().then(
      (data) => setPosts(data)
    )

  }, [])
  return (
    <div className='postcard'>
      {
        posts ? posts.map((e) => < Postcard title={e.title} body={e.body}/>) : <h3>Loading</h3>
      }
    </div>
  )
}

export default App
