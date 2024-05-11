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
    id: 3,
    title: 'Relawan',
    icon: UserIcon,
    path: './relawan',
  },
  {
    id: 4,
    title: 'Calon Pemilih',
    path: './calon-pemilih',
    icon: UsersIcon,
  },
  {
    id: 2,
    title: 'Arus Kas',
    path: './aruskas',
    icon: ArrowsRightLeftIcon,
  },
  // {
  //   id: 3,
  //   icon: UserGroupIcon,
  //   title: "Pendukung",
  //   subNav: [
  //     {
  //       id: 31,
  //       title: "Relawan",
  //       icon: UserIcon,
  //       path: "./relawan",
  //     },
  //     {
  //       id: 32,
  //       title: "Calon Pemilih",
  //       icon: UsersIcon,
  //       path: "./calon-pemilih",
  //     },
  //   ],
  // },
  {
    id: 5,
    title: 'Logistik',
    path: './logistik',
    icon: ArchiveBoxIcon,
  },
];
