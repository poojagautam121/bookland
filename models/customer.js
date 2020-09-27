module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "customer",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    { tablename: "customer", timestamp: false }
  );
};
