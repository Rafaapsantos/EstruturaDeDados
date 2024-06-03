function josephusVetor(n, m) {
    let pessoas = [];// Cria um vetor para armazenar as pessoas
    // Preenche o vetor com números de 1 a n, representando as pessoas
    for (let i = 1; i <= n; i++) {
        pessoas.push(i);
    }
    let aux = 0;// Variável auxiliar para controlar a posição inicial
    // Enquanto houver mais de uma pessoa no vetor
    while (pessoas.length > 1) {
        // Calcula a posição da próxima pessoa a ser removida
        aux = (aux + m - 1) % pessoas.length;
        let novoVetor= [];// Cria um novo vetor para armazenar as pessoas restantes
        // Percorre o vetor de pessoas atual
        for (let i = 0; i < pessoas.length; i++) {
            // Se a posição atual não for igual à posição a ser removida, adiciona a pessoa ao novo vetor
            if (i != aux) {
                novoVetor.push(pessoas[i]);
            }
        }
        pessoas = novoVetor;// Atualiza o vetor de pessoas com o novo vetor sem a pessoa removida
        // Se a posição a ser removida for igual ao tamanho do vetor atual, volta ao início do vetor
        if (aux == pessoas.length) {
            aux = 0;
        }
    }
    return pessoas[0];// Retorna o número da última pessoa restante no vetor
}
console.log("Número da pessoa que sobrou:", josephusVetor(5,2));
