import { useState } from 'react'
import Item from './components/item'
import './App.css'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Cart Context</h1>
     <Item title='Laptop' price='80000'/>
     <Item title='Mobile' price='30000'/>
     <Item title='TV' price='40000'/>


     <Cart/>
    </>
  )
}

export default App
