import * as React from "react";

import { LayoutControllerProvider } from "@/context/LayoutContext";
import { ThemeProvider } from "@material-tailwind/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";

import { LoadingSpinner } from "@/components/Elements/Spinner";

import PropTypes from "prop-types";

export const AppProvider = ({ children }) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <LoadingSpinner size="xl" />
        </div>
      }
    >
      <HelmetProvider>
        <ThemeProvider>
          <LayoutControllerProvider>
            <Router>{children}</Router>
          </LayoutControllerProvider>
        </ThemeProvider>
      </HelmetProvider>
    </React.Suspense>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};
