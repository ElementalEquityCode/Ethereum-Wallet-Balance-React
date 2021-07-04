import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box, Card, CardContent, Container, Typography } from '@material-ui/core';
import AuthBanner from '../../components/authentication/AuthBanner';
import { PasswordRecoveryAmplify } from '../../components/authentication/password-recovery';
import Logo from '../../components/Logo';
import useAuth from '../../hooks/useAuth';
import gtm from '../../lib/gtm';

const platformIcons = {
  Amplify: '/static/icons/amplify.svg',
  Auth0: '/static/icons/auth0.svg',
  Firebase: '/static/icons/firebase.svg',
  JWT: '/static/icons/jwt.svg'
};

const PasswordRecovery = () => {
  const { platform } = useAuth();

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Password Recovery | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <AuthBanner />
        <Container
          maxWidth="sm"
          sx={{ py: 10 }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <RouterLink to="/">
              <Logo
                sx={{
                  height: 40,
                  width: 40
                }}
              />
            </RouterLink>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 8
            }}
          />
          <Card>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                p: 4
              }}
            >
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 3
                }}
              >
                <div>
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h4"
                  >
                    Password Recovery
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    Tell us your email so we can send you a reset link
                  </Typography>
                </div>
                <Box
                  sx={{
                    height: 32,
                    '& > img': {
                      maxHeight: '100%',
                      width: 'auto'
                    }
                  }}
                >
                  <img
                    alt="Auth platform"
                    src={platformIcons[platform]}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  mt: 3
                }}
              >
                {platform === 'Amplify' && <PasswordRecoveryAmplify />}
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default PasswordRecovery;
