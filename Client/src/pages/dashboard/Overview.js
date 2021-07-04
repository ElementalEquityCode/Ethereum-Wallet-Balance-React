import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import {
  OverviewInbox,
  OverviewLatestTransactions,
  OverviewPrivateWallet,
  OverviewTotalBalance,
  OverviewTotalTransactions,
  OverviewWeeklyEarnings
} from '../../components/dashboard/overview';
import useSettings from '../../hooks/useSettings';
import ArrowRightIcon from '../../icons/ArrowRight';
import BriefcaseIcon from '../../icons/Briefcase';
import DownloadIcon from '../../icons/Download';
import ExternalLinkIcon from '../../icons/ExternalLink';
import InformationCircleIcon from '../../icons/InformationCircle';
import PlusIcon from '../../icons/Plus';
import UsersIcon from '../../icons/Users';
import gtm from '../../lib/gtm';

const Overview = () => {
  const { settings } = useSettings();

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard: Overview | Material Kit Pro</title>
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
            spacing={3}
          >
            <Grid
              alignItems="center"
              container
              justifyContent="space-between"
              spacing={3}
              item
              xs={12}
            >
              <Grid item>
                <Typography
                  color="textSecondary"
                  variant="overline"
                >
                  Overview
                </Typography>
                <Typography
                  color="textPrimary"
                  variant="h5"
                >
                  Good Morning, Jane
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                >
                  Here&apos;s what&apos;s happening with your projects
                  today
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  startIcon={<PlusIcon fontSize="small" />}
                  variant="contained"
                >
                  New Transaction
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <OverviewWeeklyEarnings />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <OverviewPrivateWallet />
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
            >
              <OverviewTotalTransactions />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <OverviewTotalBalance />
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
            >
              <OverviewLatestTransactions />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <OverviewInbox />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Card>
                <CardHeader
                  disableTypography
                  subheader={(
                    <Typography
                      color="textPrimary"
                      variant="h6"
                    >
                      Find your dream job
                    </Typography>
                  )}
                  title={(
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                        pb: 2
                      }}
                    >
                      <BriefcaseIcon color="primary" />
                      <Typography
                        color="textPrimary"
                        sx={{ pl: 1 }}
                        variant="h6"
                      >
                        Jobs
                      </Typography>
                    </Box>
                  )}
                  sx={{ pb: 0 }}
                />
                <CardContent sx={{ pt: '8px' }}>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    backgroundColor: 'background.default',
                    p: 2
                  }}
                >
                  <Button
                    color="primary"
                    endIcon={<ArrowRightIcon fontSize="small" />}
                    variant="text"
                  >
                    Search Jobs
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Card>
                <CardHeader
                  disableTypography
                  subheader={(
                    <Typography
                      color="textPrimary"
                      variant="h6"
                    >
                      Need help figuring things out?
                    </Typography>
                  )}
                  title={(
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                        pb: 2
                      }}
                    >
                      <InformationCircleIcon color="primary" />
                      <Typography
                        color="textPrimary"
                        sx={{ pl: 1 }}
                        variant="h6"
                      >
                        Help Center
                      </Typography>
                    </Box>
                  )}
                  sx={{ pb: 0 }}
                />
                <CardContent sx={{ pt: '8px' }}>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    backgroundColor: 'background.default',
                    p: 2
                  }}
                >
                  <Button
                    color="primary"
                    endIcon={<ExternalLinkIcon fontSize="small" />}
                    variant="text"
                  >
                    Help Center
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Card>
                <CardHeader
                  disableTypography
                  subheader={(
                    <Typography
                      color="textPrimary"
                      variant="h6"
                    >
                      Download our Free PDF and learn how to
                      get more job leads
                    </Typography>
                  )}
                  title={(
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                        pb: 2
                      }}
                    >
                      <DownloadIcon color="primary" />
                      <Typography
                        color="textPrimary"
                        sx={{ pl: 1 }}
                        variant="h6"
                      >
                        Download
                      </Typography>
                    </Box>
                  )}
                  sx={{ pb: 0 }}
                />
                <CardContent sx={{ pt: '8px' }}>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    backgroundColor: 'background.default',
                    p: 2
                  }}
                >
                  <Button
                    color="primary"
                    endIcon={<DownloadIcon fontSize="small" />}
                    variant="outlined"
                  >
                    Download Free PDF
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Card>
                <CardHeader
                  disableTypography
                  subheader={(
                    <Typography
                      color="textPrimary"
                      variant="h6"
                    >
                      Contacts allow you to manage your
                      company contracts
                    </Typography>
                  )}
                  title={(
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                        pb: 2
                      }}
                    >
                      <UsersIcon color="primary" />
                      <Typography
                        color="textPrimary"
                        sx={{ pl: 1 }}
                        variant="h6"
                      >
                        Contacts
                      </Typography>
                    </Box>
                  )}
                  sx={{ pb: 0 }}
                />
                <CardContent sx={{ pt: '8px' }}>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    backgroundColor: 'background.default',
                    p: 2
                  }}
                >
                  <Button
                    color="primary"
                    endIcon={<ArrowRightIcon fontSize="small" />}
                    variant="outlined"
                  >
                    My Contacts
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Overview;
