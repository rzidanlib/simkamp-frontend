import {
  ArchiveBoxIcon,
  ArrowsRightLeftIcon,
  HomeIcon,
  UserGroupIcon,
  UserIcon,
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
        id: 3,
        title: 'User',
        icon: UserIcon,
        path: './manage-users/users',
      },
      {
        id: 4,
        title: 'Role User',
        icon: UsersIcon,
        path: './manage-users/roles',
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
