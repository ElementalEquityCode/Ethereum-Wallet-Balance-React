import Chart from 'react-apexcharts';
import { format, subDays } from 'date-fns';
import { Avatar, Box, Card, Container, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import RefreshIcon from '../../../icons/Refresh';

const getCategories = () => {
  const now = new Date();
  const categories = [];

  for (let i = 6; i >= 0; i--) {
    categories.push(format(subDays(now, i), 'dd/MM/yyyy'));
  }

  return categories;
};

const QuickStats8 = () => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      yaxis: {
        lines: {
          show: false
        }
      },
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    legend: {
      show: false
    },
    stroke: {
      width: 2,
      colors: ['#f44336']
    },
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      categories: getCategories(),
      labels: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    }
  };

  const chartSeries = [
    {
      data: [14, 43, 98, 68, 155, 18, 8],
      name: 'Conversions'
    }
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        p: 3
      }}
    >
      <Container maxWidth="md">
        <Card sx={{ p: 2 }}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap'
            }}
          >
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText'
                }}
              >
                <RefreshIcon fontSize="small" />
              </Avatar>
              <Box sx={{ ml: 3 }}>
                <Typography
                  color="textSecondary"
                  noWrap
                  variant="body1"
                >
                  Conversions (7 days)
                </Typography>
                <Typography
                  color="textPrimary"
                  sx={{ fontWeight: 'fontWeightBold' }}
                  variant="h4"
                >
                  361
                </Typography>
              </Box>
            </Box>
            <Box sx={{ maxWidth: 200 }}>
              <Chart
                height="100"
                type="line"
                options={chartOptions}
                series={chartSeries}
              />
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default QuickStats8;
