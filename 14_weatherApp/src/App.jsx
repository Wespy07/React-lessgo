import './App.css'
import Card from './components/card'
import Input from './components/Input'
import Button from './components/Button'
import { useWeather } from './context/Weather'

function App() {
  const weather = useWeather()
  // console.log(weather)

  return (
    <>
    <h1>Weather App</h1>
    < Input placeholder='Search for a city' />
    < Button onClick={() => weather.fetchData()} value='search' />
    < Card />
    </>
  )
}

export default App
