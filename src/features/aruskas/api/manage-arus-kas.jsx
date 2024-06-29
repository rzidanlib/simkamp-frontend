import { deleteRequest, postFormDataRequest, putFormDataRequest } from '@/lib/apiHelper';
import { useMutation } from '@tanstack/react-query';

export const useCreateArusKas = () => {
  return useMutation({
    mutationFn: (formData) => postFormDataRequest({ url: '/aruskas/create', data: formData }),
    onSuccess: () => {
      window.location.href = '/aruskas';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useUpdateArusKas = () => {
  return useMutation({
    mutationFn: ({ arusKasId, formData }) =>
      putFormDataRequest({ url: `/aruskas/update/${arusKasId}`, data: formData }),
    onSuccess: () => {
      window.location.href = '/aruskas';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useDeleteArusKas = () => {
  return useMutation({
    mutationFn: (arusKasId) => deleteRequest({ url: `/aruskas/delete/${arusKasId}` }),
    onSuccess: () => {
      alert('Berhasil Dihapus');
      window.location.href = '/aruskas';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
