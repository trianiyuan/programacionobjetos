class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    toString(){
        console.log(this.nombre + ' ' + this.apellido);
    }
}

class Estudiante extends Persona {
    curso;
    constructor(nombre,apellido,curso) {
        super(nombre, apellido)
        this.curso = curso;
    }
    //defino un método toString
    toString(){
        console.log('Soy un estudiante')
    }
}

//creo una instancia persona
tmpPersona = new Persona('Pedro','Picapiedra');
console.log(tmpPersona.toString());
//creo una instancia de estudiante
tmpEstudiante = new Estudiante('Pablo', 'Mármol','Intro a la Arquitectura');
console.log(tmpEstudiante.toString());
