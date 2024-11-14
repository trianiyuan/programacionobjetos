class Persona{
    constructor(nombre,id,genero,fechaNac,edad){
        this.nombre = nombre;
        this.id = id;
        this.genero = genero;
        this.fechaNac =fechaNac;
        this.edad =edad;
    }
    toString(){
        console.log("Información del persona " + nombre + " " + id);
    }
}
class Estudiante extends Persona{
    constructor(nombre,id,genero,fechaNac,edad,carrera,fechaMat) {
        super(nombre,id,genero,fechaNac,edad);
        this.carrera = carrera;
        this.fechaMat = fechaMat;
        
    }
    toString(){
        console.log("Información del estudiante " + nombre + " " + id + " " 
            + this.carrera);
    }
}
class Funcionario extends Persona{
    constructor(nombre,id,genero,fechaNac,edad,salario,
         depto, fechCont){
            super(nombre,id,genero,fechaNac,edad);
            this.salario = salario;
            this.depto = depto;
            this.fechCont = fechCont;
         }
}
class Administrativo extends Funcionario{
    constructor(nombre,id,genero,fechaNac,edad,salario,
        depto, fechCont,subDpto) {
        super(nombre,id,genero,fechaNac,edad,salario,
            depto, fechCont);
        this.subDpto = subDpto;
    }
}
const p = new Persona('Pedro P.','1','M','0101100',100);
const est = new Estudiante ('Pablo M.','2','M','0101100',90,'Web','0105120');
const fun = new Funcionario ('Vilma P.','3','F','0101100',93,500000,'IT','0105120');
const admin = new Estudiante ('Betty M.','4','F','0101100',85,'Financiero',
    '0105120','Contaduria');
