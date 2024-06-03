 
function selectionSort(vetor){
    for(let i = 0; i < (vetor.length-1); i++){//Este é um loop externo que percorre o vetor. Ele vai da primeira posição até a penúltima posição, pois quando o último elemento for alcançado, o vetor já estará ordenado.
        let menor = i //Dentro do loop externo, inicializa-se uma variável menor com o índice do elemento atual, assumindo que o elemento atual é o menor até o momento.
        for(let j = i+1; j < vetor.length; j++){//Este é um loop interno que percorre o vetor a partir da posição seguinte ao elemento atual. Ele busca pelo menor elemento no restante do vetor não ordenado.
            if(vetor[j] < vetor[menor]){//se encontrar um elemento menor que o elemento    
                menor=j //atualmente considerado o menor (vetor[menor]), atualiza-se o 
            }//índice do menor para apontar para o novo elemento menor encontrado.
         }
        if (menor != i){ //se o índice do menor elemento encontrado (menor) for 
            let aux = vetor[i]//diferente do índice atual (i), troca-se os elementos de posição. 
            vetor[i] = vetor[menor]
            vetor[menor] = aux
        }
    } 
    return vetor
}
let vetor1= [77,44,22,33,99,55,88,0,66,11]
let resposta = selectionSort(vetor1)
console.log(vetor1)

// complexidade ordem quadratica O(n^2) para todos os casos
