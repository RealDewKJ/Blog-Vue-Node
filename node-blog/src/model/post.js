module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("posts", {
        postID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          title: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          content: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
          createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW'),
          }
    });
    return Post;
  }; 