module.exports = {

    estimate: {
        tamanho: "",
        saborPizza: "",
        saborBorda: "",

    },

    getEstimate() {
        return this.estimate;
    },

    newEstimate(tamanho, saborPizza, saborBorda, valorTamanho, valorSabores) {

        this.estimate = { tamanho, saborPizza, saborBorda, valorTamanho, valorSabores }

    }

}
