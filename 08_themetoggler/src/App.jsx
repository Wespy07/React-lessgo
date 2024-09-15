import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './components/ChildA'

const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('Light')

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <h1>Theme Toggler: {theme}</h1>
        <div id='container-box' style={{backgroundColor: (theme==='Light') ? 'antiquewhite' : 'black'}}></div>
        < ChildA />
      </ThemeContext.Provider>
    </>
  )
}

export default App
export { ThemeContext }