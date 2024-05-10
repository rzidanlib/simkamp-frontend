import MainNavbar from "./Navbar";
import Sidenav from "./Sidenav";

import PropTypes from "prop-types";

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      {/* Sidebar */}
      <Sidenav />

      <div className="xl:ml-[18rem]">
        {/* Navbar */}
        <MainNavbar />

        {/* Content */}
        {children}

        <div className="text-blue-gray-600">{/* Footer */}</div>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};
