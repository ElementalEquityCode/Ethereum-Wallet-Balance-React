import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Button, Chip, Divider, IconButton, Link, Toolbar } from '@material-ui/core';
import MenuIcon from '../icons/Menu';
import Logo from './Logo';

const MainNavbar = (props) => {
  const { onSidebarMobileOpen } = props;

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.secondary'
      }}
    >
      <Toolbar sx={{ minHeight: 64 }}>
        <IconButton
          color="inherit"
          onClick={onSidebarMobileOpen}
          sx={{
            display: {
              md: 'none'
            }
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <RouterLink to="/">
          <Logo
            sx={{
              display: {
                md: 'inline',
                xs: 'none'
              },
              height: 40,
              width: 40
            }}
          />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            alignItems: 'center',
            display: {
              md: 'flex',
              xs: 'none'
            }
          }}
        >
          <Link
            color="textSecondary"
            component={RouterLink}
            to="/browse"
            underline="none"
            variant="body1"
          >
            Browse Components
          </Link>
          <Chip
            color="primary"
            label="NEW"
            size="small"
            sx={{
              maxHeight: 20,
              ml: 1,
              mr: 2
            }}
          />
          <Link
            color="textSecondary"
            component={RouterLink}
            to="/docs"
            underline="none"
            variant="body1"
          >
            Documentation
          </Link>
          <Divider
            orientation="vertical"
            sx={{
              height: 32,
              mx: 2
            }}
          />
          <Button
            color="primary"
            component="a"
            href="https://material-ui.com/store/items/devias-kit-pro"
            size="small"
            target="_blank"
            variant="contained"
          >
            Get the kit
          </Button>
        </Box>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

MainNavbar.propTypes = {
  onSidebarMobileOpen: PropTypes.func
};

export default MainNavbar;
