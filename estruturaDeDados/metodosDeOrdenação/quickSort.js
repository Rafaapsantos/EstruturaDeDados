function quickSort(vetor, left, right){
    let i= left //aqui vc define o i como o lado esquerdo do vetor 
    let j= right //aqui vc define o j como o lado direito do vetor 
    let aux // variavel auxiliar, para ajudar a trocar os numeros 
    let pivoIndex = Math.floor((left + right)/2) // aqui voce define o pivo, que é o numero que esta na metade do vetor 
    let pivo = vetor[pivoIndex] // aqui voce define o index do pivo, pois se for só o numero, esse numero pode mudar de posição, então a gente pega o index
    
    //* partição
        while (i<=j) {//enquanto i for menor ou igual a j, o que significa que ainda há elementos a serem comparados e trocados.
            while (vetor[i]< pivo) { // i vai de 1 em 1, procurando um numero que seja maior que o pivo, ate chegar no pivo 
                i++
            }
            while (vetor[j]> pivo) { // j vai diminuindo de 1 em 1, procurando um numero que seja menor que o pivo, ate chegar no pivo 
                j--
            }// OBS:i e j percorrem o array em direções opostas, procurando por elementos que estão no lado errado do pivot.
            if (i<=j) { // aqui se achar o numero maior que o pivo  
                aux = vetor[i]
                vetor[i]= vetor[j] // faz a troca do numero maior pra direira 
                vetor[j]=aux       // e o numero menor pra esquerda
                i++ // aqui continua 
                j-- // percorrendo o vetor
            }
        }
    //*recursão
    if (left<j) { 
        quickSort(vetor, left, j) // aqui chama a recursão para fazer a mesma coisa, com o lado esquerdo do pivo, ate ficar tudo ordenado 
    }
    if (i< right) {
        quickSort(vetor, i, right) // aqui chama a recursão para fazer a mesma coisa, com o lado direito do pivo, ate ficar tudo ordenado
    }
    return vetor
    }
    
    let vetor1= [77,44,22,33,99,55,88,0,66,11]
    quickSort(vetor1, 0, vetor1.length-1)
    console.log(vetor1)
    
    // complexidade = ordem quadratica O(n²) no pior caso e  O(n log n) no melhor e médio caso 