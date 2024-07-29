import {
  ArchiveBoxIcon,
  ArrowsRightLeftIcon,
  ChevronDoubleRightIcon,
  HomeIcon,
  InboxArrowDownIcon,
  InboxStackIcon,
  NewspaperIcon,
  SwatchIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';

const userRoles = {
  all: ['admin-partai', 'administrator', 'kandidat', 'relawan'],
  admin: ['admin-partai', 'administrator'],
  adminSistem: ['administrator'],
  adminPartai: ['admin-partai'],
  userSimkamp: ['admin-partai', 'kandidat'],
  allUserSimkamp: ['admin-partai', 'kandidat', 'relawan'],
  kandidat: ['kandidat'],
  relawan: ['relawan'],
};

export const navigations = [
  {
    id: 1,
    title: 'Dashboard',
    path: './dashboard',
    icon: HomeIcon,
    roles: userRoles.all,
  },
  {
    id: 2,
    icon: UserGroupIcon,
    title: 'Manage Users',
    roles: userRoles.adminSistem,
    subNav: [
      {
        id: 21,
        title: 'Users Admin',
        icon: UserIcon,
        path: './manage-users/users',
      },
      {
        id: 22,
        title: 'Users Kandidat',
        icon: UserIcon,
        path: './manage-users/kandidat',
      },
      {
        id: 23,
        title: 'Users Relawan',
        icon: UserIcon,
        path: './manage-users/relawan',
      },
    ],
  },
  {
    id: 3,
    icon: SwatchIcon,
    title: 'Data Master',
    roles: userRoles.adminSistem,
    subNav: [
      {
        id: 31,
        title: 'Role User',
        icon: ChevronDoubleRightIcon,
        path: './data-master/roles',
      },
      {
        id: 32,
        title: 'Partai Politik',
        icon: ChevronDoubleRightIcon,
        path: './data-master/partai',
      },
      {
        id: 33,
        title: 'Jenis Pemilihan',
        icon: ChevronDoubleRightIcon,
        path: './data-master/jenis-pemilihan',
      },
      {
        id: 34,
        title: 'Posisi Calon Tetap',
        icon: ChevronDoubleRightIcon,
        path: './data-master/posisi-calon',
      },
      {
        id: 35,
        title: 'Daerah Pemilihan',
        icon: ChevronDoubleRightIcon,
        path: './data-master/dapil',
      },
      {
        id: 36,
        title: 'Agama',
        icon: ChevronDoubleRightIcon,
        path: './data-master/agama',
      },
    ],
  },
  {
    id: 4,
    icon: UserIcon,
    title: 'Kandidat',
    path: './kandidat',
    roles: userRoles.adminPartai,
  },
  {
    id: 5,
    icon: UsersIcon,
    title: 'Relawan',
    path: './relawan',
    roles: userRoles.userSimkamp,
  },
  {
    id: 6,
    icon: UserGroupIcon,
    title: 'Calon Pemilih',
    path: './calon-pemilih',
    roles: userRoles.allUserSimkamp,
  },
  {
    id: 7,
    icon: ArrowsRightLeftIcon,
    title: 'Arus Kas',
    path: './aruskas',
    roles: userRoles.allUserSimkamp,
  },
  {
    id: 8,
    icon: ArchiveBoxIcon,
    title: 'Manage Logistik',
    roles: userRoles.allUserSimkamp,
    subNav: [
      {
        id: 81,
        icon: InboxStackIcon,
        title: 'Logistik Stok',
        path: './logistik/stok',
        roles: userRoles.allUserSimkamp,
      },
      {
        id: 82,
        icon: InboxArrowDownIcon,
        title: 'Pemakaian Logistik',
        path: './logistik/pemakaian',
        roles: userRoles.allUserSimkamp,
      },
    ],
  },
  {
    id: 9,
    icon: NewspaperIcon,
    title: 'Quick Count',
    path: './quick-count',
    roles: userRoles.allUserSimkamp,
  },
];

export const protectedNavigation = (userRole) => {
  const hasAccess = (navRoles) => navRoles.includes(userRole);

  return navigations
    .filter((nav) => hasAccess(nav.roles))
    .map((nav) => {
      if (nav.subNav) {
        const filteredSubNav = nav.subNav.filter(() => hasAccess(nav.roles));
        return { ...nav, subNav: filteredSubNav };
      }
      return nav;
    });
};
