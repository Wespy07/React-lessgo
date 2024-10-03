import { useState } from 'react'
import './App.css'
import Card from './components/card'
import Input from './components/Input'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Weather App</h1>
    < Input placeholder='Search for a city' />
    < Button value='search' />
    < Card />
    </>
  )
}

export default App
