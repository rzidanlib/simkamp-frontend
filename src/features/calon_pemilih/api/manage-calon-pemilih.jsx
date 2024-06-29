import { deleteRequest, postFormDataRequest, putFormDataRequest } from '@/lib/apiHelper';
import { useMutation } from '@tanstack/react-query';

export const useCreatePemilih = () => {
  return useMutation({
    mutationFn: (formData) => postFormDataRequest({ url: '/calon-pemilih/create', data: formData }),
    onSuccess: () => {
      window.location.href = '/calon-pemilih';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useUpdatePemilih = () => {
  return useMutation({
    mutationFn: ({ pemilihId, formData }) =>
      putFormDataRequest({ url: `/calon-pemilih/update/${pemilihId}`, data: formData }),
    onSuccess: () => {
      window.location.href = '/calon-pemilih';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useDeletePemilih = () => {
  return useMutation({
    mutationFn: (pemilihId) => deleteRequest({ url: `/calon-pemilih/delete/${pemilihId}` }),
    onSuccess: () => {
      alert('Berhasil Dihapus');
      window.location.href = '/calon-pemilih';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
