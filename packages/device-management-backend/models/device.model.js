module.exports = (sequelize, Sequelize) => {
  const Device = sequelize.define("device", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "id",
    },
    category_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "categories",
        key: "id",
      },
      field: "category_id",
    },
    color: {
      type: Sequelize.STRING(16),
    },
    partNumber: {
      type: Sequelize.INTEGER.UNSIGNED,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn("NOW"),
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn("NOW"),
    },
  });

  return Device;
};
