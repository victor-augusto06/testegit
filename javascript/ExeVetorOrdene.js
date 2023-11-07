function OrdenaVetor(){
    const prompt=require("prompt-sync")();
    var vetor=[]
    for(i = 0; i < 10; i = i + 1) {
        var n1 = prompt("Digite o numero ");
        vetor[i] = Number(n1);
    }
    var aux = 0;
    var troca = 0;
    for(var nInd=0; nInd<10; nInd = nInd + 1){
        aux=nInd;
        for(var nAtual=nInd+1; nAtual< 10; nAtual = nAtual + 1){
            if(vetor[nAtual] > vetor[aux])
                aux=nAtual;
        }
        troca = Number(vetor[aux]);
        vetor[aux]=Number(vetor[nInd]);
        vetor[nInd]=Number(troca);
    }
}
console.log(OrdenaVetor())