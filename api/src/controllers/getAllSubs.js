//create controller get all subs
const { Newsletter } = require("../db");
const getAllSubs = async () => {
  const subs = await Newsletter.findAll();
  return subs ? subs : "no hay subscriptores";
};
module.exports = getAllSubs;
