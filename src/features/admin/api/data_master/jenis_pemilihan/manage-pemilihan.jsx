import { postRequest, putRequest, deleteRequest } from '@/lib/apiHelper';
import { useMutation } from '@tanstack/react-query';

export const useCreatePemilihan = () => {
  return useMutation({
    mutationFn: (data) =>
      postRequest({
        url: '/jenis-pemilihan/create',
        data,
      }),
    onSuccess: () => {
      window.location.href = '/data-master/jenis-pemilihan';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useUpdatePemilihan = () => {
  return useMutation({
    mutationFn: ({ jenisPemilihanId, data }) =>
      putRequest({
        url: `/jenis-pemilihan/update/${jenisPemilihanId}`,
        data,
      }),
    onSuccess: () => {
      window.location.href = '/data-master/jenis-pemilihan';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useDeletePemilihan = () => {
  return useMutation({
    mutationFn: (jenisPemilihanId) =>
      deleteRequest({ url: `/jenis-pemilihan/delete/${jenisPemilihanId}` }),
    onSuccess: () => {
      alert('Berhasil Dihapus');
      window.location.href = '/data-master/jenis-pemilihan';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
