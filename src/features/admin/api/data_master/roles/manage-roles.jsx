import { postRequest, putRequest } from '@/lib/apiHelper';
import { useMutation } from '@tanstack/react-query';

export const useCreateRole = () => {
  return useMutation({
    mutationFn: (data) =>
      postRequest({
        url: '/roles/create',
        data,
      }),
    onSuccess: () => {
      window.location.href = '/data-master/roles';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};

export const useUpdateRole = () => {
  return useMutation({
    mutationFn: ({ roleId, data }) =>
      putRequest({
        url: `/roles/update/${roleId}`,
        data,
      }),
    onSuccess: () => {
      window.location.href = '/data-master/roles';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
