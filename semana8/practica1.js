function addToCart(item){
    cart = []; // no usar "let" o "const" crea una variable global
    cart.push(item);
    console.log("Dentro de la función cart:", cart);
}
addToCart('Laptop');
console.log("Fuera de la función cart:", cart);//Resultado: ['Laptop']

function checkout() {
    cart = [];//esto borra la variable global 'cart'
    console.log("Todos los artículos revisados, carrito borrado:", cart);
}
checkout();
console.log("Después del pago, carrito", cart); //Resultado: []


//estructura básica de una clase
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('Hola, mi nombre es ' + this.name + ' y tengo ' + this.age + ' años de edad.');
    }
    get name(){
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}

//const person1 = new Person ('John', 30);
//person1.greet();

const person1 = new Person ('Alice', 25);
console.log(person1.name); //Output; Alice
person1.name = 'Bob'; //Sets new name
console.log(person1.name); //Output:Bob

class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    startEngine() {
        console.log(this.make + ', ' + this.model + ' motor iniciando.....');
    }
}

const myCar = new Car('Hyundai', 'Corolla');
myCar.startEngine();