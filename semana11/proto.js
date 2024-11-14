function Persona(nombre,id,genero,fechaNac,edad){
        this.nombre = nombre;
        this.id = id;
        this.genero = genero;
        this.fechaNac =fechaNac;
        this.edad =edad;
    }
function Estudiante (nombre,id,genero,fechaNac,edad,carrera,fechaMat){
    Persona.call(this,nombre,id,genero,fechaNac,edad,carrera,fechaMat);
    this.carrera = carrera;
    this.fechaMat = fechaMat;
}
Estudiante.prototype = Object.create(Persona.prototype);
const p = new Persona('Pedro P.','1','M','0101100',100);
const est = new Estudiante ('Pablo M.','2','M','0101100',90,'Web','0105120');