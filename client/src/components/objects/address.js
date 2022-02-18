import axios from "axios";
import { ERC20Token } from "./erc20-token";

export class Address {
  constructor(address, etherBalance, addressValue, erc20Tokens) {
    this.address = address;
    this.etherBalance = etherBalance;
    this.addressValue = addressValue;
    if (erc20Tokens) {
      this.erc20Tokens = erc20Tokens;
    } else {
      this.erc20Tokens = [];
    }
  }

  fetchDataFromZapperAPI = async () => {
    await axios
      .get(
        `https://api.zapper.fi/v1/protocols/tokens/balances?addresses[]=${this.address.toLowerCase()}&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241`
      )
      .then((result) => {
        this.addressValue = result.data[address.toLowerCase()].meta[1].value;

        result.data[address.toLowerCase()].products[0].assets.forEach( async
          (asset) => {
            const token = await new ERC20Token(
              asset.symbol,
              asset.price,
              asset.balance,
              asset.balanceUSD,
              `https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/${asset.address}.png`,
              asset.balanceUSD / this.addressValue,
              asset.address
            );
            this.erc20Tokens.push(token);
            if (asset.symbol === "ETH") {
              this.etherBalance = asset.balance;
            }
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
}