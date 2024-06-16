import axios from 'axios';
import { env } from '@/config/env';
import localStorageHandler from '@/utils/localStorage';

export const baseURL = `${env.API_URL}`;

const API = axios.create({});

API.defaults.timeout = 120000; // 2 minutes;
API.interceptors.request.use(
  async function (config) {
    const token = await localStorageHandler.getItem('accessToken');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
      config.headers['Access-Control-Allow-Credentials'] = true;
    }
    config.headers['Content-Type'] = 'application/json';
    config.credentials = 'same-origin';
    config.baseURL = baseURL;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error?.response?.status === 403) {
      // Handle forbidden error (e.g., show a message to the user)
      // alert('You do not have permission to perform this action.');
      // You can also log the error or redirect the user to a different page
      console.error('403 Forbidden error', error.response);
    }
    if (error?.response?.status === 401) {
      // Handle unauthorized error (e.g., log out the user)
      // alert('Session expired. Please log in again.');
      // Perform logout logic (e.g., remove token, redirect to login page)
      localStorage.removeItem('accessToken'); // Remove token from storage
      window.location.href = '/auth/login'; // Redirect to login page
    }
    throw error; // Propagate the error
  }
);

export default API;
