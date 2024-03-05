function insercaoDireta(vetor){
    for (let i = 1; i < vetor.length; i++) {
       let aux= vetor[i]
       let j = i-1
       while ((j>-1)&& (aux< vetor[j])) {
        vetor[j+1] = vetor[j]
        j--
       }
       vetor[j+1]= aux
    }
}



