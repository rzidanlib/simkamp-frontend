import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { setOpenSidenav, useLayoutContoller } from "@/context/LayoutContext";

import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";

import {
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { navigations } from "@/data/navigations";

const Sidenav = () => {
  const [controller, dispatch] = useLayoutContoller();
  const { openSidenav } = controller;
  const [open, setOpen] = useState(0);

  const activeNav = {
    active:
      "text-white bg-gradient-to-tr from-gray-900 to-gray-800 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 hover:text-white active:opacity-[0.85] focus:text-white",
  };

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <aside
      className={`${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } bg-white shadow-sm fixed inset-0 z-50 h-screen w-72 transition-transform duration-300 xl:translate-x-0 border-r border-blue-gray-100`}
    >
      <div className={`relative`}>
        <Link to="/" className="py-6 px-8 text-center">
          <Typography variant="h6" color="blue-gray">
            SIMKAMP
          </Typography>
        </Link>
        <IconButton
          variant="text"
          color="blue-gray"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-none rounded-bl-xl xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-black" />
        </IconButton>
      </div>

      <List>
        {navigations.map((item) => (
          <nav key={item.id}>
            {item.subNav ? (
              <Accordion
                open={open === item.id}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === item.id ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === item.id}>
                  <AccordionHeader
                    onClick={() => handleOpen(item.id)}
                    className="border-b-0 p-3 "
                  >
                    <ListItemPrefix>
                      <item.icon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      // color="blue-gray"
                      className="mr-auto font-normal leading-tight"
                    >
                      {item.title}
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    {item.subNav.map((subItem) => (
                      <NavLink key={subItem.id} to={subItem.path}>
                        {({ isActive }) => (
                          <ListItem
                            className={`${
                              isActive ? activeNav.active : ""
                            } ml-auto w-[90%]`}
                          >
                            <ListItemPrefix>
                              <subItem.icon className="h-5 w-5" />
                            </ListItemPrefix>
                            {subItem.title}
                          </ListItem>
                        )}
                      </NavLink>
                    ))}
                  </List>
                </AccordionBody>
              </Accordion>
            ) : (
              <NavLink to={item.path}>
                {({ isActive }) => (
                  <ListItem className={`${isActive ? activeNav.active : ""}`}>
                    <ListItemPrefix>
                      <item.icon className="h-5 w-5" />
                    </ListItemPrefix>
                    {item.title}
                    {item.count && (
                      <ListItemSuffix>
                        <Chip
                          value={item.count.toString()}
                          size="sm"
                          variant="ghost"
                          color="blue-gray"
                          className="rounded-full"
                        />
                      </ListItemSuffix>
                    )}
                  </ListItem>
                )}
              </NavLink>
            )}
          </nav>
        ))}
      </List>
    </aside>
  );
};

export default Sidenav;
