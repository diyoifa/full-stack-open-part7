import axios from 'axios'

const baseUrl = 'http://localhost:3003/api/login'

export const login = async credentials => {
    console.log("🚀 ~ file: login.js:6 ~ login ~ credentials:", credentials)
    const response = await axios.post(baseUrl, credentials)
    return response.data
}

