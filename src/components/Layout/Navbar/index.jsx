import localStorageHandler from '@/utils/localStorage';

import { setOpenSidenav, useLayoutContoller } from '@/context/LayoutContext';
import { useLogout } from '@/features/auth/api/auth';
import { ArrowLeftEndOnRectangleIcon, Bars3Icon, UserIcon } from '@heroicons/react/24/outline';
import {
  MenuHandler,
  MenuItem,
  MenuList,
  Menu,
  IconButton,
  Typography,
  Navbar,
  Avatar,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  const [controller, dispatch] = useLayoutContoller();
  const { openSidenav } = controller;
  const user = localStorageHandler.getItem('currentUser');
  const logout = useLogout();

  const handleLogout = async () => {
    await logout.mutate();
  };

  return (
    <Navbar
      color="transparent"
      className="sticky top-0 z-10 h-max max-w-full bg-white transition-all shadow-sm border-b border-blue-gray-100"
      fullWidth
    >
      <div className=" flex xl:justify-end gap-6 items-center md:justify-between">
        <IconButton
          variant="text"
          color="blue-gray"
          className="grid xl:hidden"
          onClick={() => setOpenSidenav(dispatch, !openSidenav)}
        >
          <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
        </IconButton>

        <div className="flex items-center ml-auto">
          {!user ? (
            <Typography>Loading...</Typography>
          ) : (
            <div className="flex flex-col font-bold text-black items-end mr-4">
              <h1 className="text-sm">{user.name}</h1>
              <p className="text-sm text-blue-gray-500 capitalize">{user.role}</p>
            </div>
          )}

          <Menu placement="bottom-end">
            <MenuHandler>
              <Avatar
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
                size="md"
                className="p-0.5 cursor-pointer hover:shadow-lg shadow-blue-gray-400"
                withBorder
              />
            </MenuHandler>
            <MenuList className="w-max border-0 p-2">
              <MenuItem>
                <Link to={'/profile'} className="flex items-center gap-3">
                  <UserIcon className="h-5 w-5" />
                  <Typography>Profile</Typography>
                </Link>
              </MenuItem>
              <MenuItem className="flex items-center gap-3" onClick={handleLogout}>
                <ArrowLeftEndOnRectangleIcon className="h-5 w-5" />
                <Typography>Logout</Typography>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </Navbar>
  );
};

export default MainNavbar;
