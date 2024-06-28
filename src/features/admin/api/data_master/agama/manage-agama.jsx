import { postRequest, putRequest, deleteRequest } from '@/lib/apiHelper';
import { useMutation } from '@tanstack/react-query';

export const useCreateAgama = () => {
  return useMutation({
    mutationFn: (data) =>
      postRequest({
        url: '/agama/create',
        data,
      }),
    onSuccess: () => {
      window.location.href = '/data-master/agama';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useUpdateAgama = () => {
  return useMutation({
    mutationFn: ({ agamaId, data }) =>
      putRequest({
        url: `/agama/update/${agamaId}`,
        data,
      }),
    onSuccess: () => {
      window.location.href = '/data-master/agama';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useDeleteAgama = () => {
  return useMutation({
    mutationFn: (agamaId) => deleteRequest({ url: `/agama/delete/${agamaId}` }),
    onSuccess: () => {
      alert('Berhasil Dihapus');
      window.location.href = '/data-master/agama';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
