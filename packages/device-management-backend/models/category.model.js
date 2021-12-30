module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("category", {
    name: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW'),
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn("NOW"),
    },
  });

  return Category;
};
