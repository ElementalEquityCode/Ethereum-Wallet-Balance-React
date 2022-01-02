import Head from "next/head";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { DashboardLayout } from "../components/dashboard/dashboard-layout";
import { AddressOverview } from "../components/dashboard/finance/address-overview";
import { AddressTokens } from "../components/dashboard/finance/address-tokens";
import { Trash as TrashIcon } from "../icons/trash";

const Finance = () => {
  return (
    <>
      <Head>
        <title>Ethereum Wallet Balance</title>
        <meta name="description" content="Paste in an Ethereum address and see the available Ether and any additional ECR-20 token balances for any wallet or contract address." /> 
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: 4 }}>
            <Grid container justifyContent="space-between" spacing={3}>
              <Grid item>
                <Typography variant="h4">Finance</Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  m: -1,
                }}
              >
                <Button
                  startIcon={<TrashIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="outlined"
                  color="error"
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <AddressOverview />
            </Grid>
            <Grid item xs={12}>
              <AddressTokens />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Finance.getLayout = (page) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Finance;
