import API from '@/config/axios-config';
import { useMutation } from '@tanstack/react-query';

export const fetchCreatePartai = async (data) => {
  const formData = new FormData();
  formData.append('partai', data.partai);
  formData.append('partai_name', data.partai_name);
  formData.append('logo_partai', data.logo_partai);

  try {
    const response = await API.post('/partai/create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.errors);
  }
};

export const useCreatePartai = () => {
  return useMutation({
    mutationFn: fetchCreatePartai,
    onSuccess: () => {
      window.location.href = '/data-master/partai';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
