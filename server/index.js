var cron = require("node-cron");
const process = require("process");
const PORT = process.env.PORT || 8080;
require("dotenv").config({ path: __dirname + "/.env" });
const enforce = require("express-sslify");

const express = require("express");
const app = express();

const {
  fetchMarketDataFromCoinGecko,
  connectClient,
} = require("./market-data/fetch-market-data.js");
const marketData = require("./market-data/market-data");

app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use("/", (req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://www.ethereumwalletbalance.com"
  );
  next();
});

app.use("/market-data/", marketData);

connectClient(() => {
  fetchMarketDataFromCoinGecko();
});
cron.schedule("*/2 * * * *", fetchMarketDataFromCoinGecko);

app.listen(PORT, () => {
  console.log("Started listening on port 8080");
});
