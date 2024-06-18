// buatkan fungsi untuk delete role dan gunakan hook useMutation

import API from '@/config/axios-config';
import { useMutation } from '@tanstack/react-query';

export const deleteRole = async (roleId) => {
  try {
    const response = await API.delete(`/roles/remove-role/${roleId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.errors);
  }
};

export const useDeleteRole = () => {
  return useMutation({
    mutationFn: deleteRole,
    onSuccess: (data) => {
      alert(data.message);
      window.location.href = '/manage-users/roles';
    },
    onError: (error) => {
      alert(error.message);
      console.error(error);
    },
  });
};
