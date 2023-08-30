import PropTypes from 'prop-types';

const Layout = ({ children, weather }) => {
  const containerClassName = `container ${weather ? 'weather-active' : ''}`;
  return <div className={containerClassName}>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  weather: PropTypes.object,
};

export default Layout;
