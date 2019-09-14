import http from '../../config/http';

const apiCall = async (data) => {
  try {
    const response = await http().post('/auth/signup', data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default apiCall;
