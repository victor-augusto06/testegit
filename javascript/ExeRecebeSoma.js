function recebeNum(num1,num2){
    return parseInt(num1)+parseInt(num2)
}
const prompt=require("prompt-sync")();
var entrada1=prompt("Digite um número:");
var entrada2=prompt("Digite um número:");
console.log(recebeNum(entrada1,entrada2))