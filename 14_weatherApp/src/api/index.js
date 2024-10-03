
const fetchWeatherData = async (city) => {
    const response = await fetch(`https://api.shecodes.io/weather/v1/current?query=${city}&key=b03a640e5ef6980o4da35b006t5f2942`)
    return await response.json()
}


export default fetchWeatherData