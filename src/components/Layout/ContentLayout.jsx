import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Typography, Breadcrumbs } from '@material-tailwind/react';
import { Head } from '../Head';
import { useLocation } from 'react-router-dom';

export const ContentLayout = ({ children, title }) => {
  return (
    <>
      <Head title={title} />

      <main className="p-8">
        <div className="capitalize">
          {/* <Breadcrumbs className={`bg-transparent p-0 transition-all `}>{breadcrumb}</Breadcrumbs> */}

          <Typography variant="h2" color="blue-gray" className="uppercase">
            {title}
          </Typography>
        </div>

        {children}
      </main>
    </>
  );
};

ContentLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
