const express = require("express");
const router = express.Router();
const axios = require("axios");
const { MongoClient } = require("mongodb");
const process = require("process");

const uri = process.env["MONGODB_URI"];
const client = new MongoClient(uri);

const connectClient = async () => {
  try {
    await client.connect();
  } catch (error) {
    console.log(error);
  }
};

router.get("/ethereum", async (req, res) => {
  client
    .db("dailyChangeData")
    .collection("dailyChangeData")
    .findOne({
      _id: "ethereum",
    })
    .then(async (result) => {
      res.status(200).send(String(result.change));
    })
    .catch(async (error) => {
      console.log(error);
    });
});

router.get("/:coin", async (req, res) => {
  client
    .db("dailyChangeData")
    .collection("dailyChangeData")
    .findOne({
      _id: req.params.coin,
    })
    .then(async (result) => {
      if (result) {
        res.status(200).send(String(result.change));
      } else {
        res.status(200).send("0");
      }
    })
    .catch(async (error) => {
      console.log(error);
    });
});

connectClient();

module.exports = router;
