import axios from 'axios';


const instance = axios.create({
    baseURL:"https://react-subway.firebaseio.com/"
});

export default instance;