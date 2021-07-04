import Chart from 'react-apexcharts';
import { Box, Card, CardContent, Container, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const Chart3 = () => {
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
    labels: ['System Health'],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily
          },
          value: {
            color: theme.palette.text.secondary
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
    <Box
      sx={{
        backgroundColor: 'background.default',
        p: 3
      }}
    >
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Chart
              height="300"
              options={chartOptions}
              series={chartSeries}
              type="radialBar"
            />
            <Typography
              align="center"
              color="textSecondary"
              component="p"
              variant="caption"
            >
              This shouldn&apos;t be bellow 80%
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Chart3;
