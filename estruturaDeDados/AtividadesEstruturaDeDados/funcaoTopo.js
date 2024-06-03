function topo(pilha){
    let x= -1
     if(pilha.length != 0) {
    x= pilha.pop()
    pilha.push(x)
    }
    return x
}
 function main(){
    let pilha = [1,2,3,4,5]
    console.log(pilha)
    x = topo(pilha)
    console.log(x)
 }
 main()