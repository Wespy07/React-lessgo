import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)
  // let counter = 7

  const incrementor = () => {
    setCounter(counter + 1)
    console.log(counter)
  }
  
  const decrementor = () => {
    setCounter(counter - 1)
    console.log(counter)
  }

  if (counter < 0) {
    setCounter(0)
  } else if (counter > 10) {
    setCounter(10)
  }

  return (
    <>
      <h1>Hello {counter} Friend!</h1>
      <h3>Counter Value: {counter}</h3>
      <button
        onClick={decrementor}
      >Decrement {counter}</button>
      <button
        onClick={incrementor}
      >Increment {counter}</button>
      <p>The counter value is: {counter}</p>
    </>
  )
}

export default App
