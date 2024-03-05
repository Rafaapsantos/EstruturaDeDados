function bubbleSort(vetor){
    for (let i = 0; i < vetor.length; i++) {
        for (let j = 0; j < vetor.length ; j++) {
            if (vetor[j] > vetor[j +1]) {
                let aux= vetor[j]
                    vetor[j] = vetor[j+1]
                    vetor[j+1]= aux  
            }
        }
    }
}


