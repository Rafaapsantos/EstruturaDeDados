function clear(fila){
    while (fila.length != 0) {
        fila.shift()
    }
}

function fila(){
var fila = []
var x, y 

x= 4
fila.push(x)
fila.push(1)
fila.push(2)
fila.push(5)
fila.push(7)
console.log("Fila:" + fila)

y= fila.shift()
console.log("Elemento:" + y)
console.log("Fila:" +fila )

fila.push(10)
console.log("Fila:" +fila )
fila.shift()
console.log("Fila:" +fila )
clear(fila)
console.log("Fila:" +fila )

}
fila()

