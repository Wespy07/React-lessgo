const getRandomUser = async () => {
    const response = await fetch('https://randomuser.me/api')
    return response.json()
}

export default getRandomUser