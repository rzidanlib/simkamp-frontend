import { useState } from 'react';
import { ContentLayout } from '@/components/Layout';
import { Table } from '@/components/Elements/Table';
import { CardTable, ModalFilter } from '../components';

import { data } from '@/data/data-example';

const TABLE_HEAD = ['nama relawan', 'usia', 'kabupaten/kota', 'status'];
const dataRelawan = data.relawan.TABLE_ROWS;
const TABLE_ROWS = dataRelawan.map((data) => {
  return {
    kode: data.relawan_kode,
    'nama relawan': data.relawan_nama,
    usia: data.relawan_usia,
    'kabupaten/kota': data.relawan_kab_kota,
    status: data.relawan_status,
  };
});

export const Relawan = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(!openModal);

  const handleDelete = () => {
    alert('delete');
  };

  return (
    <ContentLayout title={'Relawan'}>
      <CardTable handleModal={handleOpenModal}>
        <Table
          TABLE_HEAD={TABLE_HEAD}
          TABLE_ROWS={TABLE_ROWS}
          actions={{
            onDelete: handleDelete,
            detailPath: '/relawan/detail',
            editPath: '/relawan/edit',
          }}
        />
      </CardTable>

      <ModalFilter openModal={openModal} handleOpenModal={handleOpenModal} />
    </ContentLayout>
  );
};
