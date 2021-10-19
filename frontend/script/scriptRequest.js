
function sendRequest() {
    var valorSabores = 0
    var quantSabores = 0
    var saborPizza = ""

    //Pega os valores dos campos

    // valor do nome
    var nomeCli = document.getElementById('inputName').value

    // valor do whatsapp
    var foneCli = document.getElementById('inputPhone').value

    //valor do endereço
    var enderecoCli = document.getElementById('inputAddress').value

    //valor do tamanho escolhido
    let selecionaTamano = document.getElementById('tamanho');
    let tamanho = selecionaTamano.options[selecionaTamano.selectedIndex].id;

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


    observacao = document.getElementById("observacao").value







    let request = { nomeCli, foneCli, enderecoCli, tamanho, saborPizza, saborBorda, observacao }

    const options = {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(request)
    }

    fetch("http://192.168.0.102:5000/api/request", options)

    resposta()
}

function resposta(){
    let resultado = `  
            <div style="margin-top:130px; height: 395px; color:white;">
                <h1>Pedido enviada</h1>
            </div>`
    document.getElementById("formulario").innerHTML = resultado
}