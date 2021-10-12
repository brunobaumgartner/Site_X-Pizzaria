const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mailer = require('../../backend/model/request')

router.post("/request", bodyParser.json(), (req, res) => {
    let nomeCli = req.body.nomeCli;
    let foneCli = req.body.foneCli;
    let enderecoCli = req.body.enderecoCli;
    let tamanho = req.body.tamanho;
    let saborPizza = req.body.saborPizza;
    let saborBorda = req.body.saborBorda;
    let observacao = req.body.observacao;

    mailer.newRequest(nomeCli, foneCli, enderecoCli, tamanho, saborPizza, saborBorda, observacao)

    res.send("Novo pedido")

 })

 module.exports = router