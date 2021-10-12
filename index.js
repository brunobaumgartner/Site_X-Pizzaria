const PORT = 5000;
const express = require('express');
const apiRoute = require('./backend/routes/api')
const path = require('path')

const app = express();


app.use('/api', apiRoute);
app.use('/', express.static(path.join(__dirname, 'frontend')));




app.listen(PORT, () => {
    console.log(`Server rodando na porta ${ PORT }`)
})


















994528520












/*
app.use('/', express.static(path.join(__dirname, "frontend"))) */

/* app.post('/send', (req, res) =>{
    const transporter = nodemailer.createTransport({
        host: SMTP.host,
        port: SMTP.port,
        secure: false,
        auth: {
            user: SMTP.user,
            pass: SMTP.pass
        },
        tls:{
            rejectUnauthorized:false
        }
    })

    transporter.sendMail({
        text: 'Texto da Mensagem',
        subject: 'Assunto do e-mail',
        from: "X-Pizzaria <brunohbaumgartner@gmail.com>",
        to: 'brunobaumgartner@hotmail.com'
    }).then(info=>{
        res.send(info)
    }).catch(error=>{
        res.send(error)
    })
}) */