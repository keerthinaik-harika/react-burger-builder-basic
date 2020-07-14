import axios from 'axios'

const instance = axios.create({
   baseURL: 'https://react-burger-builder-546da.firebaseio.com/'
});

export default instance;