const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json() // return await response.json()

    // Without await, you return a promise that the calling code has to wait for. With await, you return the actual data right after it's ready. 
    // In your case, it doesn't change much because getPosts() is already an async function, and the calling code will wait for it anyway.
}

export default getPosts