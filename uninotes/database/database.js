const Sequelize = require('sequelize')
const conn = new Sequelize('uninotes', 'root', '17060220a', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conn;