const Config = require('../config/db.config')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(Config.DB, Config.USER, Config.PASSWORD,{
    host: Config.HOST,
    dialect: Config.dialect,
    operatorsAliases: false,
    pool: {
        max: Config.pool.max,
        min: Config.pool.min,
        acquire: Config.pool.acquire,
        idle: Config.pool.idle
      }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("./user")(sequelize, Sequelize);
db.post = require("./post")(sequelize, Sequelize);
db.comment = require("./comment")(sequelize, Sequelize);
db.categories = require("./categories")(sequelize, Sequelize);

db.user.hasMany(db.post);
db.post.belongsTo(db.user);

db.post.hasMany(db.comment);
db.comment.belongsTo(db.post);

db.user.hasMany(db.comment);
db.comment.belongsTo(db.user);

db.post.belongsToMany(db.categories, { through: 'PostCategories' });
db.categories.belongsToMany(db.post, { through: 'PostCategories' });

module.exports = db;