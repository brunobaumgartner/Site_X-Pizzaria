const SMTP = require('../smtp');

const nodemailer = require('nodemailer')

module.exports = {
    newRequest(nomeCli, foneCli, enderecoCli, tamanho, saborPizza, saborBorda, observacao){
        this.transporter = nodemailer.createTransport({
            host: SMTP.host,
            port: SMTP.port,
            secure: false,
            auth: {
                user: SMTP.user,
                pass: SMTP.pass
            },
            tls: {
                rejectUnauthorized: false
            }
    
        })
    
        this.transporter.sendMail({
            text: `
                Nome: ${nomeCli}
                Telefone: ${foneCli}
                Endereço: ${enderecoCli}
                Tamanho: ${tamanho}
                Sabor: ${saborPizza}
                Sabor da Borda: ${saborBorda}
                Observação: ${observacao}
                `,
            subject: 'Assunto do e-mail',
            from: "X-Pizzaria <brunobaumgartner@hotmail.com>",
            to: 'brunobaumgartner@hotmail.com'
        })
    }
}