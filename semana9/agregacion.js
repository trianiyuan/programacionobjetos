class Motor{
    constructor(cilindros,serie) {
        this.cilindros = cilindros;
        this.serie = serie;
    }
    get numeroSerie(){
        return this.numeroSerie
    }
    set numeroSerie(value){
        this.serie = value
    }
}
class Vehiculo{
    constructor(marca, serie){
        this.serie = serie;
        this.marca = marca;
    }
    get motor(){
        return this.motor
    }
    set motor(value){
        this.vMotor = value
    }
}
veh = new Vehiculo('Fiat','Palio');
tmpMotor = new Motor(2800, 'abc1234');
veh.motor = tmpMotor;
console.log(veh);

class Curso {
    constructor(codigo, nombre) {
        this.codigo = codigo;
        this.nombre = nombre;
    }
}

class Carrera {
    listaCurso;
    constructor(nombre, codigo) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.listaCurso = []; // Se asigna el arreglo de cursos
    }

    // Método para obtener la lista de cursos
    agregarCurso(curso){
        this.listaCurso.push(curso);
    }
    obtenerCurso() {
        return this.curso;
    }
}

tmpCarrera = new Carrera('Desarrollo Web', 'Webtec');
tmpCurso1 = new Curso('inf-05','Principios de programación');
tmpCarrera.listaCurso
tmpCarrera.agregarCurso(tmpCurso1)
