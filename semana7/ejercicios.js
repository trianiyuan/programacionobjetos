/*
let a = 10;
let b = a;
a = 20;
console.log(a);
console.log(b);

suma(a);
console.log(suma(a))

function suma (d){
    console.log("El valor de d es " + d);
    let c = 5;
    d = d + c;
    return d;
} */

let obj1 = {valor: 10};
let obj2 = obj1;
obj1.valor = 20;
console.log(obj1.valor);
console.log(obj2.valor);