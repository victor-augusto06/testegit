const prompt=require('prompt-sync')()
var catA=prompt("Qual é o valor do cateto adjacente?")
var catO=prompt("Qual é o valor do cateto oposto?")
var hip=(parseInt(catA**2+catO**2))
console.log(hip**0.5)