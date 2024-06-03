function clearFila(fila){
    while (fila.length != 0) {
        fila.shift()
    }
}
function clearPilha(pilha){
    while (pilha.length != 0) {
        pilha.pop()
    }
}



function main() {
    let fila = [1,2,3,4,5]
    console.log(fila)
    clearFila(fila)
    console.log(fila)

    let pilha = [1,2,3,4,5]
    console.log(pilha)
    clearPilha(pilha)
    console.log(pilha)
}
main()




