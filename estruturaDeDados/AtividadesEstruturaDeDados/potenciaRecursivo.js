function potencia(num, expoente){
    if (expoente==0) {
        return 1
    }else{
        return (num * potencia(num, expoente-1) )
    }
}
let result= potencia(3,2)
console.log(result)