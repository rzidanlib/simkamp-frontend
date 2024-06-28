import { deleteRequest } from '@/lib/apiHelper';
import { useMutation } from '@tanstack/react-query';

export const useDeleteRole = () => {
  return useMutation({
    mutationFn: (roleId) => deleteRequest({ url: `/roles/delete/${roleId}` }),
    onSuccess: () => {
      alert('Berhasil Dihapus');
      window.location.href = '/data-master/roles';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
