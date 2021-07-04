import { Link as RouterLink, Outlet, useLocation } from 'react-router-dom';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import ArrowLeftIcon from '../icons/ArrowLeft';

const BrowseLayout = () => {
  const { pathname } = useLocation();
  const urlLastSegment = pathname.slice(pathname.lastIndexOf('/') + 1);
  const isEntry = urlLastSegment === 'browse' || !urlLastSegment;
  const title = isEntry
    ? 'Browse components'
    : urlLastSegment
      .split('-')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ');

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.default',
          py: 15
        }}
      >
        <Container maxWidth="lg">
          <Grid
            alignItems="center"
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              {!isEntry && (
                <Button
                  color="primary"
                  component={RouterLink}
                  startIcon={<ArrowLeftIcon />}
                  sx={{ mb: 3 }}
                  to="/browse"
                  variant="text"
                >
                  Back to components
                </Button>
              )}
              <Typography
                color="textPrimary"
                variant="h1"
              >
                {title}
              </Typography>
              {isEntry && (
                <Typography
                  color="textSecondary"
                  sx={{ mt: 1 }}
                  variant="body1"
                >
                  Browse through over 100 individual components and over 35 screens
                </Typography>
              )}
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                display: {
                  md: 'flex',
                  xs: 'none'
                },
                justifyContent: 'center'
              }}
            >
              <img
                alt="Components"
                src="/static/browse/hero.svg"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Outlet />
    </>
  );
};

export default BrowseLayout;
