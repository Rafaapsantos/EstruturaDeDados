// Define uma função construtora para a lista ligada (LinkedList)
function LinkedList(){
    // Define uma função construtora interna para criar novos nós (Node)
    // Cada nó terá um 'element' para armazenar dados e um 'next' para apontar para o próximo nó
    let Node= function(element){
        this.element = element;// Armazena o dado do nó
        this.next = null;// Inicialmente, o próximo nó é nulo
    };
    let length = 0;// Inicializa o comprimento da lista ligada com zero
    let head= null;// Inicializa a cabeça (head) da lista ligada como nulo

    // Método para adicionar um novo elemento ao final da lista ligada
    this.append = function(element){
        // Cria um novo nó com o elemento fornecido
        let node = new Node (element), current;
        // Se a cabeça da lista estiver vazio, o novo nó se torna o cabeçalho
        if (head == null) {
            head = node;
        }else{
            // Caso contrário, percorre a lista até encontrar o último nó
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;// Define o próximo do último nó como o novo nó
        }
        length++;// Incrementa o comprimento da lista
    };
    this.size = function(){
        return length;
    };
    //exercicio letra a: mostrar todos os elementos da lista
    this.toString = function() {
        // Inicializa uma variável 'current' com o nó de cabeçalho (head) e uma string vazia 'string'
        let current = head, string = ''
        // Percorre a lista enquanto houver nós (enquanto 'current' não for nulo)
        while (current) {
             // Adiciona o elemento do nó atual à string
            // Se houver um próximo nó, adiciona ' -> ' após o elemento
            string += current.element + (current.next ? ' -> ' : '')
            // Move para o próximo nó na lista
            current = current.next
        }
        return string;
    };
    //exercicio letra b: remove o 1° elemento da lista
//    this.shift = function(){
//        if (head != null) {
//            let removeElement = head.element;
//            head = head.next;
//            length--;
//            console.log("Elemento removido:", removeElement);
//        }else{
//            console.log("Lista vazia - nenhum elemento para remover");
//        }
//    };
    this.removePrimeira = function(){
        let current= head // Inicializa a variável 'current' com o nó de cabeçalho (head)
        //verifica se 'head' é nulo, ou seja, se a lista está vazia.
        if (head == null) {
            return-1// Se a lista estiver vazia, retorna -1 indicando que não há elementos para remover
        }else{
            head = current.next// Define o cabeçalho (head) como o próximo nó na lista
            length--// Decrementa o comprimento da lista
            return current.element// Retorna o elemento do nó que foi removido
        }
    };
    //exercicio letra c: Inserir um elemento no início da lista
    this.insertFirst = function(element) {
        // Cria um novo nó com o elemento fornecido
        let node = new Node(element);
        node.next = head;// Define o próximo do novo nó como o atual cabeçalho (head)
        head = node;// Atualiza o cabeçalho (head) para o novo nó
        length++;// Incrementa o comprimento da lista
    };
    //exercicio letra d: retorna a posição do elemento na lista. se o elemento não 
    //existir. retorne -1
    this.returnPosition = function(element){
        // Inicializa uma variável auxiliar 'aux' para rastrear a posição atual, começando em 0
        let aux = 0;
        let current = head;// Inicializa a variável 'current' com o nó de cabeçalho (head)
        // Percorre a lista enquanto houver nós (enquanto 'current' não for nulo)
        while(current){
            // Verifica se o elemento do nó atual é igual ao elemento buscado
            if (current.element == element) {
                return aux;// Se encontrar, retorna a posição atual (aux)
            }
            aux++;// Incrementa a variável auxiliar 'aux' para a próxima posição
            current = current.next;// Move para o próximo nó na lista
        }
        return -1// Se o elemento não for encontrado, retorna -1 indicando que o elemento não está na lista
    };
    //exercicio letra e: remover um elemento de uma posição específica da lista
    this.removePosicao = function(posicao){
    // Verifica se a posição fornecida é válida (maior que -1 e menor que o comprimento da lista)
        if (posicao > -1 && posicao < length) {
            let current = head,// Inicializa a variável 'current' com o nó de cabeçalho (head)
            previous,// Inicializa a variável 'previous' que será usada para rastrear o nó anterior
            index= 0;// Inicializa a variável 'index' para rastrear a posição atual, começando em 0
             
            if (posicao == 0 ) {// Verifica se a posição a ser removida é a primeira (posição 0)
                head = current.next;// Atualiza o cabeçalho (head) para o próximo nó
            }else{
                // Percorre a lista até alcançar a posição desejada
                while (index ++ < posicao) {
                    previous = current;// Armazena o nó atual em 'previous'
                    current = current.next;// Move para o próximo nó
                }               
                previous.next = current.next;// Atualiza o próximo do nó anterior (previous) para pular o nó atual (current)
            }
            length--;// Decrementa o comprimento da lista
            return current.element;// Retorna o elemento do nó removido
        }else{
            return null;// Se a posição for inválida, retorna null
        }
    };
}
lista = new LinkedList();
lista.append(10);
lista.append(12);
lista.append(13);
lista.append(14);

console.log("Tamanho da lista:");
console.log(lista.size());

console.log("Elementos da lista:");
console.log(lista.toString());

console.log("Remove o 1° elemento da lista:");
console.log("O elemento removido é o:",lista.removePrimeira())
console.log(lista.toString());

console.log("Insere um elemento no início da lista:");
lista.insertFirst(5)
console.log(lista.toString());

console.log("Retorna a posição do elemento na lista:");
console.log(lista.returnPosition(13))

console.log("Remove um elemento de uma posição específica da lista:");
console.log(lista.removePosicao(2))
console.log(lista.toString());

