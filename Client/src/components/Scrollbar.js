import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Box } from '@material-ui/core';

const Scrollbar = forwardRef((props, ref) => {
  const { children, ...other } = props;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    return (
      <Box
        ref={ref}
        sx={{ overflowX: 'auto' }}
      >
        {children}
      </Box>
    );
  }

  return (
    <PerfectScrollbar
      ref={ref}
      {...other}
    >
      {children}
    </PerfectScrollbar>
  );
});

Scrollbar.propTypes = {
  children: PropTypes.node
};

export default Scrollbar;
