import Chart from 'react-apexcharts';
import numeral from 'numeral';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';
import { alpha, useTheme } from '@material-ui/core/styles';
import ArrowRightIcon from '../../../icons/ArrowRight';
import ChevronDownIcon from '../../../icons/ChevronDown';

const OverviewPrivateWallet = (props) => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: ['#27c6db'],
    labels: [''],
    plotOptions: {
      radialBar: {
        dataLabels: {
          value: {
            show: false
          }
        },
        hollow: {
          size: '60%'
        },
        track: {
          background: theme.palette.background.default
        }
      }
    },
    theme: {
      mode: theme.palette.mode
    }
  };

  const chartSeries = [83];

  return (
    <Card {...props}>
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Chart
          height="160"
          options={chartOptions}
          series={chartSeries}
          type="radialBar"
          width="160"
        />
        <Box
          sx={{
            display: 'flex',
            flex: 1
          }}
        >
          <div>
            <Typography
              color="textPrimary"
              variant="h4"
            >
              {numeral(2150000).format('$0,0.00')}
            </Typography>
            <Typography
              color="textPrimary"
              sx={{ mt: 1 }}
              variant="subtitle2"
            >
              Your private wallet
            </Typography>
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <Avatar
            sx={{
              backgroundColor: alpha(theme.palette.error.main, 0.08),
              color: 'error.main'
            }}
            variant="rounded"
          >
            <ChevronDownIcon fontSize="small" />
          </Avatar>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          variant="text"
        >
          Withdraw money
        </Button>
      </CardActions>
    </Card>
  );
};

export default OverviewPrivateWallet;
