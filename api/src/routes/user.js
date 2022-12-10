const user = require("express").Router();
const { User } = require("../db");
const getAllProspects = require("../controllers/getAllProspects");

user.get("/", async (req, res) => {
  const prospects = await getAllProspects();

  try {
    res.status(200).json(prospects);
  } catch (error) {
    res.status(500).json({ msg: "Error", error });
  }
});

user.post("/", async (req, res) => {
  const { name, email, phone, company, job, country, city, message } = req.body;
  try {
    await User.create({
      name,
      email,
      phone,
      company,
      job,
      country,
      city,
      message,
    });

    res.status(200).json("nuevo usuario creado");
  } catch (error) {
    res.status(500).json({ msg: "Error", error });
  }
});

module.exports = user;
