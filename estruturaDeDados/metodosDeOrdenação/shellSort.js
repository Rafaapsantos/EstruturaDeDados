function shellsort(vetor, tam){
    var i, j, value;//Aqui, inicializamos algumas variáveis: i e j serão usadas como índices nos loops, value é uma variável 
    var gap = 1;//temporária para armazenar o valor sendo movido e gap é a lacuna inicial entre os elementos.
    
    while(gap < tam){ //Este é um loop que calcula a lacuna inicial gap. A sequência de lacunas é gerada usando a sequência de incremento de Knuth,
        gap = 3*gap+1;// que é calculada com base no tamanho do vetor. A sequência começa com 1 e, em seguida, é multiplicada por 3 e adicionada 1 até que a lacuna seja maior ou igual ao tamanho do vetor.
    }
    while(gap > 1){
        gap = parseInt(gap/3);
        for(i = gap; i < tam; i++) {
            value = vetor[i];
            j = i - gap;
            while ((j >= 0) && (value < vetor[j])) {
                vetor[j + gap] = vetor[j];
                j = j-gap;
            }
            vetor[j + gap] = value;
        }
//Este é outro loop que itera sobre a sequência de lacunas. No corpo do loop, temos um 
//loop for que itera sobre os elementos do vetor a partir do índice gap. Dentro desse 
//loop, value armazena temporariamente o valor atual e j é o índice anterior ao valor 
//atual, com uma lacuna de gap. Então, enquanto j for maior ou igual a zero e o valor na 
//posição j for maior que value, o valor na posição j + gap é movido para a posição j. 
//Isso é feito até encontrarmos uma posição onde value seja maior ou igual ao valor na 
//posição j. Então, value é inserido na posição j + gap.
    }
    return vetor
}

let vetor1= [77,44,22,33,99,55,88,0,66,11]
let resposta = shellsort(vetor1, vetor1.length)
console.log(vetor1)

// complexidade = O(n^1.25)