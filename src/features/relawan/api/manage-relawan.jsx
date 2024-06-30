import { deleteRequest, postFormDataRequest, putFormDataRequest } from '@/lib/apiHelper';
import { useMutation } from '@tanstack/react-query';

export const useCreateRelawan = () => {
  return useMutation({
    mutationFn: (formData) => postFormDataRequest({ url: '/relawan/create', data: formData }),
    onSuccess: () => {
      window.location.href = '/relawan';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useUpdateRelawan = () => {
  return useMutation({
    mutationFn: ({ relawanId, formData }) =>
      putFormDataRequest({ url: `/relawan/update/${relawanId}`, data: formData }),
    onSuccess: () => {
      window.location.href = '/dashboard';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useDeleteRelawan = () => {
  return useMutation({
    mutationFn: (relawanId) => deleteRequest({ url: `/relawan/delete/${relawanId}` }),
    onSuccess: () => {
      alert('Berhasil Dihapus');
      window.location.href = '/relawan';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
