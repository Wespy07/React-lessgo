import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {

  return (
    <>
    <h1 className='bg-green-600 p-4 rounded-xl mb-4'>Tailwind & Props in React</h1>
    < Card username='Test Name 1' btnText='idhar click' />
    
    < Card username='Test Name 2' btnText='click idhar' />
    
    < Card username='Test Name 2' />
    </>
  )
}

export default App
