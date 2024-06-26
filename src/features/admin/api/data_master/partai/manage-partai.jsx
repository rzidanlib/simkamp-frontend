import { deleteRequest, postFormDataRequest, putFormDataRequest } from '@/lib/apiHelper';
import { useMutation } from '@tanstack/react-query';

export const useCreatePartai = () => {
  return useMutation({
    mutationFn: (formData) => postFormDataRequest({ url: '/partai/create', data: formData }),
    onSuccess: () => {
      window.location.href = '/data-master/partai';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useUpdatePartai = () => {
  return useMutation({
    mutationFn: ({ partaiId, formData }) =>
      putFormDataRequest({ url: `/partai/update/${partaiId}`, data: formData }),
    onSuccess: () => {
      window.location.href = '/data-master/partai';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useDeletePartai = () => {
  return useMutation({
    mutationFn: (partaiId) => deleteRequest({ url: `/partai/delete/${partaiId}` }),
    onSuccess: () => {
      alert('Berhasil Dihapus');
      window.location.href = '/data-master/partai';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
