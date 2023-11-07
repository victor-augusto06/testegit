function mediaVetor(vetVetor){
    let vlrMedia=0;
    for (let i = 0; i < vetVetor.length; i++) {
        vlrMedia+=vetVetor[i];
    }
    vlrMedia=vlrMedia/vetVetor.length;
    return vlrMedia
}
var vetor=[1,5,9,10]
var media=mediaVetor(vetor)
console.log("Média é:"+ media)
console.log("Vetor é:"+ vetor)