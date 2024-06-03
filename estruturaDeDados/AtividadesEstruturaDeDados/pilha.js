function clearPilha(pilha){
    while (pilha.length != 0) {
        pilha.pop()
    }
}

function topo(pilha){
    let x= -1
     if(pilha.length != 0) {
    x= pilha.pop()
    pilha.push(x)
    }
    return x
}

function pilha(){
    var pilha = []
    var x
    
    x= 4
    pilha.push(x)
    pilha.push(1)
    pilha.push(2)
    pilha.push(5)
    pilha.push(7)
    console.log("Pilha:" + pilha)
    
    x = pilha.pop()
    console.log("Elemento:" + x)
    console.log("Pilha:" + pilha )
    
    pilha.push(10)
    console.log("Pilha:" +pilha )

    x = pilha.pop()
    console.log("Pilha:" +pilha )

    x = topo(pilha)
    console.log("Topo:" + x)
    console.log("Pilha:" +pilha )
    
    clearPilha(pilha)
    console.log("Pilha:" +pilha )

    
    }
    pilha()
    