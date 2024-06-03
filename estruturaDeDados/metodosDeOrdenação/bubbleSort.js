function bubbleSort(vetor){
    for (let i = 0; i < vetor.length; i++) { //Este é um loop externo que percorre todo o array. Ele itera sobre cada elemento do array.
        for (let j = 0; j < vetor.length ; j++) { //Este é um loop interno aninhado dentro do loop externo. Ele também percorre todo o array, comparando cada elemento com seu próximo elemento.
            if (vetor[j] > vetor[j +1]) { //Esta condição verifica se o elemento atual é maior que o próximo elemento no array.
                let aux= vetor[j]
                    vetor[j] = vetor[j+1]//Se o elemento atual for maior que o próximo, eles são trocados de posição.
                    vetor[j+1]= aux // Isso significa que estamos movendo o elemento maior para a direita.
            }
        }
    }
    return vetor
}
//iterar = repetir uma sequência de instruções ou operações em uma coleção de elementos

let vetor1= [20,21,21,22,23,23,24,24,25,25,26,27,28,29,29,30,30,30,30,35,35,35,36,36,37,37,37,38,39,39,39,40,40,41,41,42,45,45,45,46,47,47,47,44,42,43,]
let resposta = bubbleSort(vetor1)
console.log(vetor1)

// complexidade = ordem quadratica O(n^2) pior caso e no caso médio
// no melhor caso, quando a lista já está ordenada, a complexidade é O(n).



