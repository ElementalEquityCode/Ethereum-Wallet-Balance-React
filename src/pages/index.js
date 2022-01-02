import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { DashboardLayout } from "../components/dashboard/dashboard-layout";
import { AddressOverview } from "../components/dashboard/ethereum/address-overview";
import { AddressTokens } from "../components/dashboard/ethereum/address-tokens";
import { useTokens } from "../hooks/use-tokens";
import { Trash as TrashIcon } from "../icons/trash";

const EthereumWalletBalance = () => {
  const router = useRouter();
  const tokensContext = useTokens();

  let currentlyViewedAddress = null;

  if (tokensContext.addresses.length > 0) {
    for (let index = 0; index < tokensContext.addresses.length; index += 1) {
      if (tokensContext.addresses[index].address === router.query.address) {
        currentlyViewedAddress = tokensContext.addresses[index].address;
        break;
      }
    }
  }

  return (
    <>
      <Head>
        <title>Ethereum Wallet Balance</title>
        <meta
          name="description"
          content="Paste in an Ethereum address and see the available Ether and any additional ECR-20 token balances for any wallet or contract address."
        />
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
            <Grid
              container
              justifyContent="space-between"
              spacing={3}
              sx={{
                flexDirection: {
                  sm: "column",
                  md: "row",
                },
              }}
            >
              <Grid item>
                <Typography
                  variant="h5"
                  sx={{
                    wordBreak: "break-all",
                  }}
                >
                  {currentlyViewedAddress}
                </Typography>
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
                  onClick={() => {
                    const addressToDelete = router.query.address;
                    if (addressToDelete) {
                      tokensContext.deleteEthereumAddress(addressToDelete);
                    }
                  }}
                  disabled={!tokensContext.addresses.length > 0}
                >
                  Delete Address
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

EthereumWalletBalance.getLayout = (page) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default EthereumWalletBalance;
