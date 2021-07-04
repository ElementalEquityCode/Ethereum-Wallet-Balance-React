import { Link as RouterLink } from 'react-router-dom';
import { Box, Chip, Container, Link, Tooltip, Typography } from '@material-ui/core';

const platformIcons = {
  Amplify: '/static/icons/amplify.svg',
  Auth0: '/static/icons/auth0.svg',
  Firebase: '/static/icons/firebase.svg',
  JWT: '/static/icons/jwt.svg'
};

const AuthBanner = () => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      borderBottom: 1,
      borderColor: 'divider',
      py: 2
    }}
  >
    <Container maxWidth="md">
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Chip
          color="primary"
          label="NEW"
          size="small"
        />
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            ml: 2,
            '& > img': {
              height: 30,
              mx: 2
            }
          }}
        >
          <Typography
            color="textPrimary"
            variant="subtitle2"
          >
            Visit our
            {' '}
            <Link
              component={RouterLink}
              to="/docs"
            >
              docs
            </Link>
            {' '}
            and find out how to switch between
          </Typography>
          <Tooltip title="Amplify">
            <img
              alt="Amplify"
              src={platformIcons.Amplify}
            />
          </Tooltip>
          <Tooltip title="Auth0">
            <img
              alt="Auth0"
              src={platformIcons.Auth0}
            />
          </Tooltip>
          <Tooltip title="Firebase">
            <img
              alt="Firebase"
              src={platformIcons.Firebase}
            />
          </Tooltip>
          <Tooltip title="JSON Web Token">
            <img
              alt="JWT"
              src={platformIcons.JWT}
            />
          </Tooltip>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default AuthBanner;
