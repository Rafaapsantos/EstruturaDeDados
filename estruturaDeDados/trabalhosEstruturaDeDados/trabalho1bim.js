//Trabalho realizado por:
// Ana Júlia Andrade Barbosa; 3° ADS- matutino
// Rafaela Aparecida Dos Santos; 3° ADS- matutino

function vetorAleatorio(tamanho){
    let vetor = [];
    for (let i = 0; i < tamanho; i++) {
      vetor.push(Math.floor(Math.random() * 1000));
    }
    return vetor;
}

function vetorOrdenado(tamanho){
    let vetor = [];
  for (let i = 0; i <tamanho; i++) {
    vetor.push(i);
  }
  return vetor;
}

function vetorInvertido(tamanho){
    let vetor = [];
  for (let i = tamanho ; i>0 ; i--) {
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
function quickSort(vetor, left, right){
    let i= left  
    let j= right 
    let aux 
    let pivoIndex = Math.floor((left + right)/2) 
    let pivo = vetor[pivoIndex] 
        while (i<=j) {
            while (vetor[i]< pivo) { 
                i++
            }
            while (vetor[j]> pivo) { 
                j--
            }
            if (i<=j) {   
                aux = vetor[i]
                vetor[i]= vetor[j]  
                vetor[j]=aux       /
                i++
                j-- 
            }
        }
    if (left<j) { 
        quickSort(vetor, left, j) 
    if (i< right) {
        quickSort(vetor, i, right) 
    }
    return vetor
    }
}


function principal(){
    let tamanho100 = 100
    let tamanho1000 = 1000
    let tamanho10000 = 10000
    let tamanho100000 = 100000
   
    let vetorAleatorioAux100 = vetorAleatorio(tamanho100)
    let vetorOrdenadoAux100 = vetorOrdenado(tamanho100)
    let vetorInvertidoAux100 = vetorInvertido(tamanho100)

    let vetorAleatorioAux1000 = vetorAleatorio(tamanho1000)
    let vetorOrdenadoAux1000 = vetorOrdenado(tamanho1000)
    let vetorInvertidoAux1000 = vetorInvertido(tamanho1000)

    let vetorAleatorioAux10000 = vetorAleatorio(tamanho10000)
    let vetorOrdenadoAux10000 = vetorOrdenado(tamanho10000)
    let vetorInvertidoAux10000 = vetorInvertido(tamanho10000)

    let vetorAleatorioAux100000 = vetorAleatorio(tamanho100000)
    let vetorOrdenadoAux100000 = vetorOrdenado(tamanho100000)
    let vetorInvertidoAux100000 = vetorInvertido(tamanho100000)

 //tempo de execucao bubblesort VETOR ALEATORIO 
    let aux = vetorAleatorioAux100.slice()
    console.time('tempo bubblesort vetor aleatorio de 100 números')
    bubblesort(aux)
    console.timeEnd('tempo bubblesort vetor aleatorio de 100 números')

    let aux1 = vetorAleatorioAux1000.slice()
    console.time('tempo bubblesort vetor aleatorio de 1.000 números')
    bubblesort(aux1)
    console.timeEnd('tempo bubblesort vetor aleatorio de 1.000 números')

    let aux2 = vetorAleatorioAux10000.slice()
    console.time('tempo bubblesort vetor aleatorio de 10.000 números')
    bubblesort(aux2)
    console.timeEnd('tempo bubblesort vetor aleatorio de 10.000 números')

    let aux3 = vetorAleatorioAux100000.slice()
    console.time('tempo bubblesort vetor aleatorio de 100.000 números')
    bubblesort(aux3)
    console.timeEnd('tempo bubblesort vetor aleatorio de 100.000 números')


    //tempo de execucao bubblesort VETOR ORDENADO
    let aux4 = vetorOrdenadoAux100.slice()
    console.time('tempo bubblesort vetor ordenado de 100 números')
    bubblesort(aux4)
    console.timeEnd('tempo bubblesort vetor ordenado de 100 números')
    
    let aux5 = vetorOrdenadoAux1000.slice()
    console.time('tempo bubblesort vetor ordenado de 1.000 números')
    bubblesort(aux5)
    console.timeEnd('tempo bubblesort vetor ordenado de 1.000 números')

    let aux6 = vetorOrdenadoAux10000.slice()
    console.time('tempo bubblesort vetor ordenado de 10.000 números')
    bubblesort(aux6)
    console.timeEnd('tempo bubblesort vetor ordenado de 10.000 números')

    let aux7 = vetorOrdenadoAux100000.slice()
    console.time('tempo bubblesort vetor ordenado de 100.000 números')
    bubblesort(aux7)
    console.timeEnd('tempo bubblesort vetor ordenado de 100.000 números')


    //tempo de execucao bubblesort VETOR Invertido
     let aux8 = vetorInvertidoAux100.slice()
    console.time('tempo bubblesort vetor invertido de 100 números')
    bubblesort(aux8)
    console.timeEnd('tempo bubblesort vetor invertido de 100 números')
    

    let aux9 = vetorInvertidoAux1000.slice()
    console.time('tempo bubblesort vetor invertido de 1.000 números')
    bubblesort(aux9)
    console.timeEnd('tempo bubblesort vetor invertido de 1.000 números')

    let aux10 = vetorInvertidoAux10000.slice()
    console.time('tempo bubblesort vetor invertido de 10.000 números')
    bubblesort(aux10)
    console.timeEnd('tempo bubblesort vetor invertido de 10.000 números')

    let aux11 = vetorInvertidoAux100000.slice()
    console.time('tempo bubblesort vetor invertido de 100.000 números')
    bubblesort(aux11)
    console.timeEnd('tempo bubblesort vetor invertido de 100.000 números')




    //tempo de execucao selectionsort vetor aleatorio
    let aux12 = vetorAleatorioAux100.slice()
    console.time('tempo selectionsort vetor aleatorio de 100 números')
    selectionsort(aux12)
    console.timeEnd('tempo selectionsort vetor aleatorio de 100 números')

    let aux13 = vetorAleatorioAux100.slice()
    console.time('tempo selectionsort vetor aleatorio de 1.000 números')
    selectionsort(aux13)
    console.timeEnd('tempo selectionsort vetor aleatorio de 1.000 números')

    let aux14 = vetorAleatorioAux100.slice()
    console.time('tempo selectionsort vetor aleatorio de 10.000 números')
    selectionsort(aux14)
    console.timeEnd('tempo selectionsort vetor aleatorio de 10.000 números')

    let aux15 = vetorAleatorioAux100.slice()
    console.time('tempo selectionsort vetor aleatorio de 100.000 números')
    selectionsort(aux15)
    console.timeEnd('tempo selectionsort vetor aleatorio de 100.000 números')
    
    
    //tempo de execucao selectionsort vetor ordenado
    let aux16 = vetorOrdenadoAux100.slice()
    console.time('tempo selectionsort vetor ordenado de 100 números')
    selectionsort(aux16)
    console.timeEnd('tempo selectionsort vetor ordenado de 100 números')

    let aux17 = vetorOrdenadoAux1000.slice()
    console.time('tempo selectionsort vetor ordenado de 1.000 números')
    selectionsort(aux17)
    console.timeEnd('tempo selectionsort vetor ordenado de 1.000 números')

    let aux18 = vetorOrdenadoAux10000.slice()
    console.time('tempo selectionsort vetor ordenado de 10.000 números')
    selectionsort(aux18)
    console.timeEnd('tempo selectionsort vetor ordenado de 10.000 números')

    let aux19 = vetorOrdenadoAux100000.slice()
    console.time('tempo selectionsort vetor ordenado de 100.000 números')
    selectionsort(aux19)
    console.timeEnd('tempo selectionsort vetor ordenado de 100.000 números')


    //tempo de execucao selectionsort vetor invertido
    let aux20 = vetorInvertidoAux100000.slice()
    console.time('tempo selectionsort vetor invertido de 100 números')
    selectionsort(aux20)
    console.timeEnd('tempo selectionsort vetor invertido de 100 números')

    let aux21 = vetorInvertidoAux100000.slice()
    console.time('tempo selectionsort vetor invertido de 1.000 números')
    selectionsort(aux21)
    console.timeEnd('tempo selectionsort vetor invertido de 1.000 números')

    let aux22 = vetorInvertidoAux100000.slice()
    console.time('tempo selectionsort vetor invertido de 10.000 números')
    selectionsort(aux22)
    console.timeEnd('tempo selectionsort vetor invertido de 10.000 números')

    let aux23 = vetorInvertidoAux100000.slice()
    console.time('tempo selectionsort vetor invertido de 100.000 números')
    selectionsort(aux23)
    console.timeEnd('tempo selectionsort vetor invertido de 100.000 números')



    //tempo de execucao insertionsort vetor aleatorio
    let aux24 = vetorAleatorioAux100.slice()
    console.time('tempo insertionsort vetor aleatorio de 100 números')
    insertionsort(aux24)
    console.timeEnd('tempo insertionsort vetor aleatorio de 100 números')

    let aux25 = vetorAleatorioAux100.slice()
    console.time('tempo insertionsort vetor aleatorio de 1.000 números')
    insertionsort(aux25)
    console.timeEnd('tempo insertionsort vetor aleatorio de 1.000 números')

    let aux26 = vetorAleatorioAux100.slice()
    console.time('tempo insertionsort vetor aleatorio de 10.000 números')
    insertionsort(aux26)
    console.timeEnd('tempo insertionsort vetor aleatorio de 10.000 números')

    let aux27 = vetorAleatorioAux100.slice()
    console.time('tempo insertionsort vetor aleatorio de 100.000 números')
    insertionsort(aux25)
    console.timeEnd('tempo insertionsort vetor aleatorio de 100.000 números')


    //tempo de execucao insertionsort vetor ordenado
    let aux28 = vetorOrdenadoAux100.slice()
    console.time('tempo insertionsort vetor ordenado de 100 números')
    insertionsort(aux28)
    console.timeEnd('tempo insertionsort vetor ordenado de 100 números')

    let aux29 = vetorOrdenadoAux1000.slice()
    console.time('tempo insertionsort vetor ordenado de 1.000 números')
    insertionsort(aux29)
    console.timeEnd('tempo insertionsort vetor ordenado de 1.000 números')

    let aux30 = vetorOrdenadoAux10000.slice()
    console.time('tempo insertionsort vetor ordenado de 10.000 números')
    insertionsort(aux30)
    console.timeEnd('tempo insertionsort vetor ordenado de 10.000 números')

    let aux31 = vetorOrdenadoAux100000.slice()
    console.time('tempo insertionsort vetor ordenado de 100.000 números')
    insertionsort(aux31)
    console.timeEnd('tempo insertionsort vetor ordenado de 100.000 números')


    //tempo de execucao insertionsort vetor invertido
    let aux32 = vetorInvertidoAux100.slice()
    console.time('tempo insertionsort vetor invertido de 100 números')
    insertionsort(aux32)
    console.timeEnd('tempo insertionsort vetor invertido de 100 números')

    let aux33 = vetorInvertidoAux1000.slice()
    console.time('tempo insertionsort vetor invertido de 1.000 números')
    insertionsort(aux33)
    console.timeEnd('tempo insertionsort vetor invertido de 1.000 números')

    let aux34 = vetorInvertidoAux10000.slice()
    console.time('tempo insertionsort vetor invertido de 10.000 números')
    insertionsort(aux34)
    console.timeEnd('tempo insertionsort vetor invertido de 10.000 números')

    let aux35 = vetorInvertidoAux100000.slice()
    console.time('tempo insertionsort vetor invertido de 100.000 números')
    insertionsort(aux35)
    console.timeEnd('tempo insertionsort vetor invertido de 100.000 números')



    //tempo de execucao quickSort vetor aleatorio 
    let aux36 = vetorAleatorioAux100.slice()
    console.time('tempo quickSort vetor aleatorio de 100 números')
    quickSort(aux36, 0, aux36.length-1)
    console.timeEnd('tempo quickSort vetor aleatorio de 100 números')

    let aux37 = vetorAleatorioAux1000.slice()
    console.time('tempo quickSort vetor aleatorio de 1.000 números')
    quickSort(aux37, 0, aux37.length-1)
    console.timeEnd('tempo quickSort vetor aleatorio de 1.000 números')

    let aux38 = vetorAleatorioAux10000.slice()
    console.time('tempo quickSort vetor aleatorio de 10.000 números')
    quickSort(aux38, 0, aux38.length-1)
    console.timeEnd('tempo quickSort vetor aleatorio de 10.000 números')

    let aux39 = vetorAleatorioAux100000.slice()
    console.time('tempo quickSort vetor aleatorio de 100.000 números')
    quickSort(aux39, 0, aux39.length-1)
    console.timeEnd('tempo quickSort vetor aleatorio de 100.000 números')


    //tempo de execucao quickSort vetor ordenado
    let aux40 = vetorOrdenadoAux100.slice()
    console.time('tempo quickSort vetor ordenado de 100 números')
    quickSort(aux40, 0, aux40.length-1)
    console.timeEnd('tempo quickSort vetor ordenado de 100 números')

    let aux41 = vetorOrdenadoAux1000.slice()
    console.time('tempo quickSort vetor ordenado de 1.000 números')
    quickSort(aux41, 0, aux41.length-1)
    console.timeEnd('tempo quickSort vetor ordenado de 1.000 números')

    let aux42 = vetorOrdenadoAux10000.slice()
    console.time('tempo quickSort vetor ordenado de 10.000 números')
    quickSort(aux42, 0, aux42.length-1)
    console.timeEnd('tempo quickSort vetor ordenado de 10.000 números')

    let aux43 = vetorOrdenadoAux100000.slice()
    console.time('tempo quickSort vetor ordenado de 100.000 números')
    quickSort(aux43, 0, aux43.length-1)
    console.timeEnd('tempo quickSort vetor ordenado de 100.000 números')


    //tempo de execucao quickSort vetor invertido
    let aux44 = vetorInvertidoAux100.slice()
    console.time('tempo quickSort vetor invertido de 100 números')
    quickSort(aux44, 0, aux44.length-1)
    console.timeEnd('tempo quickSort vetor invertido de 100 números')

    let aux45 = vetorInvertidoAux1000.slice()
    console.time('tempo quickSort vetor invertido de 1.000 números')
    quickSort(aux45, 0, aux45.length-1)
    console.timeEnd('tempo quickSort vetor invertido de 1.000 números')

    let aux46 = vetorInvertidoAux10000.slice()
    console.time('tempo quickSort vetor invertido de 10.000 números')
    quickSort(aux46, 0, aux46.length-1)
    console.timeEnd('tempo quickSort vetor invertido de 10.000 números')

    let aux47 = vetorInvertidoAux100000.slice()
    console.time('tempo quickSort vetor invertido de 100.000 números')
    quickSort(aux47, 0, aux47.length-1)
    console.timeEnd('tempo quickSort vetor invertido de 100.000 números')
    
    

}
principal()