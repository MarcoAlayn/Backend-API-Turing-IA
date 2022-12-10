const user = require("express").Router();
const { User } = require("../db");

user.get("/", (req, res) => {
  res.status(200).send("soy el endpoint get de User");
});

module.exports = user;
