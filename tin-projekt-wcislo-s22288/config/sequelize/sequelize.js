const dbConfig = require('./db-config');
const Sequelize = require('sequelize');


const sequelize = new Sequelize(dbConfig.Database, 'root', dbConfig.Password, {
    host: dbConfig.Host,
    dialect: dbConfig.Dialect,

});




module.exports = sequelize;