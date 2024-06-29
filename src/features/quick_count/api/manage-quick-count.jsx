import { deleteRequest, postFormDataRequest, putFormDataRequest } from '@/lib/apiHelper';
import { useMutation } from '@tanstack/react-query';

export const useCreateQuickCount = () => {
  return useMutation({
    mutationFn: (formData) => postFormDataRequest({ url: '/quick-count/create', data: formData }),
    onSuccess: () => {
      window.location.href = '/quick-count';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useUpdateQuickCount = () => {
  return useMutation({
    mutationFn: ({ quickCountId, formData }) =>
      putFormDataRequest({ url: `/quick-count/update/${quickCountId}`, data: formData }),
    onSuccess: () => {
      window.location.href = '/quick-count';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useDeleteQuickCount = () => {
  return useMutation({
    mutationFn: (quickCountId) => deleteRequest({ url: `/quick-count/delete/${quickCountId}` }),
    onSuccess: () => {
      alert('Berhasil Dihapus');
      window.location.href = '/quick-count';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
