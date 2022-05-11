const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const conn = require ("./database/database.js")
const Anotacao = require("./database/Anotacao")
const res = require("express/lib/response");



conn.authenticate().then(() => {
    console.log("conexao feita")
}).catch((msgErro) => {
    console.log(msgErro)
})

app.use(express.static('public'))
//view engine
app.set('view engine', 'ejs')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());




app.get("/", (req, res) => {
       Anotacao.findAll({
           raw: true,
           order: [
               ['createdAt', 'desc']
           ]
       }).then(anotacoes => {
           console.log(anotacoes)
           res.render("index", {
               anotacoes: anotacoes
           })
       })
})


app.get("/about", (req, res) => {
    res.render("about.ejs")
})

app.get("/anotar", (req,res) => {
    res.render("anotar.ejs")
})

app.post("/anotacoes-salvas", (req, res) => {
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    Anotacao.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/")
    })
})

app.get("/anotacao/:id", (req, res) => {
    var id = req.params.id
    Anotacao.findOne({
        where: {id: id}
    }).then(anotacao => {
        if(anotacao != undefined){
            res.render("anotacao", {
                anotacao: anotacao
            });
        }else{
            res.redirect("/")
        }
    })
})


app.listen(8080, () => {
    console.log("Server running on localhost:8080")
})