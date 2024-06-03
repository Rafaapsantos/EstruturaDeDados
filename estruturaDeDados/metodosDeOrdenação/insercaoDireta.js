function insercaoDireta(vetor){
    for (let i = 1; i < vetor.length; i++) {//Este é um loop que percorre o vetor, 
//começando da segunda posição até a última posição, pois o primeiro elemento já está 
//"ordenado" na primeira iteração.
       let aux= vetor[i] //Dentro do loop, é armazenado temporariamente o valor do 
//elemento atual em aux.
       let j = i-1 //Inicializa-se uma variável j com o índice imediatamente anterior ao
// elemento atual.
       while ((j>-1)&& (aux< vetor[j])) {//Dentro de um loop while, verifica-se se j é
// maior ou igual a zero (ou seja, se ainda estamos dentro do vetor) e se o valor 
//armazenado em aux é menor que o valor no índice j do vetor. Isso significa que 
//enquanto o elemento à esquerda de aux for maior que aux, os elementos à esquerda de 
//aux devem ser deslocados uma posição para a direita.
        vetor[j+1] = vetor[j]
        j--//Dentro do loop, os elementos são deslocados uma posição para a direita,
// enquanto aux é menor que o elemento atual em j.
       }
       vetor[j+1]= aux //Quando o loop while termina, aux é colocado na posição correta no vetor.
    }
    return vetor
}
let vetor1= [77,44,22,33,99,55,88,0,66,11]
let resposta = insercaoDireta(vetor1)
console.log(vetor1)

// complexidade= ordem quadratica O(n^2) no caso médio e pior caso e ordem linear O(n) no melhor caso



