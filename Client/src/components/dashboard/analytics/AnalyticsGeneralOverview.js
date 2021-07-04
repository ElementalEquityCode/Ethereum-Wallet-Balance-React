import Chart from 'react-apexcharts';
import { Avatar, Box, Button, Card, Divider, Grid, Typography } from '@material-ui/core';
import { alpha, useTheme } from '@material-ui/core/styles';
import ArrowRightIcon from '../../../icons/ArrowRight';
import ChevronDownIcon from '../../../icons/ChevronDown';
import ChevronUpIcon from '../../../icons/ChevronUp';

const LineChart = () => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    colors: ['#7783DB'],
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false
    },
    stroke: {
      width: 3
    },
    theme: {
      mode: theme.palette.mode
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    }
  };

  const chartSeries = [{ data: [0, 60, 30, 60, 0, 30, 10, 30, 0] }];

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="line"
      width={120}
    />
  );
};

const BarChart = () => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    colors: ['#7783DB'],
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0
        }
      }
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      }
    },
    yaxis: {
      show: false
    }
  };

  const chartSeries = [{ data: [10, 20, 30, 40, 50, 60, 5] }];

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="bar"
      width={120}
    />
  );
};

const AnalyticsGeneralOverview = () => (
  <Grid
    container
    spacing={2}
  >
    <Grid
      item
      md={3}
      sm={6}
      xs={12}
    >
      <Card>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            p: 3
          }}
        >
          <div>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Impressions
            </Typography>
            <Typography
              color="textPrimary"
              sx={{ mt: 1 }}
              variant="h4"
            >
              1.9M
            </Typography>
          </div>
          <LineChart />
        </Box>
        <Divider />
        <Box
          sx={{
            px: 3,
            py: 2
          }}
        >
          <Button
            color="primary"
            endIcon={<ArrowRightIcon fontSize="small" />}
            variant="text"
          >
            See all visits
          </Button>
        </Box>
      </Card>
    </Grid>
    <Grid
      item
      md={3}
      sm={6}
      xs={12}
    >
      <Card>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            p: 3
          }}
        >
          <div>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Spent
            </Typography>
            <Typography
              color="textPrimary"
              sx={{ mt: 1 }}
              variant="h5"
            >
              $41.2K
            </Typography>
          </div>
          <LineChart />
        </Box>
        <Divider />
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            px: 3,
            py: 2
          }}
        >
          <Avatar
            sx={{
              backgroundColor: (theme) => alpha(theme.palette.success.main, 0.08),
              color: 'success.main',
              height: 36,
              width: 36
            }}
          >
            <ChevronUpIcon fontSize="small" />
          </Avatar>
          <Typography
            color="textSecondary"
            sx={{ ml: 1 }}
            variant="caption"
          >
            12% more then last month
          </Typography>
        </Box>
      </Card>
    </Grid>
    <Grid
      item
      md={3}
      sm={6}
      xs={12}
    >
      <Card>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            p: 3
          }}
        >
          <div>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Engagements
            </Typography>
            <Typography
              color="textPrimary"
              sx={{ mt: 1 }}
              variant="h5"
            >
              36,6K
            </Typography>
          </div>
          <LineChart />
        </Box>
        <Divider />
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            px: 3,
            py: 2
          }}
        >
          <Avatar
            sx={{
              backgroundColor: (theme) => alpha(theme.palette.error.main, 0.08),
              color: 'error.main',
              height: 36,
              width: 36
            }}
          >
            <ChevronDownIcon fontSize="small" />
          </Avatar>
          <Typography
            color="textSecondary"
            sx={{ ml: 1 }}
            variant="caption"
          >
            30% less then last month
          </Typography>
        </Box>
      </Card>
    </Grid>
    <Grid
      item
      md={3}
      sm={6}
      xs={12}
    >
      <Card>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            p: 3
          }}
        >
          <div>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Conversions
            </Typography>
            <Typography
              color="textPrimary"
              sx={{ mt: 1 }}
              variant="h5"
            >
              131,3K
            </Typography>
          </div>
          <BarChart />
        </Box>
        <Divider />
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            px: 3,
            py: 2
          }}
        >
          <Avatar
            sx={{
              backgroundColor: (theme) => alpha(theme.palette.success.main, 0.08),
              color: 'success.main',
              height: 36,
              width: 36
            }}
          >
            <ChevronUpIcon fontSize="small" />
          </Avatar>
          <Typography
            color="textSecondary"
            sx={{ ml: 1 }}
            variant="caption"
          >
            12% more then last month
          </Typography>
        </Box>
      </Card>
    </Grid>
  </Grid>
);

export default AnalyticsGeneralOverview;
