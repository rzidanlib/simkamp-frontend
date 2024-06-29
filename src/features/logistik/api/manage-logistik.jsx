import { deleteRequest, postRequest, putRequest } from '@/lib/apiHelper';
import { useMutation } from '@tanstack/react-query';

export const useCreateLogistik = () => {
  return useMutation({
    mutationFn: (formData) => postRequest({ url: '/logistik/create', data: formData }),
    onSuccess: () => {
      window.location.href = '/logistik/stok';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useUpdateLogistik = () => {
  return useMutation({
    mutationFn: ({ logistikId, formData }) =>
      putRequest({ url: `/logistik/update/${logistikId}`, data: formData }),
    onSuccess: () => {
      window.location.href = '/logistik/stok';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useDeleteLogistik = () => {
  return useMutation({
    mutationFn: (logistikId) => deleteRequest({ url: `/logistik/delete/${logistikId}` }),
    onSuccess: () => {
      alert('Berhasil Dihapus');
      window.location.href = '/logistik/stok';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
