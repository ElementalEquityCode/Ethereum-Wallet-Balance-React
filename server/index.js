var cron = require("node-cron");
const process = require("process");
const PORT = process.env.PORT || 8080;

const express = require("express");
const app = express();

const marketDataImporter = require("./market-data/fetch-market-data.js");
const marketData = require("./market-data/market-data");

app.use("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.use("/market-data/", marketData);

cron.schedule("* * * * *", marketDataImporter);

app.listen(PORT, () => {
  console.log("Started listening on port 8080");
});