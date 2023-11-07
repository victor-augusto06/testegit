const prompt=require('prompt-sync')();
var horas=prompt("Qual foi seu horario normal de trabalho?");
var horasextras=prompt("Qual foi seu horario extra?");
var salarioBruto=(horas*10+horasextras*15);
var desconto=(salarioBruto*0.10);
var salarioLiquido=(salarioBruto-desconto);
console.log(salarioLiquido);