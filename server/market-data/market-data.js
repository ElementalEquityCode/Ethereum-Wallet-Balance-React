const express = require("express");
const router = express.Router();
const axios = require("axios");
const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://admin:admin@ethereum-wallet-balance.bahyr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

router.get("/ethereum", async (req, res) => {
  try {
    await client.connect();

    client
      .db("dailyChangeData")
      .collection("dailyChangeData")
      .findOne({
        _id: "ethereum",
      })
      .then(async (result) => {
        res.status(200).send(String(result.change));
        await client.close();
      })
      .catch(async (error) => {
        console.log(error);
        await client.close();
      });
  } catch (error) {
    console.log(error);
    res.status(200).send("0");
  }
});

router.get("/:coin", async (req, res) => {
  try {
    await client.connect();

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
        await client.close();
      });
  } catch (error) {
    console.log(error);
    res.status(200).send("0");
  }
});

module.exports = router;
