import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './components/ChildA'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Theme Toggler</h1>
      < ChildA />
    </>
  )
}

export default App
