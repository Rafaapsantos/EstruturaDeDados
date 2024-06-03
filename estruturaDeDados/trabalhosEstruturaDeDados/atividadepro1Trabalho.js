//Trabalho realizado por:
// Ana Júlia Andrade Barbosa; 3° ADS- matutino
// Rafaela Aparecida Dos Santos; 3° ADS- matutino

function vetorAleatorio(){
    let vetor = [];
    for (let i = 0; i < 1000; i++) {
      vetor.push(Math.floor(Math.random() * 1000));
    }
    return vetor;
}

function vetorOrdenado(){
    let vetor = [];
  for (let i = 0; i <1000; i++) {
    vetor.push(i);
  }
  return vetor;
}

function vetorInvertido(){
    let vetor = [];
  for (let i = 1000; i>0 ; i--) {
    vetor.push(i);
  }
  return vetor;
}

function bubblesort (vetor){
    let aux
    for (let i=0; i<vetor.length; i++) {
        for (let j =0; j<(vetor.length - 1); j++){
            if(vetor[j]>vetor[j+1]){
                aux= vetor[j]
                vetor[j]= vetor[j+1]
                vetor[j+1]= aux
            }
        }
    }
}

function selectionsort(vetor){
    let menor
    for (let i=0; i<(vetor.length - 1); i++) {
        menor=i
        for (let j =i+1; j<vetor.length; j++){
            if(vetor[j]<vetor[menor]){
                menor=j
            }
        }
        if(i != menor){
            let aux = vetor[i]
            vetor[i] = vetor[menor]
            vetor[menor] = aux
        }
    }
}

function insertionsort(vetor){
    for (let i = 1; i < vetor.length; i++) {
       let aux= vetor[i]
       let j = i-1
       while ((j>-1)&& (aux< vetor[j])) {
        vetor[j+1] = vetor[j]
        j--
       }
       vetor[j+1]= aux
    }
    return vetor
}

function principal(){

    //tempo de execucao bubblesort
    console.time('tempo bubblesort vetor aleatorio')
    bubblesort(vetorAleatorio())
    console.timeEnd('tempo bubblesort vetor aleatorio')
    console.time('tempo bubblesort vetor ordenado')
    bubblesort(vetorOrdenado())
    console.timeEnd('tempo bubblesort vetor ordenado')
    console.time('tempo bubblesort vetor invertido')
    bubblesort(vetorInvertido())
    console.timeEnd('tempo bubblesort vetor invertido')
    //tempo de execucao selectionsort
    console.time('tempo selectionsort vetor aleatorio')
    selectionsort(vetorAleatorio())
    console.timeEnd('tempo selectionsort vetor aleatorio')
    console.time('tempo selectionsort vetor ordenado')
    selectionsort(vetorOrdenado())
    console.timeEnd('tempo selectionsort vetor ordenado')
    console.time('tempo selectionsort vetor invertido')
    selectionsort(vetorInvertido())
    console.timeEnd('tempo selectionsort vetor invertido')
    //tempo de execucao insertionsort
    console.time('tempo insertionsort vetor aleatorio')
    insertionsort(vetorAleatorio())
    console.timeEnd('tempo insertionsort vetor aleatorio')
    console.time('tempo insertionsort vetor ordenado')
    insertionsort(vetorOrdenado())
    console.timeEnd('tempo insertionsort vetor ordenado')
    console.time('tempo insertionsort vetor invertido')
    insertionsort(vetorInvertido())
    console.timeEnd('tempo insertionsort vetor invertido')
}
principal()
//tempo de execução de cada método, arredondado:

//Tempo bubbleSort usando vetor aleatorio
//Tempo: 12.25 ms

//Tempo bubbleSort usando vetor ordenado
//Tempo: 3.38 ms

//Tempo bubbleSort usando vetor invertido
//Tempo: 5.09 ms

//Tempo seleção direta usando vetor aleatorio
//Tempo: 10.68 ms

//Tempo seleção direta usando vetor ordenado
//Tempo: 2.47 ms

//Tempo seleção direta usando vetor invertido
//Tempo: 3.38 ms

//Tempo inserção direta usando vetor aleatorio
//Tempo: 5.45 ms

//Tempo inserção direta usando vetor ordenado
//Tempo: 0.13 ms

//Tempo inserção direta usando vetor invertido
//Tempo: 1.28 ms