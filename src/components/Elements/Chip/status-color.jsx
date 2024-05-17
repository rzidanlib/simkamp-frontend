export const getStatusColor = (status) => {
  switch (status) {
    case 'Aktif':
      return 'green';
    case 'Tidak Aktif':
      return 'red';
    default:
      return '#FFFFFF';
  }
};
