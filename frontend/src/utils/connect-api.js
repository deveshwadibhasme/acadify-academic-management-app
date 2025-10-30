const LOCAL_URL = 'http://localhost:3001';
const PROD_URL = '';

const BACKEND_URL = window.location.hostname === 'localhost' ? LOCAL_URL : PROD_URL;

export default BACKEND_URL;
