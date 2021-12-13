import { Helmet } from 'react-helmet-async';
import { Box, Container, Grid, Typography, Link, Button } from '@material-ui/core';
import AddressOverview from '../../components/dashboard/finance/FinanceOverview';
import TokensTable from '../../components/dashboard/finance/FinanceProfitableProducts';
import Form from '../../components/widgets/forms/Form2';
import useSettings from '../../hooks/useSettings';
import { useState, useEffect } from 'react';
import { zapperAPI } from '../../Objects/Axios';
import Modal9 from '../../components/widgets/modals/Modal9';
import Coin from '../../Objects/Coin';
import UAuth from '@uauth/js';
import styles from '../../components/widgets/forms/Form2.module.css';

const EthereumBalanceChecker = () => {
  const [enteredAddress, setAddressHandler] = useState('');
  const [enteredString, setEnteredStringHandler] = useState('');
  const [etherBalance, setEtherBalanceHandler] = useState(0);
  const [totalERC20Tokens, setTotalETH20TokensHandler] = useState(0);
  const [walletValue, setWalletValueHandler] = useState(0);
  const [coins, setCoinsHandler] = useState([]);
  const [modal, setShouldDisplayModalHandler] = useState({
    shouldDisplay: false,
    title: '',
    message: ''
  });
  const [profile, setProfile] = useState(null);

  const uauth = new UAuth({
    clientID: 'RkNNnKGVPkAm/nv1XTnF2J52oggkYTA0q8vExwqKHXk=',
    clientSecret: 'RY0LBZqchWRW8dOMgtmvN9mjNI+KXtGX08L6B5nVr/4=',
    redirectUri: 'http://localhost:3000/callback',
  });

  const performAPIRequest = (addressString) => {
    zapperAPI.get(`balances?addresses[]=${addressString}&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241`).then((response) => {
      if (response.data[addressString.toLowerCase()].products.length === 0) {
        setShouldDisplayModalHandler({
          shouldDisplay: true,
          title: 'Error',
          message: `Ethereum address ${addressString.toLowerCase()} does not have any assets.`
        });
      } else {
        const { assets } = response.data[addressString.toLowerCase()].products[0];
        let ethBalance = 0.00;
        const coinsList = [];
        const walletValueMeta = response.data[addressString.toLowerCase()].meta[0].value;

        assets.forEach((coin) => {
          if (coin.symbol === 'ETH') {
            ethBalance = coin.balance;
          }
        });

        assets.forEach((coin) => {
          coinsList.push(new Coin(coin.symbol, coin.price, coin.balance, coin.balanceUSD, coin.img, (coin.balanceUSD / walletValueMeta) * 100, null));
        });

        setShouldDisplayModalHandler(false);
        setAddressHandler(addressString);
        setEtherBalanceHandler(ethBalance);
        setTotalETH20TokensHandler(response.data[addressString.toLowerCase()].products[0].assets.length);
        setWalletValueHandler(walletValueMeta);
        setCoinsHandler(coinsList);
        localStorage.setItem('address', addressString.toLowerCase());
      }
    }).catch((error) => {
      console.log(error);
      setShouldDisplayModalHandler({
        shouldDisplay: true,
        title: 'Error',
        message: `Ethereum address ${addressString.toLowerCase()} was not found.`
      });
    });
  };

  const { settings } = useSettings();

  const fetchUser = () => {
    uauth
      .user()
      .then((data) => {
        if (data) {
          setProfile(data);
        } else {
          setProfile(false);
        }
      })
      .catch((_err) => {
        console.log(_err);
      });
  };

  const login = async () => {
    try {
      await uauth.loginWithPopup();
      fetchUser();
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await uauth.logout();
      setProfile(null);
    } catch (error) {
      console.error(error);
    }
  };

  const checkMyBalance = () => {
    localStorage.setItem('address', null);
    console.log(profile);
    performAPIRequest(profile.wallet_address);
  };

  useEffect(() => {
    fetchUser();
    if (localStorage.getItem('address')) {
      performAPIRequest(localStorage.getItem('address'));
      setEnteredStringHandler(localStorage.getItem('address'));
    }
  }, []);

  const text = ' ';

  return (
    <>
      <Helmet>
        <title>Ethereum Wallet Balance Checker</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 8,
          paddingBottom: '5px !important'
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
                variant="h1"
              >
                Ethereum Wallet Balance Checker
              </Typography>
              <br />
              <Typography
                color="textPrimary"
                variant="h3"
              >
                Find the Ether and ERC-20 Token Balance of any Ethereum Address
              </Typography>
              <Typography
                color="textPrimary"
                variant="h6"
                sx={{
                  marginTop: '20px'
                }}
              >
                Your most recently searched for address will be stored in your browser and pasted automatically on a revisit to this site
              </Typography>
              <br />
              {profile ? (
                <div>
                  <Button
                    onClick={logout}
                    variant="contained"
                    className={styles.button}
                  >
                    Disconnect
                    {text + profile.sub}
                  </Button>
                  <br />
                </div>
              ) : (
                <Button
                  onClick={login}
                  variant="contained"
                  className={styles.button}
                >
                  Login With Unstoppable
                </Button>
              )}
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
                      setEnteredStringHandler(event.target.value);
                    }
                  }
                }}
                onPasteHandler={(event) => {
                  const string = event.clipboardData.getData('Text');
                  const regex = /^0x[a-fA-F0-9]{40}$/;
                  if (regex.test(string.trim())) {
                    performAPIRequest(string.trim());
                    setEnteredStringHandler(string);
                  }
                }}
                onButtonClickedHandler={() => {
                  const regex = /^0x[a-fA-F0-9]{40}$/;
                  if (regex.test(enteredString.trim())) {
                    performAPIRequest(enteredString.trim());
                  } else {
                    setShouldDisplayModalHandler({
                      shouldDisplay: true,
                      title: 'Error',
                      message: 'Ethereum address not formatted correctly.'
                    });
                  }
                }}
                onKeyUpHandler={(event) => {
                  setEnteredStringHandler(event.target.value.trim());
                }}
                cookieAddress={localStorage.getItem('address')}
              />
            </Grid>
          </Grid>
          { profile ? (
            <div>
              <br />
              <Button
                onClick={checkMyBalance}
                variant="contained"
                className={styles.button}
              >
                Check my balance
              </Button>
            </div>
          ) : null }
          <Box sx={{ mt: 3 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                xs={12}
              >
                <AddressOverview
                  etherbalance={etherBalance}
                  totalerc20tokens={totalERC20Tokens}
                  walletvalue={walletValue}
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <TokensTable
                  address={enteredAddress}
                  coins={coins}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <footer>
        <center>
          <Link
            href="https://github.com/ElementalEquityCode/Ethereum-Wallet-Balance"
          >
            Source Code
          </Link>
        </center>
      </footer>
    </>
  );
};

export default EthereumBalanceChecker;
