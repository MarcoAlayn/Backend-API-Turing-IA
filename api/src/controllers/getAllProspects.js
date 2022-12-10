const { User } = require("../db.js");

const getAllProspects = async () => {
  const prospects = await User.findAll();
  return prospects ? prospects : "no hay prospectos";
};

module.exports = getAllProspects;
