import { useEffect, useState } from 'react'
import getRandomUser from './api/getUser'
import './App.css'
import Usercard from './components/Usercard'
import Loadercomp from './components/Loadercomp'

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    getRandomUser().then(
      (data) => setUser(data.results[0])
    )
  }, [])

  const handleRefresh = () => {
    getRandomUser().then((data) => setUser(data.results[0]))
  }


  return (
    <div>
      {
        user ?
          <>
            < Usercard data={user} />
            <div className='refresh-btn' >
              <button onClick={handleRefresh}>Refresh</button>
            </div>
          </> : < Loadercomp />
      }
    </div>
  )
}

export default App
