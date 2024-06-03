function TabelaHash(tamanho) {
    // Construtor da TabelaHash
    // Cria um array de tamanho específico preenchido com valores nulos
    this.tabela = Array(tamanho).fill(null)
    // Função de hash para calcular o índice com base na chave
    this.hash = function(chave) {
        let hash = 1// Inicializa o hash como 1
        for (let i = 0; i < chave.length; i++) {
            // Percorre cada caractere da chave e calcula o hash somando os códigos ASCII
            hash += chave.charCodeAt(i)
        }
        return hash % tamanho// Retorna o índice calculado aplicando o operador de módulo para limitar o índice ao tamanho da tabela
    };
    this.inserir = function(chave) {
        // Calcula o índice usando a função de hash
        let index = this.hash(chave)
        // Se o índice na tabela estiver vazio (nulo), insere a chave nesse índice
        if (this.tabela[index] == null) {
            this.tabela[index] = chave
            console.log("A chave" ,chave ,"foi inserida no índice" ,index)
        } else {
            // Se o índice estiver ocupado, encontra um novo índice disponível usando sondagem linear
            let novoIndex = (index + 1) % tamanho
            // Continua procurando até encontrar um índice vazio ou voltar ao índice inicial
            while (this.tabela[novoIndex] != null && novoIndex != index) {
                novoIndex = (novoIndex + 1) % tamanho
            }
            // Se encontrou um índice vazio, insere a chave nesse índice
            if (novoIndex == index) {
                console.log("A Tabela está cheia. Não foi possível inserir a chave" ,chave)
            } else {
                this.tabela[novoIndex] = chave;
                // Se não encontrou um índice vazio, a tabela está cheia e não é possível inserir a chave
                console.log("A chave", chave ,"foi inserida no índice" ,novoIndex)
            }
        }
    };
    this.buscar = function(chave) {
        // Calcula o índice usando a função de hash
        let index = this.hash(chave)
        // Se a chave está no índice calculado, retorna true
        if (this.tabela[index] == chave) {
            console.log("A chave" , chave ,"foi encontrada no índice", index)
            return true
        } else {
            // Se não está no índice calculado, faz sondagem linear para procurar em outros índices
            let novoIndex = (index + 1) % tamanho
            // Continua procurando até encontrar a chave ou voltar ao índice inicial
            while (this.tabela[novoIndex] != chave && novoIndex != index) {
                novoIndex = (novoIndex + 1) % tamanho
            }
            // Se encontrou a chave, retorna true
            if (novoIndex == index) {
                console.log("A chave",chave,"não foi encontrada")
                return false
            } else {
                // Se não encontrou a chave, retorna false
                console.log("A chave",chave, "foi encontrada no índice",novoIndex)
                return true
            }
        }
    };
}

let tamanhoTabela = 13
let tabelaHash = new TabelaHash(tamanhoTabela)
tabelaHash.inserir('N')
tabelaHash.inserir('I')
tabelaHash.inserir('V')
tabelaHash.inserir('O')
tabelaHash.inserir('Z')
tabelaHash.inserir('U')
tabelaHash.inserir('A')
tabelaHash.inserir('E')
tabelaHash.inserir('F')
tabelaHash.inserir('R')
tabelaHash.inserir('B')
tabelaHash.inserir('L')
console.log("-----------------------")
tabelaHash.buscar('A')
tabelaHash.buscar('D')
tabelaHash.buscar('Z')