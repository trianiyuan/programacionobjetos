class Persona {
    constructor(nombre, identificacion, genero, fechaNacimiento) {
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.genero = genero;
        this.fechaNacimiento = new Date(fechaNacimiento);
        this.edad = this.calcularEdad();
    }

    // Método para calcular la edad basado en la fecha de nacimiento
    calcularEdad() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth();
        if (mes < this.fechaNacimiento.getMonth() || (mes === this.fechaNacimiento.getMonth() && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }

    // Método toString simplificado
    toString() {
        return `${this.nombre} (ID: ${this.identificacion}), Edad: ${this.edad}`;
    }
}

class Funcionario extends Persona {
    constructor(nombre, identificacion, genero, fechaNacimiento, salario, departamento, fechaContratacion) {
        super(nombre, identificacion, genero, fechaNacimiento);
        this.salario = salario;
        this.departamento = departamento;
        this.fechaContratacion = new Date(fechaContratacion);
    }

    // Método toString para Funcionario
    toString() {
        return `${super.toString()}, Salario: ${this.salario}, Departamento: ${this.departamento}`;
    }
}

class Profesor extends Funcionario {
    constructor(nombre, identificacion, genero, fechaNacimiento, salario, departamento, fechaContratacion, anosExperiencia, especialidad, tasaPorHora, horasTrabajadas) {
        super(nombre, identificacion, genero, fechaNacimiento, salario, departamento, fechaContratacion);
        this.anosExperiencia = anosExperiencia;
        this.especialidad = especialidad;
        this.tasaPorHora = tasaPorHora;
        this.horasTrabajadas = horasTrabajadas;
    }

    // Método toString para Profesor
    toString() {
        return `${super.toString()}, Años de Experiencia: ${this.anosExperiencia}, Especialidad: ${this.especialidad}, Tasa por Hora: ${this.tasaPorHora}, Horas Trabajadas: ${this.horasTrabajadas}`;
    }

    // Método para calcular el salario basado en la tasa por hora y las horas trabajadas
    calcularSalario() {
        return this.tasaPorHora * this.horasTrabajadas;
    }
}

class Administrativo extends Funcionario {
    constructor(nombre, identificacion, genero, fechaNacimiento, salario, departamento, fechaContratacion) {
        super(nombre, identificacion, genero, fechaNacimiento, salario, departamento, fechaContratacion);
    }

    // Método toString para Administrativo
    toString() {
        return `${super.toString()}, Cargo: Administrativo`;
    }
}

// Crear una instancia de Persona
const persona = new Persona('Pedro', '123456789', 'Masculino', '1985-03-23');
console.log(persona.toString());

// Crear una instancia de Funcionario
const funcionario = new Funcionario('Juan', '987654321', 'Masculino', '1980-11-10', 3000, 'Recursos Humanos', '2015-05-20');
console.log(funcionario.toString());

// Crear una instancia de Profesor
const profesor = new Profesor('Pablo', '234567890', 'Masculino', '1975-07-15', 4000, 'Matemáticas', '2010-03-01', 15, 'Cálculo', 30, 20);
console.log(profesor.toString());
console.log(`Salario del Profesor: ${profesor.calcularSalario()}`);

// Crear una instancia de Administrativo
const administrativo = new Administrativo('Ana', '345678901', 'Femenino', '1990-04-22', 2500, 'Administración', '2020-08-15');
console.log(administrativo.toString());

