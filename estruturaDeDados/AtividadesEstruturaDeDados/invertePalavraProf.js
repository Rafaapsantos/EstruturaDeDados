function invertePilha(frase){
    let pilha = []
    let letra 
    let i =0 
    let fraseInvertida = " " //string inicializada com um espaço em branco para construir a frase invertida.

    while (i< frase.length) {
        while (frase[i] != " " && i<frase.length) {//empilha caracteres na pilha até encontrar um espaço ou até o fim da string.
            pilha.push(frase[i])//Cada caractere é adicionado à pilha
            i++
        }
        while (pilha.length != 0) {//desempilha caracteres da pilha e os adiciona a fraseInvertida, revertendo assim a ordem dos caracteres da palavra.
            letra = pilha.pop()//pop remove o último elemento da pilha e o retorna, que é então adicionado a fraseInvertida.
            fraseInvertida += letra
        }
        fraseInvertida += " "//um espaço é adicionado a fraseInvertida.
        i++//O índice i é incrementado para pular o espaço e começar a processar a próxima palavra.
    }
    return fraseInvertida
}

function main(){
    let frase = "rafaela santos"
    let resp = invertePilha(frase)
    console.log(resp)
}
main()