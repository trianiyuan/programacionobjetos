class Motor {
    constructor(serie, cilindros){
        this.serie = serie;
        this.cilindros = cilindros;
    }
}

class Vehiculo {
    _motor;

    constructor(marca, numSerie){
        this.marca = marca;
        this.numSerie = numSerie;
    }

    get motor(){
        return this._motor;
    }

    set motor(motor) {
        this._motor = new Motor(motor);
    }

    mostrarInfo(){
        console.log(`Vehículo: ${this.marca} ${this.numSerie}`);
    }
}

const miVehiculo = new Vehiculo("Toyota", "123");
miVehiculo.mostrarInfo();
const miMotor = newMotor("")