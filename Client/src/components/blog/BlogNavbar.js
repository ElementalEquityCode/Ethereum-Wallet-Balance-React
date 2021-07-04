import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Divider, Link, Toolbar } from '@material-ui/core';
import Logo from '../Logo';

const BlogNavbar = (props) => (
  <AppBar
    elevation={0}
    sx={{ backgroundColor: 'background.paper' }}
    {...props}
  >
    <Toolbar sx={{ minHeight: 64 }}>
      <RouterLink to="/">
        <Logo
          sx={{
            height: 40,
            width: 40
          }}
        />
      </RouterLink>
      <Box sx={{ flexGrow: 1 }} />
      <Link
        color="textSecondary"
        component={RouterLink}
        to="/"
        underline="none"
        variant="body1"
      >
        Home
      </Link>
      <Link
        color="textPrimary"
        component={RouterLink}
        to="/blog"
        underline="none"
        sx={{ mx: 2 }}
        variant="body1"
      >
        Blog
      </Link>
      <Link
        color="textSecondary"
        component={RouterLink}
        to="/contact"
        underline="none"
        variant="body1"
      >
        Contact Us
      </Link>
    </Toolbar>
    <Divider />
  </AppBar>
);

export default BlogNavbar;
