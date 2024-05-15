import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Typography, Breadcrumbs } from '@material-tailwind/react';
import { Head } from '../Head';
import { useLocation } from 'react-router-dom';

export const ContentLayout = ({ children, title }) => {
  const { pathname } = useLocation();
  const segments = pathname.split('/').slice(1);

  const breadcrumb = segments.map((segment, index) => {
    const isLast = index === segments.length - 1;
    const path = `/${segment}`;

    return (
      <div key={segment}>
        {isLast ? (
          <Typography variant="small" color="blue-gray" className="font-normal">
            {segment}
          </Typography>
        ) : (
          <Link to={path}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
            >
              {segment.replace('-', ' ')}
            </Typography>
          </Link>
        )}
      </div>
    );
  });

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
