import {
  ArchiveBoxIcon,
  ArrowsRightLeftIcon,
  HomeIcon,
  SwatchIcon,
  UserGroupIcon,
  UserIcon,
  UserPlusIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';

export const navigations = [
  {
    id: 1,
    title: 'Dashboard',
    path: './dashboard',
    icon: HomeIcon,
  },
  {
    id: 2,
    icon: UserGroupIcon,
    title: 'Manage Users',
    path: null,
    subNav: [
      {
        id: 21,
        title: 'User',
        icon: UsersIcon,
        path: './manage-users/users',
      },
      {
        id: 22,
        title: 'Role User',
        icon: UserPlusIcon,
        path: './manage-users/roles',
      },
    ],
  },
  {
    id: 3,
    icon: SwatchIcon,
    title: 'Data Master Pemilu',
    path: null,
    subNav: [
      {
        id: 31,
        title: 'Partai Politik',
        icon: UserIcon,
        path: './data-master/partai',
      },
      {
        id: 32,
        title: 'Jenis Pemilihan',
        icon: UsersIcon,
        path: './data-master/pemilu',
      },
      {
        id: 33,
        title: 'Calon Tetap',
        icon: UsersIcon,
        path: './data-master/calon-tetap',
      },
    ],
  },
  // {
  //   id: 3,
  //   title: 'Relawan',
  //   icon: UserIcon,
  //   path: './relawan',
  // },
  // {
  //   id: 4,
  //   title: 'Calon Pemilih',
  //   path: './calon-pemilih',
  //   icon: UsersIcon,
  // },
  // {
  //   id: 2,
  //   title: 'Arus Kas',
  //   path: './aruskas',
  //   icon: ArrowsRightLeftIcon,
  // },
  // {
  //   id: 5,
  //   title: 'Logistik',
  //   path: './logistik',
  //   icon: ArchiveBoxIcon,
  // },
];
