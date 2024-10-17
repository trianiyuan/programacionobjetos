/*function Persona (){
    this.nombre = ' '
    this.edad= 0
} se puede dejar así sin nada pero no es lo común*/

function Persona (nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreCompleto = "";
    this.crearNombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
};

function Persona (nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreCompleto = "";
    this.crearNombreCompleto = function(){
        this.nombreCompleto = this.nombre + ' ' + this.apellido;
    }
};


let p = new Persona('Pedro','Picapiedra');
console.log(p.crearNombreCompleto());