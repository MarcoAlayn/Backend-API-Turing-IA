const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("form", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
