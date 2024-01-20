import axios from 'axios';

import { env } from '@/env';

export const baseApi = axios.create({
  baseURL: env('VITE_APP_API_HOST'),
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});
