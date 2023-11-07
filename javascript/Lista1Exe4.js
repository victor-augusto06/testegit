const prompt=require('prompt-sync')();
var nota1=prompt("Qual foi sua primeira nota:")
var nota2=prompt("Qual foi sua segunda nota:")
var nota3=prompt("Qual foi sua terceira nota:")
resultado=(nota1*1+nota2*2+nota3*3/(3+1+2))
console.log(resultado)