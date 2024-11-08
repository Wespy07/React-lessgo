import { useState } from 'react'
import './App.css'

import { useDispatch, useSelector } from 'react-redux' 
import { fetchTodos } from './slices/todo'

function App() {
  const dispatch = useDispatch()

  return (
    <>
      <h2>API Calling in Redux using redux-toolkit</h2>
      <button onClick={e => dispatch(fetchTodos())}>Fetch Todos</button>
    </>
  )
}

export default App
