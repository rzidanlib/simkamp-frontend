import {
  HomeIcon,
  SwatchIcon,
  UserGroupIcon,
  UserIcon,
  UserPlusIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';

const userRoles = {
  all: ['admin-partai', 'administrator', 'kandidat', 'relawan'],
  userSimkamp: ['admin-partai', 'kandidat', 'relawan'],
  admin: ['admin-partai', 'administrator'],
  adminSistem: ['administrator'],
  adminPartai: ['admin-partai'],
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
    path: './manage-users/users',
    roles: userRoles.adminSistem,
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
        icon: UserPlusIcon,
        path: './data-master/roles',
      },
      {
        id: 32,
        title: 'Partai Politik',
        icon: UserIcon,
        path: './data-master/partai',
      },
      {
        id: 33,
        title: 'Jenis Pemilihan',
        icon: UsersIcon,
        path: './data-master/jenis-pemilihan',
      },
      {
        id: 34,
        title: 'Posisi Calon Tetap',
        icon: UsersIcon,
        path: './data-master/posisi-calon',
      },
      {
        id: 35,
        title: 'Daerah Pemilihan',
        icon: UsersIcon,
        path: './data-master/dapil',
      },
      {
        id: 36,
        title: 'Agama',
        icon: UsersIcon,
        path: './data-master/agama',
      },
    ],
  },
  {
    id: 4,
    icon: UserGroupIcon,
    title: 'Kandidat',
    path: './kandidat',
    roles: userRoles.adminPartai,
  },
  {
    id: 5,
    icon: UserGroupIcon,
    title: 'Relawan',
    path: './relawn',
    roles: userRoles.userSimkamp,
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
