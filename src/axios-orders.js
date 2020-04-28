import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-7a8c4.firebaseio.com/'
})

export default instance;