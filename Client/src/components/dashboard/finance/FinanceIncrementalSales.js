import numeral from 'numeral';
import Chart from 'react-apexcharts';
import { Box, Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const data = {
  series: [
    {
      color: '#7783DB',
      category: 'Email',
      data: 37530
    },
    {
      color: '#7BC67E',
      category: 'GDN',
      data: 52717
    },
    {
      color: '#FFB547',
      category: 'Instagram',
      data: 62935
    },
    {
      color: '#F06191',
      category: 'Facebook',
      data: 90590
    },
    {
      color: '#64B6F7',
      category: 'Google Ads Search',
      data: 13219
    }
  ]
};

const FinanceIncrementalSales = (props) => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: data.series.map((item) => item.color),
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: theme.palette.divider,
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    legend: {
      show: false
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '45',
        distributed: true
      }
    },
    theme: {
      mode: theme.palette.mode
    },
    tooltip: {
      y: {
        formatter: (value) => numeral(value).format('$0,0.00')
      }
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true
      },
      categories: data.series.map((item) => item.category)
    },
    yaxis: {
      labels: {
        show: false
      }
    }
  };

  const chartSeries = [
    {
      data: data.series.map((item) => item.data),
      name: 'Sales'
    }
  ];

  return (
    <Card {...props}>
      <CardHeader title="Incremental Sales" />
      <CardContent>
        {data.series.map((item) => (
          <Box
            key={item.category}
            sx={{
              alignItems: 'center',
              display: 'flex',
              p: 1
            }}
          >
            <Box
              sx={{
                backgroundColor: item.color,
                borderRadius: '50%',
                height: 8,
                width: 8
              }}
            />
            <Typography
              color="textPrimary"
              sx={{ ml: 2 }}
              variant="subtitle2"
            >
              {item.category}
            </Typography>
          </Box>
        ))}
        <Chart
          height="350"
          options={chartOptions}
          series={chartSeries}
          type="bar"
        />
      </CardContent>
    </Card>
  );
};

export default FinanceIncrementalSales;
