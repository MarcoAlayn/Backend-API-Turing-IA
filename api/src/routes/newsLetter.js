const newsLetter = require("express").Router();
const { Newsletter } = require("../db");
const getAllSubs = require("../controllers/getAllSubs");

newsLetter.get("/", async (req, res) => {
  //   console.log(Newsletter.prototype);
  const subscriptores = await getAllSubs();

  try {
    res.status(200).json(subscriptores);
  } catch (error) {
    res.status(500).json({ msg: "Error", error });
  }
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
