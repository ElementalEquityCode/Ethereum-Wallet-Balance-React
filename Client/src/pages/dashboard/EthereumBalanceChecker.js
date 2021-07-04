import { Helmet } from 'react-helmet-async';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import {
  FinanceOverview,
  FinanceProfitableProducts
} from '../../components/dashboard/finance';
import Form from '../../components/widgets/forms/Form2';
import useSettings from '../../hooks/useSettings';
import { useState } from 'react';
import { zapperAPI } from '../../Objects/Axios';
import Modal9 from '../../components/widgets/modals/Modal9';
import Coin from '../../Objects/Coin';

const EthereumBalanceChecker = () => {
  const [enteredAddress, setAddressHandler] = useState('');
  const [etherBalance, setEtherBalanceHandler] = useState(0);
  const [totalERC20Tokens, setTotalETH20TokensHandler] = useState(0);
  const [walletValue, setWalletValueHandler] = useState(0);
  const [coins, setCoinsHandler] = useState([]);
  const [modal, setShouldDisplayModalHandler] = useState({
    shouldDisplay: false,
    title: '',
    message: ''
  });

  const performAPIRequest = (addressString) => {
    zapperAPI.get(`balances?addresses[]=${addressString}&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241`).then((response) => {
      if (response.data[addressString.toLowerCase()].products.length === 0) {
        setShouldDisplayModalHandler({
          shouldDisplay: true,
          title: 'Error',
          message: `Address ${addressString.toLowerCase()} does not have any assets.`
        });
      } else {
        const { assets } = response.data[addressString.toLowerCase()].products[0];
        let ethBalance = 0.00;
        const coinsList = [];
        const walletValueMeta = response.data[addressString.toLowerCase()].meta[0].value;

        assets.forEach((coin) => {
          if (coin.label === 'ETH') {
            ethBalance = coin.balance;
          }
        });

        assets.forEach((coin) => {
          coinsList.push(new Coin(coin.label, coin.price, coin.balance, coin.balanceUSD, `https://zapper.fi/images/${coin.img}`, (coin.balanceUSD / walletValueMeta) * 100, null));
          console.log(coin.symbol);
        });

        setShouldDisplayModalHandler(false);
        setAddressHandler(addressString);
        setEtherBalanceHandler(ethBalance);
        setTotalETH20TokensHandler(response.data[addressString.toLowerCase()].products[0].assets.length);
        setWalletValueHandler(walletValueMeta);
        setCoinsHandler(coinsList);
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  const { settings } = useSettings();

  return (
    <>
      <Helmet>
        <title>Ethereum Wallet Balance Checker</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 8
        }}
      >
        <Container maxWidth={settings.compact ? 'xl' : false}>
          {modal.shouldDisplay ? (
            <Modal9
              title={modal.title}
              message={modal.message}
              onButtonClick={() => {
                setShouldDisplayModalHandler({
                  shouldDisplay: false,
                  title: '',
                  message: ''
                });
              }}
            />
          ) : null}
          <Grid
            container
            justifyContent="space-between"
            spacing={3}
          >
            <Grid item>
              <Typography
                color="textPrimary"
                variant="h5"
              >
                Ethereum Wallet Balance Checker - Find the Ether and ERC-20 Token Balance of any Ethereum Address
              </Typography>
            </Grid>
            <Grid
              style={{ width: '100%' }}
              item
            >
              <Form
                onCompleteHandler={(event) => {
                  if (event.code.toLowerCase() === 'enter' || event.key.toLowerCase() === 'enter') {
                    const regex = /^0x[a-fA-F0-9]{40}$/;
                    if (regex.test(event.target.value.trim())) {
                      performAPIRequest(event.target.value.trim());
                    } else {
                      setShouldDisplayModalHandler({
                        shouldDisplay: true,
                        title: 'Error',
                        message: 'Ethereum address not formatted correctly.'
                      });
                    }
                  }
                }}
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                xs={12}
              >
                <FinanceOverview
                  etherbalance={etherBalance}
                  totalerc20tokens={totalERC20Tokens}
                  walletvalue={walletValue}
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <FinanceProfitableProducts
                  address={enteredAddress}
                  coins={coins}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default EthereumBalanceChecker;