const newsLetter = require("express").Router();
const { Newsletter } = require("../db");

newsLetter.get("/", async (req, res) => {
  res.status(200).send("soy el get de newsletter");
});

module.exports = newsLetter;
