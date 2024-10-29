const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./user.model')(sequelize, Sequelize);
db.bootcamps = require('./bootcamp.model')(sequelize, Sequelize);

// Relación muchos a muchos entre Usuarios y Bootcamps
db.users.belongsToMany(db.bootcamps, {
  through: 'user_bootcamp',
  as: 'bootcamps',
  foreignKey: 'user_id'
});
db.bootcamps.belongsToMany(db.users, {
  through: 'user_bootcamp',
  as: 'users',
  foreignKey: 'bootcamp_id'
});

module.exports = db;
