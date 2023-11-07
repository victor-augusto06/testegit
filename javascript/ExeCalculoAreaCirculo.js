function area(raio){
    return ((raio**2)*Math.PI)
}
const prompt=require("prompt-sync")();
var valor=prompt("Digite o valor do raio:")
console.log(area(parseFloat(valor)))