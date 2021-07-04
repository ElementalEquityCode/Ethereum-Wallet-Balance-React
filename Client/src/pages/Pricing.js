import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container, Grid, Switch, Typography, Badge, Skeleton } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { PricingPlan } from '../components/pricing';
import gtm from '../lib/gtm';

const Pricing = () => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState('');

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/static/pricing/pricing_${theme.palette.mode}.svg`);
      const blob = await response.blob();

      setImage(URL.createObjectURL(blob));
      setIsLoading(false);
    })();
  }, [theme.palette.mode]);

  return (
    <>
      <Helmet>
        <title>Pricing | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          minHeight: '100%',
          pb: 6
        }}
      >
        <Box
          sx={{
            backgroundColor: 'background.default',
            py: 6
          }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              alignItems="center"
              spacing={2}
              flexWrap="nowrap"
            >
              <Grid
                item
                md={7}
                xs={12}
              >
                <Typography
                  color="textPrimary"
                  variant="h3"
                >
                  Start today. Boost up your services!
                </Typography>
                <Typography
                  color="textSecondary"
                  sx={{ my: 2 }}
                  variant="body1"
                >
                  Join 3,000+ developers &amp; designers using Devias to
                  power modern web projects.
                </Typography>
                <Switch color="primary" />
                <Badge
                  badgeContent="25% OFF"
                  sx={{
                    '& .MuiBadge-badge': {
                      backgroundColor: 'success.main',
                      color: 'primary.contrastText',
                      right: -38,
                      top: '25%'
                    }
                  }}
                >
                  <Typography
                    color="textPrimary"
                    variant="body1"
                  >
                    Yearly Payment
                  </Typography>
                </Badge>
              </Grid>
              <Grid
                item
                md={5}
                sx={{
                  display: {
                    md: 'block',
                    xs: 'none'
                  }
                }}
              >
                <Box
                  sx={{
                    maxWidth: 419,
                    width: '100%'
                  }}
                >
                  {isLoading
                    ? (
                      <Skeleton
                        sx={{
                          borderRadius: 1,
                          pt: '99.76%',
                          width: '100%'
                        }}
                        variant="rectangular"
                      />
                    )
                    : (
                      <img
                        alt="Pricing Hero"
                        src={image}
                        style={{ width: '100%' }}
                      />
                    )}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container
          maxWidth="lg"
          sx={{ py: 6 }}
        >
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <PricingPlan
                cta="Start Free Trial"
                currency="$"
                description="To familiarize yourself with our tools."
                features={[
                  'Create contracts',
                  'Chat support',
                  'Email alerts'
                ]}
                image="/static/pricing/plan1.svg"
                name="Startup"
                price="0"
                sx={{
                  height: '100%',
                  maxWidth: 460,
                  mx: 'auto'
                }}
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <PricingPlan
                cta="Start Free Trial"
                currency="$"
                description="To familiarize yourself with our tools."
                features={[
                  'All previous',
                  'Highlights reporting',
                  'Data history',
                  'Unlimited users'
                ]}
                image="/static/pricing/plan2.svg"
                name="Standard"
                popular
                price="4.99"
                sx={{
                  height: '100%',
                  maxWidth: 460,
                  mx: 'auto'
                }}
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <PricingPlan
                cta="Contact Us"
                currency="$"
                description="To familiarize yourself with our tools."
                features={[
                  'All previous',
                  'Unlimited contacts',
                  'Analytics platform',
                  'Public API access',
                  'Send and sign unlimited contracts'
                ]}
                image="/static/pricing/plan3.svg"
                name="Business"
                price="29.99"
                sx={{
                  height: '100%',
                  maxWidth: 460,
                  mx: 'auto'
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Typography
          align="center"
          color="textSecondary"
          component="p"
          variant="caption"
        >
          30% of our income goes into Whale Charity
        </Typography>
      </Box>
    </>
  );
};

export default Pricing;
