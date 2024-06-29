import { deleteRequest, postRequest, putRequest } from '@/lib/apiHelper';
import { useMutation } from '@tanstack/react-query';

export const useCreatePemakaian = () => {
  return useMutation({
    mutationFn: (formData) => postRequest({ url: '/pemakaian-logistik/create', data: formData }),
    onSuccess: () => {
      window.location.href = '/logistik/pemakaian';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useUpdatePemakaian = () => {
  return useMutation({
    mutationFn: ({ pemakaianId, formData }) =>
      putRequest({ url: `/pemakaian-logistik/update/${pemakaianId}`, data: formData }),
    onSuccess: () => {
      window.location.href = '/logistik/pemakaian';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useDeletePemakaian = () => {
  return useMutation({
    mutationFn: (pemakaianId) =>
      deleteRequest({ url: `/pemakaian-logistik/delete/${pemakaianId}` }),
    onSuccess: () => {
      alert('Berhasil Dihapus');
      window.location.href = '/logistik/pemakaian';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
