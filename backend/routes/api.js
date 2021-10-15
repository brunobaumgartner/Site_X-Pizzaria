const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mailer = require('../model/request')
const estimate = require('../model/estimate')

router.post("/request", bodyParser.json(), (req, res) => {
    let nomeCli = req.body.nomeCli;
    let foneCli = req.body.foneCli;
    let enderecoCli = req.body.enderecoCli;
    let tamanho = req.body.tamanho;
    let saborPizza = req.body.saborPizza;
    let saborBorda = req.body.saborBorda;
    let observacao = req.body.observacao;

    mailer.newRequest(nomeCli, foneCli, enderecoCli, tamanho, saborPizza, saborBorda, observacao)

 })

 router.get('/getEstimate',(req, res)=>{
    res.json(JSON.stringify(estimate.getEstimate()))
})


router.post('/estimate', bodyParser.json(), (req, res)=>{
    let tamanho = req.body.tamanho;
    let saborPizza = req.body.saborPizza;
    let saborBorda = req.body.saborBorda;
    let valorTamanho = req.body.valorTamanho;
    let valorSabores = req.body.valorSabores;

    estimate.newEstimate(tamanho, saborPizza, saborBorda, valorTamanho, valorSabores)

    res.send("Post Adicionado")
    
 })


 
 module.exports = router