import axios from "axios";

export class ERC20Token {
  constructor(
    ticker,
    price,
    coinBalance,
    usdBalance,
    logo,
    percentOfTotalPortfolio,
    uuid
  ) {
    this.ticker = ticker;
    this.price = price;
    this.coinBalance = coinBalance;
    this.usdBalance = usdBalance;
    this.logo = logo;
    this.percentOfTotalPortfolio = percentOfTotalPortfolio;
    this.uuid = uuid;
    this.twentyFourHourChange = "N/A";

    this.fetch24HourChangeData();
  }

  fetch24HourChangeData = async () => {
    axios
      .get(
        this.ticker.toLowerCase() === "eth"
          ? `/api/market-data/ethereum`
          : `/api/market-data/${this.uuid}`
      )
      .then((response) => {
        this.twentyFourHourChange = response.data;
      })
      .catch((error) => {
        this.twentyFourHourChange = "N/A";
      });
  };
}
