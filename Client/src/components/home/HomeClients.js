import { Box, Card, Container, Grid, Link, Typography } from '@material-ui/core';

const HomeClients = (props) => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      py: 15
    }}
    {...props}
  >
    <Container maxWidth="lg">
      <Typography
        align="center"
        color="textPrimary"
        sx={{ pb: 6 }}
        variant="h3"
      >
        Your clients will love it
      </Typography>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <Card
            sx={{
              backgroundColor: 'primary.main',
              height: '100%',
              px: 2,
              py: 10,
              position: 'relative'
            }}
          >
            <Typography
              sx={{ color: 'primary.contrastText' }}
              variant="h5"
            >
              Documentation
            </Typography>
            <Typography
              sx={{
                color: 'primary.contrastText',
                opacity: 0.56,
                pb: 2
              }}
              variant="body2"
            >
              How to get started with Material Kit Pro
            </Typography>
            <Link
              href="/docs"
              sx={{ color: 'primary.contrastText' }}
              variant="body2"
            >
              Getting started guide
            </Link>
            <Box
              sx={{
                height: '100%',
                p: 2,
                position: 'absolute',
                right: 0,
                top: 0,
                '& img': {
                  height: '100%',
                  maxWidth: '100%'
                }
              }}
            >
              <img
                alt="Rocket"
                loading="lazy"
                src="/static/home/cta-rocket.svg"
              />
            </Box>
          </Card>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <Card
            sx={{
              backgroundColor: 'info.main',
              height: '100%',
              px: 2,
              py: 10,
              position: 'relative'
            }}
          >
            <Typography
              sx={{ color: 'primary.contrastText' }}
              variant="h5"
            >
              See live preview
            </Typography>
            <Typography
              sx={{
                color: 'primary.contrastText',
                opacity: 0.56,
                pb: 2
              }}
              variant="body2"
            >
              Browse through numerous screens
            </Typography>
            <Link
              href="/browse"
              sx={{ color: 'primary.contrastText' }}
              variant="body2"
            >
              Browse Components
            </Link>
            <Box
              sx={{
                height: '100%',
                p: 2,
                position: 'absolute',
                right: 0,
                top: 0,
                '& img': {
                  height: '100%',
                  maxWidth: '100%'
                }
              }}
            >
              <img
                alt="Code"
                loading="lazy"
                src="/static/home/cta-code.svg"
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default HomeClients;
