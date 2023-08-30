const Layout = ({ children, weather, error }) => {
  const containerClassName = `container ${weather ? 'weather-active' : ''} ${
    error ? 'weather-error' : ''
  }`;

  const containerStyle = {
    height: error || weather ? '590px' : '105px',
  };

  return (
    <div className={containerClassName} style={containerStyle}>
      {children}
    </div>
  );
};

export default Layout;
