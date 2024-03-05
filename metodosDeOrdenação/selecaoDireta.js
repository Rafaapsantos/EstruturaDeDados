 
function selectionSort(vetor){
    for(let i = 0; i < (vetor.length-1); i++){
        let menor = i
        for(let j = i+1; j < vetor.length; j++){
            if(vetor[j] < vetor[menor]){
                menor=j
            }
         }
        if (menor != i){
            let aux = vetor[i]
            vetor[i] = vetor[menor]
            vetor[menor] = aux
        }
    } 
}