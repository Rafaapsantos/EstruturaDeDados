function inverterPalavras(string) {
    let palavras = string.split(' ')
    let stringInvertida = []

    function inverterPalavra(palavra) {
        let pilha = []
        for (let i = 0; i < palavra.length; i++) {
            pilha.push(palavra[i])
        }

        let palavraInvertida = ''
     
        while (pilha.length > 0) {
            palavraInvertida += pilha.pop()
        }
        return palavraInvertida
    }

    for (let i = 0; i < palavras.length; i++) {
        const palavraInvertida = inverterPalavra(palavras[i])
        stringInvertida.push(palavraInvertida)
    }
    const resultado = stringInvertida.join(' ')

    return resultado;
}

function main(){
    let palavra = "rafaela santos"
    let resp = inverterPalavras(palavra)
    console.log(resp)
}
main()