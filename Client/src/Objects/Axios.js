import axios from 'axios';

const zapperAPI = axios.create({
  baseURL: 'https://api.zapper.fi/v1/protocols/tokens'
});

const coinGeckoAPI = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/'
});

const testServerAPI = axios.create({
  baseURL: 'http://localhost:8080/'
});

const productionServerAPI = axios.create({
  baseURL: 'https://www.ethereumwalletbalance.com/'
});

export { zapperAPI, coinGeckoAPI, testServerAPI, productionServerAPI };
