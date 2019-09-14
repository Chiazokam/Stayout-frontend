import axios from 'axios';

let token = '';

const http = () => {
  if (typeof localStorage !== 'undefined') {
    token = localStorage.getItem('jwtToken');
  }
  const axiosInstance = axios.create({
    baseURL: `${process.env.API_BASE_URL}`,
    headers: {
      Authorization: `Bearer ${token}`,
      accept: 'application/json',
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const unauthorizedRequestInterceptor = (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      // Router.push('/signin');
    }
    return Promise.reject(error);
  };

  axiosInstance.interceptors.response.use(
    response => response,
    unauthorizedRequestInterceptor
  );

  return axiosInstance;
};

export default http;
