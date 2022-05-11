const Sequelize = require('sequelize')
const conn = require("./database")

const Anotacao = conn.define('anotacoes', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Anotacao.sync({ force: false }).then(() => {
    console.log("Tabela criada")
})

module.exports = Anotacao;