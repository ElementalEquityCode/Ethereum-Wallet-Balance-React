import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import WidgetPreviewer from '../../components/WidgetPreviewer';
import gtm from '../../lib/gtm';

const BrowseTypography = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Browse: Typography | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          pb: 15,
          pt: 8
        }}
      >
        <Container maxWidth="lg">
          <WidgetPreviewer
            element={(
              <Box
                sx={{
                  backgroundColor: 'background.paper',
                  p: 3
                }}
              >
                <Grid container>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      '& > *:not(:last-child)': {
                        pb: 3
                      }
                    }}
                  >
                    <Typography
                      color="textPrimary"
                      variant="h1"
                    >
                      H1
                    </Typography>
                    <Typography
                      color="textPrimary"
                      variant="h2"
                    >
                      H2
                    </Typography>
                    <Typography
                      color="textPrimary"
                      variant="h3"
                    >
                      H3
                    </Typography>
                    <Typography
                      color="textPrimary"
                      variant="h4"
                    >
                      H4
                    </Typography>
                    <Typography
                      color="textPrimary"
                      variant="h5"
                    >
                      H5
                    </Typography>
                    <Typography
                      color="textPrimary"
                      variant="h6"
                    >
                      H6
                    </Typography>
                    <Typography
                      color="textPrimary"
                      variant="h2"
                    >
                      Your clients will love it
                    </Typography>
                    <Typography
                      color="textPrimary"
                      variant="subtitle2"
                    >
                      Aliquam dapibus elementum nulla at
                      malesuada. Ut mi nisl, aliquet non
                      mollis vel, feugiat non nibh. Vivamus
                      sit amet tristique dui. Praesent in
                      bibendum arcu, at placerat augue. Nam
                      varius fermentum diam, at tristique
                      libero ultrices non. Praesent
                      scelerisque diam vitae posuere
                      dignissim.
                    </Typography>
                    <Typography
                      color="textPrimary"
                      variant="h3"
                    >
                      Comes for both roles
                    </Typography>
                    <Typography
                      color="textPrimary"
                      variant="h4"
                    >
                      Developers
                    </Typography>
                    <Typography
                      color="textPrimary"
                      variant="subtitle1"
                    >
                      Lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit. Aenean commodo ligula
                      eget dolor.
                    </Typography>
                    <Typography
                      color="textPrimary"
                      variant="h5"
                    >
                      Designers
                    </Typography>
                    <Typography
                      color="textPrimary"
                      variant="body2"
                    >
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                      ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                      parturient montes, nascetur ridiculus mus.
                    </Typography>
                    <Typography
                      color="textPrimary"
                      variant="h6"
                    >
                      Modern technology stack
                    </Typography>
                    <Typography
                      color="textPrimary"
                      variant="body1"
                    >
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    <Typography
                      color="textPrimary"
                      variant="overline"
                    >
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                      ligula eget dolor. Aenean massa.
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    md={6}
                  />
                </Grid>
              </Box>
            )}
            name="Typography"
          />
        </Container>
      </Box>
    </>
  );
};

export default BrowseTypography;
