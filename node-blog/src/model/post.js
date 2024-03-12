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
    imageUrl: {
      type: Sequelize.TEXT('long'), 
      allowNull: true,
    },
    subImageUrl: {
      type: Sequelize.TEXT('long'),
      allowNull: true,
    },
    public: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    subContent: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    specialContent: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn("NOW"),
    },
  });
  return Post;
};
