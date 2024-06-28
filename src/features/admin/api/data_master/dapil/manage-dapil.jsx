import { postRequest, putRequest, deleteRequest } from '@/lib/apiHelper';
import { useMutation } from '@tanstack/react-query';

export const useCreateDapil = () => {
  return useMutation({
    mutationFn: (data) =>
      postRequest({
        url: '/dapil/create',
        data,
      }),
    onSuccess: () => {
      window.location.href = '/data-master/dapil';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useUpdateDapil = () => {
  return useMutation({
    mutationFn: ({ dapilId, data }) =>
      putRequest({
        url: `/dapil/update/${dapilId}`,
        data,
      }),
    onSuccess: () => {
      window.location.href = '/data-master/dapil';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useDeleteDapil = () => {
  return useMutation({
    mutationFn: (dapilId) => deleteRequest({ url: `/dapil/delete/${dapilId}` }),
    onSuccess: () => {
      alert('Berhasil Dihapus');
      window.location.href = '/data-master/dapil';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
