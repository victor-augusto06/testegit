function testeNomeIdade(nome, idade){
return idade>=18 ? nome+" tem "+idade+" anos, e pode entrar na festa" : nome+" tem "+idade+" anos, e não pode entrar na festa"
}
const prompt=require("prompt-sync")();
var nomeUsuario=prompt("Digite o nome do usuario:");
var idadeUsuario=prompt("Digite sua idade:");
console.log(testeNomeIdade((nomeUsuario),parseInt(idadeUsuario)))