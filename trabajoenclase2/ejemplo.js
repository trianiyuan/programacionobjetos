// Definimos las variables
let nombre = "Juan";
let apellido = "Perez";
let puesto = "Desarrollador";
let edad = 30;
let id = 12345;
let genero = "Masculino";

// Generamos el mensaje
let mensaje = "El colaborador " + nombre + " " + apellido + ", " + genero + ", " + "cédula de identidad: " + id + " tiene " + edad + " años de edad y labora bajo el puesto de " + puesto + " en la empresa.";

// Mostramos el mensaje en la consola
console.log(mensaje);

// Crear un objeto
const colaborador = {
    nombre: "Pedro",
    apellido: "Rodriguez",
    edad: 15,
    identificacion: "10101001",
    genero: "M",
    puesto: "Gerente",
    toStringColaborador: function (){
        //return nombre + " " + edad;
        console.log (nombre + " " + edad)
    },
    nombreCompleto:function(){
        console.log(this.nombre + " " + this.apellido);
    }
};

//llamar a las propiedades
colaborador.edad = 101;
console.log(colaborador.edad);
colaborador.toStringColaborador()