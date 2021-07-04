import Chart from 'react-apexcharts';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Tooltip,
  Typography
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ArrowRightIcon from '../../../icons/ArrowRight';
import InformationCircleIcon from '../../../icons/InformationCircle';

const Chart8 = () => {
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
      theme.palette.primary.light,
      theme.palette.warning.light,
      theme.palette.success.light,
      theme.palette.info.light,
      '#455a64'
    ],
    dataLabels: {
      enabled: false
    },
    labels: ['Linkedin', 'Facebook', 'Instagram', 'Twitter', 'Other'],
    legend: {
      labels: {
        colors: theme.palette.text.secondary
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
    <Box
      sx={{
        backgroundColor: 'background.default',
        p: 3
      }}
    >
      <Container maxWidth="sm">
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
                <Tooltip title="Traffic by Social Media platforms">
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
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              <Button
                color="primary"
                endIcon={<ArrowRightIcon fontSize="small" />}
                variant="text"
              >
                See all
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Chart8;
