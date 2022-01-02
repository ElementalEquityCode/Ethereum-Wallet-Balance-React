const axios = require("axios");

function handler(req, res) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true`
      )
      .then((response) => {
        res.status(200).send(response.data["ethereum"].usd_24h_change);
        resolve();
      })
      .catch((error) => {
        res.status(200).send(0.0);
        resolve();
      });
  });
}

export default handler;
