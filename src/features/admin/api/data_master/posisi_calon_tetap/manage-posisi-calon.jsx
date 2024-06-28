import { postRequest, putRequest, deleteRequest } from '@/lib/apiHelper';
import { useMutation } from '@tanstack/react-query';

export const useCreatePosisiCalon = () => {
  return useMutation({
    mutationFn: (data) =>
      postRequest({
        url: '/posisi-calon-tetap/create',
        data,
      }),
    onSuccess: () => {
      window.location.href = '/data-master/posisi-calon';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useUpdatePosisiCalon = () => {
  return useMutation({
    mutationFn: ({ posisiCalonId, data }) =>
      putRequest({
        url: `/posisi-calon-tetap/update/${posisiCalonId}`,
        data,
      }),
    onSuccess: () => {
      window.location.href = '/data-master/posisi-calon';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useDeletePosisiCalon = () => {
  return useMutation({
    mutationFn: (posisiCalonId) =>
      deleteRequest({ url: `/posisi-calon-tetap/delete/${posisiCalonId}` }),
    onSuccess: () => {
      alert('Berhasil Dihapus');
      window.location.href = '/data-master/posisi-calon';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
