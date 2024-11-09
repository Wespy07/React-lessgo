import { useState } from 'react'
import './App.css'

import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from './slices/todo'

function App() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)

  // console.log(state)

  if (state.todo.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h2>API Calling in Redux using redux-toolkit</h2>
      <button onClick={e => dispatch(fetchTodos())}>Fetch Todos</button>
      {
        state.todo.data && state.todo.data.map((e, i) => <li key={i}>{e.title}</li>)
      }
    </>
  )
}

export default App
