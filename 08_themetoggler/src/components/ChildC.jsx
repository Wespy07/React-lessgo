import React, { useContext } from 'react'
import { ThemeContext } from '../App'

function ChildC() {
  const {theme, setTheme} = useContext(ThemeContext)

  function toggleTheme(){
    (theme==='Light') ? setTheme('Dark') : setTheme('Light')
  }

  return (
    <>
    <button onClick={toggleTheme}>Toggle Theme: {theme}</button>
    </>
  )
}

export default ChildC