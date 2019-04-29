import axios from 'axios'

const axiosInstance = axios.create({
        baseURL:'https://buy-burger-app.firebaseio.com/'
    });

export default axiosInstance