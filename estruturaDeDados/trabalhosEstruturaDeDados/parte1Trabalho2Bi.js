function verificarExpressao(expressao) {
    let pilha = [];// Cria uma pilha vazia para armazenar os caracteres de abertura
    // Percorre a expressão caractere por caractere 
    for (let i = 0; i < expressao.length; i++) {
        let caracter = expressao[i];// Obtém o caractere atual
        // Verifica se o caractere é um dos caracteres de abertura: '(', '[', ou '{'
        if (caracter == '(' || caracter == '[' || caracter == '{') {
            pilha.push(caracter);// Adiciona o caractere na pilha, indicando o início de uma nova expressão
        } else if (caracter == ')' || caracter == ']' || caracter == '}') {
            let fimExpressao = pilha.pop(); // retira o último caracter de abertura da pilha
            // Verifica se não há nenhum caractere de abertura na pilha ou se o caractere atual fecha corretamente a expressão
            if (!fimExpressao || (caracter == '(' && fimExpressao == ')') || (caracter == '[' && fimExpressao == ']') ||(caracter == '{' && fimExpressao == '}')) {
                return false; // Se a expressão estiver incorreta, retorna false
            }
        }
    }
    return pilha.length == 0;// Verifica se ainda há caracteres de abertura na pilha, o que indicaria expressões não fechadas
}
function main(){
    let expressao1 = "{([])}"
    let expressao2 = "()]}"
    let expressao4 = "([{"
    let expressao5 = ")]}"

    let resposta= verificarExpressao(expressao1)
    console.log(resposta)
}
main()