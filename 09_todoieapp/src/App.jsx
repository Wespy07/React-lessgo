import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Todoitem from './components/Todoitem'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='todo-container'>
        < Header title='Todoie App' />
        < Todoitem text='Eat' />
        < Todoitem text='Sleep' />
        < Todoitem   text='Code' />
        < Todoitem text='Again code' />
        < Todoitem text='Do more code' />
        < Todoitem text='Repeat' />
        < Button />
      </div>
    </>
  )
}

export default App
