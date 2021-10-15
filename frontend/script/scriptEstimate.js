/* Script da de orçamento */

/* Função para pegar o orçamente que foi enviado para o servidor */
var valorTamanho = 0
var valorSabores = 0
var quantSabores = 0
var valorBorda = ""
function calcTotal(){

    return Number(valorTamanho + (valorSabores/quantSabores) + valorBorda).toFixed(2)
    
}


function viewEstimate(){
    fetch("http://localhost:5000/api/getEstimate").then(res=>{
        return res.json()
    }).then(json=>{
        let estimates = JSON.parse(json);
        let resultado = `  
            <div style="margin-top:150px">
                <p style="color:white">Tamanho: --------- ${estimates.tamanho}</p>
                <p style="color:white">Sabor: ----------- ${estimates.saborPizza}</p>
                <p style="color:white">Borda: ----------- ${estimates.saborBorda}</p>
                <p style="color:white">Valor total: ----------- R$${calcTotal()}</p>
            </div>`
            document.getElementById("formulario").innerHTML = resultado
        })
}


/* Script que manda os dados passados no formularios para o servidor */

function sendEstimate() {
    var saborPizza = ""

    //Pega os valores dos campos

    //valor do tamanho escolhido
    let selecionaTamano = document.getElementById('tamanho');
    let tamanho = selecionaTamano.options[selecionaTamano.selectedIndex].id;
    valorTamanho = Number(selecionaTamano.options[selecionaTamano.selectedIndex].value);

    //Sabor escolhido
    var sabores = document.querySelectorAll('.sabor')


    sabores.forEach((sabor) => {
        if (sabor.checked == true) {
            saborPizza = saborPizza + " " + sabor.id
            quantSabores++
            valorSabores += Number(sabor.value)
        }
    })

    //valor do campo "com borda ou sem"
    var borda = document.querySelector('.borda:checked').value

    //Condicional para ver se o cliente quer borda e se ele quiser, somar o valor da borda e ver o sabor da borda
    if (borda == "Sim") {
        saborBorda = document.querySelector(".saborBorda:checked").id
        valorBorda = Number(document.querySelector(".saborBorda:checked").value)
        fixedValorBorda = "R$" + valorBorda.toFixed(2)

    }
    else
        saborBorda = "Sem borda"
    
        
        
        
        let estimate = { tamanho, saborPizza, saborBorda }
        
        const options = {
            method: "POST",
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(estimate)
        }
        
        fetch("http://localhost:5000/api/estimate", options)

    
    viewEstimate()
    calcTotal()
}