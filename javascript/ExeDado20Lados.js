function dado(){
    min=Math.ceil(1);
    max=Math.floor(21);
    numero=Math.floor(Math.random()*(max-min)+min)
    return numero
}
console.log(dado())