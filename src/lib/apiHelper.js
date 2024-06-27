import API from '@/config/axios-config';

const handleApiResponse = (response) => {
  if (response.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return response.data.data;
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
    return handleApiResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const getRequest = async (options) => makeApiRequest('get', options);

export const postRequest = async (options) => makeApiRequest('post', options);

export const patchRequest = async (options) => makeApiRequest('patch', options);

export const putRequest = async (options) => makeApiRequest('put', options);

export const deleteRequest = async (options) => makeApiRequest('delete', options);

export const postFormDataRequest = async (options) =>
  makeApiRequest('post', {
    ...options,
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const patchFormDataRequest = async (options) =>
  makeApiRequest('patch', {
    ...options,
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const putFormDataRequest = async (options) =>
  makeApiRequest('put', {
    ...options,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
