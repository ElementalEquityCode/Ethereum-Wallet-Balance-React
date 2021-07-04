import Chart from 'react-apexcharts';
import { Box, Grid, Typography, Card } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const ChartLine = () => {
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
      curve: 'smooth',
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

  const chartSeries = [{ data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30] }];

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="line"
    />
  );
};

const FinanceOverview = (props) => {
  const { etherbalance } = props;
  const { totalerc20tokens } = props;
  const { walletvalue } = props;

  return (
    <Card {...props}>
      <Grid container>
        <Grid
          item
          md={4}
          xs={12}
          sx={{
            alignItems: 'center',
            borderRight: (theme) => ({
              md: `1px solid ${theme.palette.divider}`
            }),
            borderBottom: (theme) => ({
              md: 'none',
              xs: `1px solid ${theme.palette.divider}`
            }),
            display: 'flex',
            justifyContent: 'space-between',
            p: 3
          }}
        >
          <div>
            <Typography
              color="textSecondary"
              variant="overline"
            >
              Ether Balance
            </Typography>
            <Typography
              color="textPrimary"
              variant="h5"
            >
              {etherbalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </Typography>
          </div>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              height: 54,
              width: 177
            }}
          >
            <ChartLine />
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          sx={{
            alignItems: 'center',
            borderRight: (theme) => ({
              md: `1px solid ${theme.palette.divider}`
            }),
            borderBottom: (theme) => ({
              xs: `1px solid ${theme.palette.divider}`,
              md: 'none'
            }),
            display: 'flex',
            justifyContent: 'space-between',
            p: 3
          }}
        >
          <div>
            <Typography
              color="textSecondary"
              variant="overline"
            >
              ERC-20 Tokens
            </Typography>
            <Typography
              color="textPrimary"
              variant="h5"
            >
              {totalerc20tokens}
            </Typography>
          </div>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              height: 54,
              width: 177
            }}
          >
            <ChartLine />
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            p: 3
          }}
        >
          <div>
            <Typography
              color="textSecondary"
              variant="overline"
            >
              Address Value
            </Typography>
            <Typography
              color="textPrimary"
              variant="h5"
            >
              $
              {walletvalue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </Typography>
          </div>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              height: 54,
              width: 177
            }}
          >
            <ChartLine />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

FinanceOverview.propTypes = {
  etherbalance: PropTypes.number,
  totalerc20tokens: PropTypes.number,
  walletvalue: PropTypes.number
};

export default FinanceOverview;
