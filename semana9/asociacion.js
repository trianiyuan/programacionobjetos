class Empleado {
    constructor(nombre,id){
        this.nombre = nombre;
        this.id = id;
    }
    get cedula(){
        return this.id;
    }
    set cedula(value){
        this.id = value;
    }
    toString(){
        return "El nombre del empleado es " + this.nombre + ", la cédula del empleado es " + this.cedula;
    }
}

//codigo de la clase Computadora
class Computadora{
    responsable;
    constructor(serie,marca){
        this.serie = serie;
        this.marca = marca;
    }
    get responsable(){
        return this.responsable;
    }
    set responsable(value){
        this.responsable = value;
    }
    toString(){
        return "La información de la computadora es: " + this.marca + "," + this.serie; 
    }
}

tmpEmp = new Empleado ('Hugo',10101);
console.log(tmpEmp.toString());
tmpPc = new Computadora('XYZ','Lenovo');
tmpPC.responsable = tmpEmp;
console.log(tmpPC.responsable);
