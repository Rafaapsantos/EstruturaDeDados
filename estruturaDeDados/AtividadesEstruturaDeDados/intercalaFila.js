function intercalaFila(fila1, fila2){
 let fila3=[] 
 while (fila1.length > 0 && fila2.length > 0) {//verifica se as filas ainda têm elementos
    fila3.push(fila1.shift())//remove e retorna o primeiro elemento de fila1, que é então adicionado a fila3
    fila3.push(fila2.shift())
}
while (fila1.length > 0) {//Após o primeiro while, se fila1 ainda tiver elementos, este while adiciona todos os elementos restantes de fila1 a fila3.
    fila3.push(fila1.shift());
}
while (fila2.length > 0) {// a mesma coisa o ultimo while
    fila3.push(fila2.shift());
}
 return fila3  
}

function main(){
   let fila1 = [1,2,3,4,5]
   let fila2 = [6,7,8,9,10,11]
   let resposta = intercalaFila(fila1, fila2)
   console.log( resposta)
}
main()