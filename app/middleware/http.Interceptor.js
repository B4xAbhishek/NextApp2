import axios from 'axios';
import { Base } from '../constants';
const token = 'XG1KU4bly5rPyHDRGoILn8YjjN4QCCHJO6CDO6R8OMumAlEaAwRMyrNjeK6B';
axios.defaults.baseURL = Base.API_ROOT;

axios.interceptors.request.use(
  async (config) => {
    config.headers.common['Authorization'] = `${'Bearer ' + token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 404) {
      return axios.request(error.response.config);
    } else {
      return Promise.reject(error);
    }
  },
);
