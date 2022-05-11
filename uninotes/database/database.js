const Sequelize = require('sequelize')
const conn = new Sequelize('uninotes', 'root', '1234567', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conn;