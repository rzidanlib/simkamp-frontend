import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export const Head = ({ title = "", description = "" }) => {
  return (
    <Helmet
      title={title ? `${title} | SIMKAMP` : undefined}
      defaultTitle="SIMKAMP"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
