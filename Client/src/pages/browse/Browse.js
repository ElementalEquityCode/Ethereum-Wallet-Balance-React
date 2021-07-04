import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Box, Card, Container, Skeleton, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ExternalLinkIcon from '../../icons/ExternalLink';
import gtm from '../../lib/gtm';

const getSections = (mode) => ([
  {
    title: 'Screens & Apps',
    items: [
      {
        image: `/static/browse/screens-dashboard_${mode}.png`,
        newTab: true,
        path: '/dashboard',
        subtitle: '22 screens',
        title: 'Dashboard'
      },
      {
        title: 'Login/Registration',
        newTab: true,
        subtitle: '3 screens',
        image: `/static/browse/screens-dashboard_${mode}.png`,
        path: '/authentication/login-unguarded'
      },
      {
        title: 'Contact',
        newTab: true,
        subtitle: '1 screen',
        image: `/static/browse/screens-contact_${mode}.png`,
        path: '/contact'
      },
      {
        title: 'Blog Posts',
        newTab: true,
        subtitle: '1 screen',
        image: `/static/browse/screens-blog_${mode}.png`,
        path: '/blog'
      },
      {
        title: 'Blog Post Details',
        newTab: true,
        subtitle: '1 screen',
        image: `/static/browse/screens-blogpost_${mode}.png`,
        path: '/blog/1'
      },
      {
        title: 'Blog Post Create',
        newTab: true,
        subtitle: '1 screen',
        image: `/static/browse/screens-blogedit_${mode}.png`,
        path: '/blog/new'
      },
      {
        title: 'Pricing',
        newTab: true,
        subtitle: '1 screen',
        image: `/static/browse/screens-pricing_${mode}.png`,
        path: '/pricing'
      },
      {
        title: 'Checkout',
        newTab: true,
        subtitle: '1 screen',
        image: `/static/browse/screens-checkout_${mode}.png`,
        path: '/checkout'
      },
      {
        title: 'Error 401',
        newTab: true,
        subtitle: '1 screen',
        image: `/static/browse/screens-401_${mode}.png`,
        path: '/401'
      },
      {
        title: 'Error 404',
        newTab: true,
        subtitle: '1 screen',
        image: `/static/browse/screens-404_${mode}.png`,
        path: '/404'
      },
      {
        title: 'Error 500',
        newTab: true,
        subtitle: '1 screen',
        image: `/static/browse/screens-500_${mode}.png`,
        path: '/500'
      }
    ]
  },
  {
    title: 'Data Display',
    items: [
      {
        title: 'Detail Lists',
        subtitle: '8 components',
        image: `/static/browse/dataDisplay-detailList_${mode}.png`,
        path: '/browse/data-display/detail-lists'
      },
      {
        title: 'Tables',
        subtitle: '11 components',
        image: `/static/browse/dataDisplay-tables_${mode}.png`,
        path: '/browse/data-display/tables'
      },
      {
        title: 'Quick Stats',
        subtitle: '8 components',
        image: `/static/browse/dataDisplay-quickstats_${mode}.png`,
        path: '/browse/data-display/quick-stats'
      }
    ]
  },
  {
    title: 'Lists',
    items: [
      {
        title: 'Grouped Lists',
        subtitle: '11 components',
        image: `/static/browse/lists-grouped_${mode}.png`,
        path: '/browse/lists/grouped-lists'
      },
      {
        title: 'Grid Lists',
        subtitle: '6 components',
        image: `/static/browse/lists-grid_${mode}.png`,
        path: '/browse/lists/grid-lists'
      }
    ]
  },
  {
    title: 'Forms',
    items: [
      {
        title: 'Forms',
        subtitle: '17 components',
        image: `/static/browse/forms_${mode}.png`,
        path: '/browse/forms'
      }
    ]
  },
  {
    title: 'Overlays',
    items: [
      {
        title: 'Modals',
        subtitle: '12 components',
        image: `/static/browse/overlays-dialog_${mode}.png`,
        path: '/browse/modals'
      }
    ]
  },
  {
    title: 'Charts',
    items: [
      {
        title: 'Charts',
        subtitle: '12 components',
        image: `/static/browse/charts_${mode}.png`,
        path: '/browse/charts'
      }
    ]
  },
  {
    title: 'Components',
    items: [
      {
        title: 'Buttons',
        subtitle: '',
        image: `/static/browse/base-buttons_${mode}.png`,
        path: '/browse/buttons'
      },
      {
        title: 'Typography',
        subtitle: '',
        image: `/static/browse/base-typography_${mode}.png`,
        path: '/browse/typography'
      },
      {
        title: 'Colors',
        subtitle: '',
        image: `/static/browse/base-colors_${mode}.png`,
        path: '/browse/colors'
      },
      {
        title: 'Inputs',
        subtitle: '',
        image: `/static/browse/base-inputs_${mode}.png`,
        path: '/browse/inputs'
      }
    ]
  }
]);

const Browse = () => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState();

  const sections = getSections(theme.palette.mode);
  const urls = sections
    .map((section) => section.items)
    .reduce((a, b) => [...a, ...b], [])
    .map((_item) => _item.image);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  useEffect(() => {
    (async () => {
      const responses = await Promise.all(urls.map((url) => fetch(url)));
      const blobs = await Promise.all(responses.map((response) => response.blob()));

      setImages(() => {
        const map = new Map();

        blobs.forEach((blob, index) => {
          const url = urls[index];
          const image = URL.createObjectURL(blob);
          map.set(url, image);
        });

        return map;
      });

      setIsLoading(false);
    })();
  }, [theme.palette.mode]);

  return (
    <>
      <Helmet>
        <title>Browse | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          minHeight: '100%',
          py: { md: 8 }
        }}
      >
        <Container maxWidth="lg">
          <Box>
            {sections.map((section) => (
              <Grid
                key={`section-${section.title}`}
                container
                spacing={3}
                sx={{
                  mt: 0,
                  pb: 8,
                  '& + &': {
                    borderTop: 1,
                    borderColor: 'divider',
                    pt: 5
                  }
                }}
              >
                <Grid
                  item
                  lg={3}
                  xs={12}
                >
                  <Typography
                    color="textPrimary"
                    sx={{ fontWeight: 600 }}
                    variant="h5"
                  >
                    {section.title}
                  </Typography>
                </Grid>
                <Grid
                  container
                  item
                  lg={9}
                  spacing={3}
                  xs={12}
                >
                  {section.items.map((item) => (
                    <Grid
                      item
                      key={`item-${item.title}`}
                      md={4}
                      sm={6}
                      xs={12}
                    >
                      <Card
                        component={RouterLink}
                        target={item.newTab
                          ? '_blank'
                          : '_self'}
                        sx={{
                          display: 'block',
                          textDecoration: 'none',
                          gridColumn: {
                            xs: 'span 3',
                            sm: 'span 1'
                          }
                        }}
                        to={item.path}
                        variant="outlined"
                      >
                        <Box sx={{ p: 2 }}>
                          <Box
                            sx={{
                              position: 'relative',
                              pt: '60%'
                            }}
                          >
                            {isLoading
                              ? (
                                <Skeleton
                                  sx={{
                                    borderRadius: 1,
                                    bottom: 0,
                                    height: 'auto',
                                    left: 0,
                                    maxWidth: '100%',
                                    position: 'absolute',
                                    right: 0,
                                    top: 0
                                  }}
                                  variant="rectangular"
                                />
                              )
                              : (
                                <img
                                  alt=""
                                  src={images.get(item.image)}
                                  style={{
                                    bottom: 0,
                                    height: 'auto',
                                    left: 0,
                                    maxWidth: '100%',
                                    position: 'absolute',
                                    right: 0,
                                    top: 0
                                  }}
                                />
                              )}
                          </Box>
                          <Box
                            sx={{
                              alignItems: 'flex-end',
                              display: 'flex'
                            }}
                          >
                            <Typography
                              color="textPrimary"
                              sx={{ mt: 2 }}
                              variant="subtitle2"
                            >
                              {item.title}
                            </Typography>
                            {item.newTab && (
                              <ExternalLinkIcon
                                sx={{
                                  color: 'text.secondary',
                                  ml: 1.5
                                }}
                                fontSize="small"
                              />
                            )}
                          </Box>
                          <Typography
                            color="textSecondary"
                            variant="body2"
                          >
                            {item.subtitle}
                          </Typography>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Browse;
