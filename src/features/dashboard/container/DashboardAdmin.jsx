import { UsersIcon } from '@heroicons/react/24/solid';
import { CardStatistik, TableMembers, TableUsers } from '../components';
import { useDashboardAdmin } from '../api/get-dashboard-admin';

export const DashboardAdmin = () => {
  const { data, isLoading } = useDashboardAdmin();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <CardStatistik
          title="Total Users Admin Partai"
          color="red"
          icon={<UsersIcon width={24} />}
          value={{
            currentvalue: data.totalUsers?.currentvalue,
            newvalue: data.totalUsers?.currentvalue === 0 ? 'Kosong' : 'Users Baru',
          }}
          prefix="+"
          loading={isLoading}
        />
        <CardStatistik
          title="Total Users Kandidat"
          color="yellow"
          icon={<UsersIcon width={24} color="white" />}
          value={{
            currentvalue: data.totalKandidat?.currentvalue,
            newvalue: data.totalKandidat?.currentvalue === 0 ? 'Kosong' : 'Users Kandidat Baru',
          }}
          prefix="+"
          loading={isLoading}
        />
        <CardStatistik
          title="Total Users Relawan"
          color="green"
          icon={<UsersIcon width={24} />}
          value={{
            currentvalue: data.totalRelawan?.currentvalue,
            newvalue: data.totalRelawan?.currentvalue === 0 ? 'Kosong' : 'Users Relawan Baru',
          }}
          prefix="+"
          loading={isLoading}
        />
      </div>

      <div className="grid grid-rows-2 gap-6 mb-6">
        <TableUsers
          TABLE_ROW={data.users}
          TABLE_HEAD={['Nama User', 'Email User', 'Partai']}
          title="Data Users"
          loading={isLoading}
          icon={<UsersIcon width={24} />}
          color="red"
        />

        <div className="grid grid-cols-2 gap-6 mb-6">
          <TableMembers
            TABLE_ROW={data.kandidat}
            TABLE_HEAD={['Nama Kandidat', 'Jenis Pemilihan']}
            title="Data Kandidat"
            loading={isLoading}
            icon={<UsersIcon width={24} />}
            color="yellow"
          />
          <TableMembers
            TABLE_ROW={data.relawan}
            TABLE_HEAD={['Nama Relawan', 'Status Anggota']}
            title="Data Relawan"
            loading={isLoading}
            icon={<UsersIcon width={24} />}
            color="green"
          />
        </div>
      </div>
    </>
  );
};
