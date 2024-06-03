function heapsort(vetor, tam){ //vetor, que é o array que será ordenado, e tam, que é o tamanho do vetor.
    var i = parseInt(tam/2), pai, filho, t; //i é inicializado para a metade do tamanho do vetor (divisão inteira), pai, filho e t são inicializados sem valores.
    for (;;){ //Este é um loop infinito que será usado para percorrer o vetor e organizar o heap.

//Dentro do loop, verifica-se se i é maior que zero. Se for, decrementa i e atribui o valor do vetor na posição i à variável t.        
        if (i > 0){ 
            i--;
            t = vetor[i];
        }
        else{
            tam--;
            if (tam == 0)
                return;
            t = vetor[tam];
            vetor[tam] = vetor[0];
        }
//Caso contrário, decrementa tam e verifica se tam é igual a zero. Se for, retorna, indicando que o vetor foi completamente ordenado.
//Caso contrário, atribui o valor do vetor na posição tam à variável t e move o valor na posição 0 para a posição tam no vetor.
        pai = i;
        filho = i*2 + 1;
//Depois, define-se pai como i e filho como i*2 + 1, que representa o filho esquerdo do nó pai.
        while (filho < tam){ //Entra em um loop enquanto o índice do filho é menor que o tamanho atual do vetor.
              if ((filho + 1 < tam)  &&  (vetor[filho + 1] > vetor[filho]))
                  filho++;
//Se existir um filho direito e ele for maior que o filho esquerdo, incrementa o índice do filho.
              if (vetor[filho] > t){
                  vetor[pai] = vetor[filho];
                  pai = filho;
                  filho = pai*2 + 1;
              }
              else
                  break;
//Se o valor do filho for maior que o valor armazenado em t, move o valor do filho para o pai, 
//atualiza os índices do pai e do filho e continua o loop. Caso contrário, sai do loop.
        }
        vetor[pai] = t;// Depois que o loop termina, atribui o valor de t ao pai atual.
    }
    return vetor
}

    let vetor1= [77,44,22,33,99,55,88,0,66,11]
    let resposta = heapsort(vetor1, vetor1.length)
    console.log(vetor1)

// complexidade = O(n * log(n))