import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '../../icons/Menu';
import Logo from '../Logo';

const DocsNavbar = ({ onSidebarMobileOpen }) => (
  <AppBar
    sx={{
      backgroundColor: 'background.paper',
      color: 'text.primary',
      boxShadow: 'none',
      borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      zIndex: (theme) => theme.zIndex.drawer + 100
    }}
  >
    <Toolbar sx={{ height: 64 }}>
      <IconButton
        color="inherit"
        onClick={onSidebarMobileOpen}
        sx={{
          display: {
            lg: 'none'
          }
        }}
      >
        <MenuIcon fontSize="small" />
      </IconButton>
      <RouterLink to="/">
        <Logo
          sx={{
            height: 40,
            width: 40,
            display: {
              lg: 'inline',
              xs: 'none'
            }
          }}
        />
      </RouterLink>
    </Toolbar>
  </AppBar>
);

DocsNavbar.propTypes = {
  onSidebarMobileOpen: PropTypes.func
};

export default DocsNavbar;
