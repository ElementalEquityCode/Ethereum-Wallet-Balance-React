class Coin {
  constructor(ticker, price, coinBalance, usdBalance, logo, percentOfTotalPortfolio, coinGeckoID) {
    this.ticker = ticker;
    this.price = price;
    this.coinBalance = coinBalance;
    this.usdBalance = usdBalance;
    this.logo = logo;
    this.percentOfTotalPortfolio = percentOfTotalPortfolio;
    this.coinGeckoID = coinGeckoID;
  }
}

export default Coin;
