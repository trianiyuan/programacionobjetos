//factory function para crear un objeto persona
function crearPersona(nombre,apellido){
    return {
        nombre,
        apellido
    };
}
let unaPersona = crearPersona('Pedro', 'Picapiedra');
console.log(" la persona creada usando factory functions " + unaPersona)
//otra forma de crear objetos. Constructors
function Persona(nombre,apellido){
    this.nombre = nombre,
    this.apellido = apellido
}

let otraPersona = new Persona('Pedro', 'Picapiedra');
console.log("La persona creada usando constructor " + otraPersona)
//constructors es para cuando se guardan muchas personas en la memoria, entonces para que sepa que persona1 tiene ESOS "this" nombres y no de persona2
//sino que persona2 tiene los valores asignados, por ejemplo Leonardo Ruiz SON de persona2, y persona1 es Rudy Contrera

let p1 = new Persona('Kevin','Liu');
let p3 = new Persona('Triani','Yuan');

//new lo que hace es que crea un nuevo objeto en memoria, key value, estará en una caja y dentro de ese objeto póngame
//{nombre= value, apellido = value2}

console.log(p1);
console.log(this);