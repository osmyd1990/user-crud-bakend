const { Sequelize } = require('sequelize');
const config = require('../../config')

const environment = config.nodeEnv

// const Sequelize = require('sequelize');
// // Option 1: Passing parameters separately
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'postgres'
// });


const db = new Sequelize(config.db[environment])

module.exports = db