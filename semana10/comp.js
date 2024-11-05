class Libro{
    capitulo;
    constructor(titulo, autor){
        this.titulo = titulo
        this.autor = autor
    }
    get cap(){
        return this.capitulo;
    }
    set cap(value){
        this.capitulo = this.value;

    }
}

class capitulo{
    extension;
    nombre;
    numero;
    constructor(extension, nombre, numero){
        this.nombre = nombre;
        this.extension = extension;
        this.numero = numero;
    }
}

tmpCap = new capitulo(10, 'El final',1);
tmpLibro = new Libro('El final del verano', 'Jorge Luis Borges');
tmpCap.cap = tmpCap;