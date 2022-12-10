const newsLetter = require("express").Router();
const { Newsletter } = require("../db");

newsLetter.get("/", async (req, res) => {
  console.log(Newsletter.prototype);
  //   res.status(200).send("soy el get de newsletter");
});

newsLetter.post("/", async (req, res) => {
  const { email } = req.body;
  try {
    await Newsletter.create({
      email: email,
    });

    res.status(200).json("nuevo subscriptor creado");
  } catch (error) {
    res.status(500).json({ msg: "Error", error });
  }
});

module.exports = newsLetter;
