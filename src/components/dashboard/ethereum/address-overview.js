import { useRouter } from "next/router";
import numeral from "numeral";
import { Box, Grid, Typography, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Chart } from "../../chart";
import { useTokens } from "../../../hooks/use-tokens";

const ChartLine = () => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: ["#2F3EB1"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      show: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    theme: {
      mode: theme.palette.mode,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };

  const chartSeries = [{ data: [256, 282, 221, 245, 235, 274, 234, 256] }];

  return <Chart options={chartOptions} series={chartSeries} type="area" />;
};

const data = {
  sales: {
    actualYear: 152996,
    lastYear: 121420,
  },
  profit: {
    actualYear: 32100,
    lastYear: 25200,
  },
  cost: {
    actualYear: 99700,
    lastYear: 68300,
  },
};

export const AddressOverview = (props) => {
  const router = useRouter();
  const tokensContext = useTokens();
  let currentlyViewedAddress = null;

  if (tokensContext.addresses.length > 0) {
    for (let index = 0; index < tokensContext.addresses.length; index += 1) {
      if (tokensContext.addresses[index].address === router.query.address) {
        currentlyViewedAddress = tokensContext.addresses[index];
        break;
      }
    }
  }

  return (
    <Card {...props}>
      <Grid container>
        <Grid
          item
          md={4}
          xs={12}
          sx={{
            alignItems: "center",
            borderRight: (theme) => ({
              md: `1px solid ${theme.palette.divider}`,
            }),
            borderBottom: (theme) => ({
              md: "none",
              xs: `1px solid ${theme.palette.divider}`,
            }),
            display: "flex",
            justifyContent: "space-between",
            p: 3,
          }}
        >
          <div>
            <Typography color="textSecondary" variant="overline">
              Address Value
            </Typography>
            <Typography variant="h5" sx={{ wordBreak: "break-all" }}>
              {currentlyViewedAddress
                ? numeral(currentlyViewedAddress?.addressValue).format(
                    "$0,0.00"
                  )
                : Number(0).toFixed(2)}
            </Typography>
          </div>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              height: 54,
              width: 177,
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
            alignItems: "center",
            borderRight: (theme) => ({
              md: `1px solid ${theme.palette.divider}`,
            }),
            borderBottom: (theme) => ({
              xs: `1px solid ${theme.palette.divider}`,
              md: "none",
            }),
            display: "flex",
            justifyContent: "space-between",
            p: 3,
          }}
        >
          <div>
            <Typography color="textSecondary" variant="overline">
              Ether Balance
            </Typography>
            <Typography variant="h5" sx={{ wordBreak: "break-all" }}>
              {currentlyViewedAddress
                ? numeral(currentlyViewedAddress.etherBalance).format("0,0.00")
                : Number(0).toFixed(2)}
            </Typography>
          </div>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              height: 54,
              width: 177,
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
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            p: 3,
          }}
        >
          <div>
            <Typography color="textSecondary" variant="overline">
              ERC-20 Tokens
            </Typography>
            <Typography variant="h5" sx={{ wordBreak: "break-all" }}>
              {currentlyViewedAddress
                ? currentlyViewedAddress.erc20Tokens.length
                : 0}
            </Typography>
          </div>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              height: 54,
              width: 177,
            }}
          >
            <ChartLine />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};
