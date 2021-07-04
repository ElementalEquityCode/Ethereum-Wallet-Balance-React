import numeral from 'numeral';
import Chart from 'react-apexcharts';
import { Box, Card, CardContent, CardHeader } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import WorldMap from './WorldMap';

const FinanceSalesByContinent = (props) => {
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
      '#7F94FF',
      '#6B7ED9',
      '#5B6BB8',
      '#45528D',
      '#323C67',
      '#2A3356'
    ],
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: theme.palette.divider
    },
    plotOptions: {
      bar: {
        barHeight: '45',
        distributed: true,
        horizontal: true
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
      categories: [
        'North America',
        'South America',
        'Europe',
        'Australia',
        'Asia',
        'Africa'
      ]
    }
  };

  const chartSeries = [
    {
      name: 'Sales',
      data: [470, 440, 410, 380, 300, 187]
    }
  ];

  return (
    <Card {...props}>
      <CardHeader title="Sales by Continent" />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <WorldMap
            colors={{
              af: '#2A3356',
              as: '#323C67',
              au: '#45528D',
              eu: '#5B6BB8',
              na: '#7F94FF',
              sa: '#6B7ED9'
            }}
          />
        </Box>
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

export default FinanceSalesByContinent;
