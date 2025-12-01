export default function getURL(endpoint) {
    const LOCAL_URL = 'http://localhost:3001'
    const PUBLIC_URL = 'https://acadify.onrender.com'

    return location.hostname === 'localhost' ? LOCAL_URL + endpoint : PUBLIC_URL + endpoint
}