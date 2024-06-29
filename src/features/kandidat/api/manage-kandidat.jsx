import { deleteRequest, postFormDataRequest, putFormDataRequest } from '@/lib/apiHelper';
import { useMutation } from '@tanstack/react-query';

export const useCreateKandidat = () => {
  return useMutation({
    mutationFn: (formData) => postFormDataRequest({ url: '/kandidat/create', data: formData }),
    onSuccess: () => {
      window.location.href = '/kandidat';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useUpdateKandidat = () => {
  return useMutation({
    mutationFn: ({ kandidatId, formData }) =>
      putFormDataRequest({ url: `/kandidat/update/${kandidatId}`, data: formData }),
    onSuccess: () => {
      window.location.href = '/dashboard';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useDeleteKandidat = () => {
  return useMutation({
    mutationFn: (kandidatId) => deleteRequest({ url: `/kandidat/delete/${kandidatId}` }),
    onSuccess: () => {
      alert('Berhasil Dihapus');
      window.location.href = '/kandidat';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
