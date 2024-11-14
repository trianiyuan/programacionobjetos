class Persona {
    constructor(nombre, id, genero, fechaNac, edad) {
        this.nombre = nombre;
        this.id = id;
        this.genero = genero;
        this.fechaNac = fechaNac;
        this.edad = edad;
    }

    toString(nombre, id) {
        return "Información del persona " + nombre + " " + id;
    }
}

class Estudiante extends Persona {
    constructor(nombre, id, genero, fechaNac, edad, carrera, fechaMat) {
        super(nombre, id, genero, fechaNac, edad);
        this.carrera = carrera;
        this.fechaMat = fechaMat;
    }

    toString(nombre, id, carrera) {
        return "Información del estudiante " + nombre + " " + id + " " + carrera;
    }
}

class Funcionario extends Persona {
    constructor(nombre, id, genero, fechaNac, edad, salario, depto, fechCont) {
        super(nombre, id, genero, fechaNac, edad);
        this.salario = salario;
        this.depto = depto;
        this.fechCont = fechCont;
    }

    toString(nombre, id, salario, depto, fechCont) {
        return "Información del funcionario " + nombre + " " + id + " " + salario + " " + depto + " " + fechCont;
    }
}

class Administrativo extends Funcionario {
    constructor(nombre, id, genero, fechaNac, edad, salario, depto, fechCont, subDpto) {
        super(nombre, id, genero, fechaNac, edad, salario, depto, fechCont);
        this.subDpto = subDpto;
    }

    toString(nombre, id, salario, depto, fechCont, subDpto) {
        return "Información del administrativo " + nombre + " " + id + " " + salario + " " + depto + " " + fechCont + " " + subDpto;
    }
}

const p = new Persona('Pedro P.','1','M','0101100',100);
const est = new Estudiante ('Pablo M.','2','M','0101100',90,'Web','0105120');
const fun = new Funcionario ('Vilma P.','3','F','0101100',93,500000,'IT','0105120');
const admin = new Estudiante ('Betty M.','4','F','0101100',85,'Financiero',
    '0105120','Contaduria');

    //CREAR UN ARREGLO QUE LMACENE OBJETOS PERSONA
personas = [];
personas.push(p);
personas.push(est);
personas.push(fun);
personas.push(admin);

//recorrer el arreglo e imprimir el toString
for(let obj of personas){
    obj.toString();
}