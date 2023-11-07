function MaiorNum(vetVetor){
    numVetores=0
    for (let i=0; i<vetVetor.length; i++) {
        if (numVetores<vetVetor[i]) {
            numVetores=vetVetor[i];
        }
    }
    return numVetores
}
var vetor=[1,2,3,4,5,12346325340]
console.log(MaiorNum(vetor))