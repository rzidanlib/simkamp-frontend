export const data = {
  dashboard: {
    profile: {
      nama_kandidat: 'Anies Baswedan',
      no_urut: '01',
      partai: {
        nama_partai: 'nasdem',
        warna_partai: 'blue',
        deskripsi_partai: 'Nasional Demokrat',
      },
      foto: '/images/anies.jpg',
      usia: 54,
      jenis_kelamin: 'Laki-laki',
      agama: 'Islam',
      tempat_tgl_lahir: 'Kuningan, 7 Mei 1969',
      alamat:
        'Jl. Pahlawan No. 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, assumenda.',
      dapil: 'Jawa Barat 1',
      jenis_pemilu: 'Pilkada',
      no_telp: '081234567890',
      status: 'Calon Presiden Indonesia',
    },
    hitung_mundur: {
      tanggal: '27 November 2024',
      countdown: [
        { waktu: 4, penanggalan: 'Bulan' },
        { waktu: 3, penanggalan: 'Hari' },
        { waktu: 21, penanggalan: 'Jam' },
        { waktu: 50, penanggalan: 'Menit' },
        { waktu: 20, penanggalan: 'Detik' },
      ],
    },
    members: [
      {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
        name: 'John Michael',
        date: '23/04/18',
      },
      {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
        name: 'Alexa Liras',
        date: '23/04/18',
      },
      {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg',
        name: 'Laurent Perrier',
        date: '19/09/17',
      },
      {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg',
        name: 'Michael Levi',
        date: '24/12/08',
      },
      {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg',
        name: 'Richard Gran',
        date: '04/10/21',
      },
    ],
  },
  relawan: {
    TABLE_ROWS: [
      {
        id: '123456789',
        relawan_kode: 'relawan123',
        relawan_nama: 'Rendy Pratama',
        relawan_email: 'rendy@creative-tim.com',
        relawan_password: 'password123',
        relawan_no_telp: '081234567890',
        relawan_usia: '20',
        relawan_jenis_kelamin: 'laki-laki',
        relawan_foto:
          'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
        relawan_kandidat_kode: 'aniesbaswedan',
        relawan_provinsi: '11',
        relawan_kab_kota: '11.01',
        relawan_kecamatan_desa: '11.01.01',
        relawan_status: 'Aktif',
      },
      {
        id: '0987654321',
        relawan_kode: 'relawan321',
        relawan_nama: 'Megawati',
        relawan_email: 'mega@creative-tim.com',
        relawan_password: 'password123',
        relawan_no_telp: '081234567890',
        relawan_usia: '20',
        relawan_jenis_kelamin: 'perempuan',
        relawan_foto:
          'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
        relawan_kandidat_kode: 'aniesbaswedan',
        relawan_provinsi: '11',
        relawan_kab_kota: '11.02',
        relawan_kecamatan_desa: '11.02.01',
        relawan_status: 'Tidak Aktif',
      },
    ],
  },
  calon_pemilih: [
    {
      calon_pemilih_id: '123456789',
      calon_pemilih_kode: 'calonpemilih123',
      calon_pemilih_nama: 'Rusman',
      calon_pemilih_nohp: '081234567890',
      calon_pemilih_foto: '/images/anies.jpg',
      calon_pemilih_foto_ktp: '/images/ktp.jpeg',
      calon_pemilih_provinsi: '11',
      calon_pemilih_kab_kota: '11.01',
      calon_pemilih_kecamatan_desa: '11.01.01',
      calon_pemilih_relawan_kode: 'relawan321',
      calon_pemilih_status: 'Tidak Memilih',
    },
    {
      calon_pemilih_id: '0987654321',
      calon_pemilih_kode: 'calonpemilih321',
      calon_pemilih_nama: 'Haryanto',
      calon_pemilih_nohp: '081234567890',
      calon_pemilih_foto: '/images/anies.jpg',
      calon_pemilih_foto_ktp: '/images/ktp.jpeg',
      calon_pemilih_provinsi: '11',
      calon_pemilih_kab_kota: '11.02',
      calon_pemilih_kecamatan_desa: '11.02.03',
      calon_pemilih_relawan_kode: 'relawan123',
      calon_pemilih_status: 'Memilih',
    },
  ],
};
