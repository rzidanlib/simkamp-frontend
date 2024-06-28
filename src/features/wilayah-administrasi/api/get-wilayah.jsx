import { useQuery } from '@tanstack/react-query';

import API from '@/config/axios-config';
import { env } from '@/config/env';

const wilayahURL = `${env.API_WILAYAH_URL}`;

const handlePublicApiResponse = (response) => {
  if (response.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return response.data;
};

const handleError = (error) => {
  console.error('API request error:', error);
  throw new Error(error.response?.data?.errors || 'An error occurred');
};

const makeApiRequest = async (method, { url, data = {}, params = {}, headers = {} }) => {
  try {
    const response = await API[method](url, method === 'get' ? { params } : data, {
      params,
      headers,
    });
    return handlePublicApiResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const useProvinsi = () => {
  return useQuery({
    queryKey: ['provinsi'],
    queryFn: async () => makeApiRequest('get', { url: `${wilayahURL}/provinces.json` }),
    onError: (error) => {
      console.error(error);
    },
  });
};
