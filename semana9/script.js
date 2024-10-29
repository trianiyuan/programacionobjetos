class Motor {
  constructor(serie, cilindros) {
    this.serie = serie;
    this.cilindros = cilindros;
  }
}

class Vehiculo {
  _motor;

  constructor(marca, numSerie) {
    this.marca = marca;
    this.numSerie = numSerie;
  }

  get motor() {
    return this._motor;
  }

  set motor(newMotor) {
    if (newMotor instanceof Motor) {
      this._motor = newMotor;
    } else {
      console.error("Invalid motor. Must be an instance of Motor.");
    }
  }

  mostrarInfo() {
    console.log(`Vehículo: ${this.marca} ${this.numSerie}`);
    if (this._motor) {
      console.log(`Motor: Serie ${this._motor.serie}, Cilindros ${this._motor.cilindros}`);
    } else {
      console.log("No motor assigned.");
    }
  }
}

const miVehiculo = new Vehiculo("Toyota", "5343");
miVehiculo.mostrarInfo();

const miMotor = new Motor("123", "4");
miVehiculo.motor = miMotor;

miVehiculo.mostrarInfo();
