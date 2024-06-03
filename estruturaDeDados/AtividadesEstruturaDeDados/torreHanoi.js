function torreHanoi(numDisco, origem, auxiliar, destino){
    if (numDisco==1) {
        console.log(`${origem} -> ${destino}`)
    }else{
        torreHanoi(numDisco - 1, origem, destino, auxiliar)
        console.log(`${origem} -> ${destino}`)
        torreHanoi(numDisco - 1, auxiliar, origem , destino)
    }
}
torreHanoi(3,'A', 'B', 'C')