import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box, Breadcrumbs, Button, Container, Grid, Link, Typography } from '@material-ui/core';
import {
  AnalyticsGeneralOverview,
  AnalyticsMostVisitedPages,
  AnalyticsSocialMediaSources,
  AnalyticsVisitsByCountry,
  AnalyticsTrafficSources
} from '../../components/dashboard/analytics';
import useSettings from '../../hooks/useSettings';
import ChevronDownIcon from '../../icons/ChevronDown';
import ChevronRightIcon from '../../icons/ChevronRight';
import DownloadIcon from '../../icons/Download';
import gtm from '../../lib/gtm';

const Analytics = () => {
  const { settings } = useSettings();

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard: Analytics | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 8
        }}
      >
        <Container maxWidth={settings.compact ? 'xl' : false}>
          <Grid
            container
            justifyContent="space-between"
            spacing={3}
          >
            <Grid item>
              <Typography
                color="textPrimary"
                variant="h5"
              >
                Analytics
              </Typography>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator={<ChevronRightIcon fontSize="small" />}
                sx={{ mt: 1 }}
              >
                <Link
                  color="textPrimary"
                  component={RouterLink}
                  to="/dashboard"
                  variant="subtitle2"
                >
                  Dashboard
                </Link>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                >
                  Analytics
                </Typography>
              </Breadcrumbs>
            </Grid>
            <Grid item>
              <Button
                endIcon={<DownloadIcon fontSize="small" />}
                variant="outlined"
              >
                Export
              </Button>
              <Button
                color="primary"
                endIcon={<ChevronDownIcon fontSize="small" />}
                sx={{ ml: 2 }}
                variant="contained"
              >
                Last month
              </Button>
            </Grid>
          </Grid>
          <Box sx={{ py: 3 }}>
            <AnalyticsGeneralOverview />
          </Box>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xl={9}
              md={8}
              xs={12}
            >
              <AnalyticsTrafficSources sx={{ height: '100%' }} />
            </Grid>
            <Grid
              item
              xl={3}
              md={4}
              xs={12}
            >
              <AnalyticsVisitsByCountry />
            </Grid>
            <Grid
              item
              xl={9}
              md={8}
              xs={12}
            >
              <AnalyticsMostVisitedPages />
            </Grid>
            <Grid
              item
              xl={3}
              md={4}
              xs={12}
            >
              <AnalyticsSocialMediaSources />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Analytics;
