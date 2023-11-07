function recebeNum(num1,num2){
    return num1>num2 ? num1+" é maior que "+num2 : num2+" é maior que "+num1
}

const prompt=require("prompt-sync")();
var entrada1=prompt("Digite um número:");
var entrada2=prompt("Digite um número:");

console.log(recebeNum(parseInt(entrada1),parseInt(entrada2)))