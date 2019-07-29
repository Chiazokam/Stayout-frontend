import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://forsetti-ah-backend-staging.herokuapp.com/api/v1',
});


export default axiosInstance;
