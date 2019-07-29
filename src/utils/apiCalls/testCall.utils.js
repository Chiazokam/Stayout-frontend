import axios from '../../config/axiosConfig';

const apiCall = data => axios
  .get('/article?page=1', data)
  .then(response => response.data)
  .catch(error => error.response);

export default apiCall;
