import Chart from 'react-apexcharts';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Tooltip,
  Typography
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ArrowRightIcon from '../../../icons/ArrowRight';
import InformationCircleIcon from '../../../icons/InformationCircle';

const AnalyticsSocialMediaSources = () => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: [
      'rgba(86, 100, 210, 0.5)',
      '#FFB547',
      '#7BC67E',
      '#64B6F7',
      '#455a64'
    ],
    dataLabels: {
      enabled: false
    },
    labels: ['Linkedin', 'Facebook', 'Instagram', 'Twitter', 'Other'],
    legend: {
      fontSize: '14px',
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.subtitle2.fontWeight,
      itemMargin: {
        vertical: 8
      },
      labels: {
        colors: theme.palette.text.primary
      },
      markers: {
        width: 8,
        height: 8
      },
      show: true
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    }
  };

  const chartSeries = [10, 10, 20, 10, 70];

  return (
    <Card>
      <CardHeader
        disableTypography
        title={(
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Typography
              color="textPrimary"
              variant="h6"
            >
              Social Media Sources
            </Typography>
            <Tooltip title="Widget25 source by Social Media platforms">
              <InformationCircleIcon fontSize="small" />
            </Tooltip>
          </Box>
        )}
      />
      <CardContent>
        <Chart
          height={300}
          options={chartOptions}
          series={chartSeries}
          type="donut"
        />
      </CardContent>
      <CardActions
        sx={{
          px: 2,
          py: 1.5,
          backgroundColor: 'background.default'
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          variant="text"
        >
          See all visits
        </Button>
      </CardActions>
    </Card>
  );
};

export default AnalyticsSocialMediaSources;
