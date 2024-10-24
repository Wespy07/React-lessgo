import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice'
import { useState } from 'react'

function App() {
  const [amount, setAmount] = useState('')

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleIncrement() {
    dispatch(increment())
  }

  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <br />
      <button onClick={() => dispatch(reset())}>Reset</button>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        placeholder='Increment by amount'
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(amount))}>Go</button>
    </>
  )
}

export default App
