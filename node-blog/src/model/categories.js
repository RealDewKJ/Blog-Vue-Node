module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
      categoryID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    return Category;
  };
  