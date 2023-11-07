function returnMen(){
    const prompt=require("prompt-sync")();
    var mens=prompt("Digite uma mensagem:");
    return mens
}
console.log(returnMen())