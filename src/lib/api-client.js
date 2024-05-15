import { env } from '@/config/env';
import axios from 'axios';

export const API = axios.create({
  baseURL: env.API_URL,
  timeout: 5000,
  headers: {
    Authorization: 'Bearer Token',
  },
});

export const wilayahAPI = axios.create({
  baseURL: env.API_WILAYAH_URL,
});
