function buscaBinaria(vetor,inicio, fim, numero){
     
    if (inicio>fim) {
        return -1
    }else{
       let meio = Math.floor((inicio + fim)/2)
       if (vetor[meio]== numero) {
        return meio
       }else if (numero<vetor[meio]) {
        return buscaBinaria(vetor, inicio, meio-1, numero)
       }else{
        return buscaBinaria(vetor, meio+1, fim, numero)
       }
    }
}
let vetor= [2,5,7,10,11,15,17,19,20]
let result = buscaBinaria(vetor, 0, vetor.length , 2)
console.log(vetor)
console.log(result)