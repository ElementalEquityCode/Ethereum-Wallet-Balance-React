var cron = require("node-cron");
const process = require("process");
const PORT = process.env.PORT || 8080;
require("dotenv").config({ path: __dirname + "/.env" });

const express = require("express");
const app = express();

const marketDataImporter = require("./market-data/fetch-market-data.js");
const marketData = require("./market-data/market-data");

app.use("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.use("/market-data/", marketData);

marketDataImporter();
cron.schedule("*/2 * * * *", marketDataImporter);

app.listen(PORT, () => {
  console.log("Started listening on port 8080");
});
