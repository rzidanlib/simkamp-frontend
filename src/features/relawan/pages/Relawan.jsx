import { useState } from 'react';
import { ContentLayout } from '@/components/Layout';
import { MenuActions, Table } from '@/components/Elements/Table';
import { CardTable } from '../components';

import { data } from '@/data/data-example';
import PropTypes from 'prop-types';
import { Chip, getStatusColor } from '@/components/Elements/Chip';

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
          data={data.relawan.TABLE_ROWS}
          columns={[
            { title: 'Nama Relawan', field: 'relawan_nama' },
            { title: 'Usia', field: 'relawan_usia' },
            { title: 'Kabupaten/Kota', field: 'relawan_kab_kota' },
            {
              title: 'Status',
              field: 'relawan_status',
              Cell({ entry: { relawan_status } }) {
                return (
                  <Chip
                    variant="ghost"
                    size="sm"
                    color={getStatusColor(relawan_status)}
                    value={relawan_status}
                  />
                );
              },
            },
            {
              title: 'Aksi',
              field: 'relawan_kode',
              Cell({ entry: { relawan_kode } }) {
                return (
                  <MenuActions
                    detailPath={`/relawan/detail/${relawan_kode}`}
                    onDelete={handleDelete}
                  />
                );
              },
            },
          ]}
        />
      </CardTable>

      {/* <ModalFilter openModal={openModal} handleOpenModal={handleOpenModal} /> */}
    </ContentLayout>
  );
};

Relawan.propTypes = {
  title: PropTypes.string,
  entry: PropTypes.object,
};
