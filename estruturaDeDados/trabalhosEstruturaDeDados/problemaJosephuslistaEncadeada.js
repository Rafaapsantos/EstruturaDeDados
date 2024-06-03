function LinkedList() {
    // Define a função construtora Node para criar novos nós
    let Node = function(element) {
        this.element = element;// Armazena o elemento do nó
        this.next = null;// Inicializa o próximo nó como nulo
    };
    // Inicializa o comprimento da lista e a referência para o nó de cabeçalho (head)
    let length = 0;
    let head = null;

    // Método para adicionar um novo elemento ao final da lista
    this.append = function(element) {
        let node = new Node(element);// Cria um novo nó com o elemento fornecido
        let current;
        
        // Se a lista estiver vazia, define o novo nó como cabeçalho (head)
        if (head == null) {
            head = node;
        } else {
            // Se a lista não estiver vazia, percorre a lista para encontrar o último nó
            current = head;
            while (current.next != null && current.next != head) {
                current = current.next;
            }
            current.next = node; // Conecta o próximo do último nó ao novo nó
        }
        node.next = head;// Conecta o próximo do novo nó ao cabeçalho para formar um ciclo
        length++;// Incrementa o comprimento da lista
    };
    this.problemaJosephus = function(n, m) {
        for (let i = 1; i <= n; i++) {// Adiciona os números de 1 a n na lista
            this.append(i);
        }
        let current = head;// Inicializa o nó atual como o cabeçalho
        let previous = null;// Inicializa o nó anterior como nulo
        while (length > 1) {// Enquanto houver mais de uma pessoa na lista
            for (let i = 0; i < m - 1; i++) {// Percorre a lista m - 1 vezes
                previous = current;
                current = current.next;
            }
            // Remove o nó atual da lista
            if (previous) {
                previous.next = current.next;
            } else {
                head = current.next;
            }
            // Atualiza o comprimento da lista e o nó atual
            length--;
            current = current.next;
        }
        return current.element;// Retorna o elemento do nó restante na lista
    };
}
let lista = new LinkedList();
console.log("Número da pessoa que sobrou:", lista.problemaJosephus(10, 3));
