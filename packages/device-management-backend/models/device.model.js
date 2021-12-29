module.exports = (sequelize, Sequelize) => {
  const Device = sequelize.define("device", {
    category: {
      type: Sequelize.STRING,
    },
    color: {
      type: Sequelize.STRING,
    },
    partNumber: {
      type: Sequelize.INTEGER,
    },
  });

  return Device;
};
