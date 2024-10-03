const personas = [];

//cómo haría usted para, a partir de esta información
// crear una tabla con la información de pedro y pablo y sus esposas

//Lo haríamos con un factory function para que tome los datos 

const Persona = {
    nombre: "Pedro",
    apellido: "Picapiedra",
    edad: 100

};
const otraPersona = {
    nombre: "Pablo",
    apellido: "Mármol",
    edad: 98
}; 

//factory function es como cualquier función
function crearPersona(nombre, apellido, edad){
    return{
        nombre,
        apellido,
        edad

    };
};
let p = crearPersona('Pablo', 'Mármol', 98)
let otra = crearPersona('Pedro', 'Picapiedra', 100)
let unaMas = crearPersona('Betty', 'Rodríguez', 70)


personas.push(persona);
personas.push(otraPersona);