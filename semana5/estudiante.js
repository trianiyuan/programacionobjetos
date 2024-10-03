//tomando los datos de un formulario
//let nombre = document.getElementById("nombre").value;
//let apellido = document.getElementById("apellido").value;
//let carrera = document.getElementById("carrera").value;


//usando el factory function
function createStudent(nombre,apellido,carrera){
    return{
        nombre,
        apellido,
        carrera,
        nombreCompleto: function (){
            return "El nombre completo del estudiante es " + nombre + " " + apellido;
        },
        toString:function(){
            return "Los detalles del estuidante son " + nombre + " " + apellido + " " + carrera; 
        }
    }
}

let student = createStudent("Pedro", "Picapiedra", "Construcción");
save(student);
print();

// en caso de hacerlo con form sería: 
//let another = createStudent(nombre,apellido,carrera)

let otro = createStudent("Vilma", "Picapiedra", "Derecho");
save(otro);
print();

console.log(student.nombreCompleto());
console.log(student.toString());
console.log(student.nombreCompleto());


//funcion que retorna la infor del local storage
function selectAll(){
    let estudiantes = JSON.parse(localStorage.getItem('lista')); //tomo el valor del LocalStorage
    if(estudiantes == null){
        estudiantes = [];
    }
    return estudiantes;
}

function save(e){
    let listaEstudiantes = selectAll(); //se obtiene la lista del LS
    listaEstudiantes.push(e);// se añade el parámetro a la lista
    localStorage.setItem('lista', JSON.stringify(listaEstudiantes));
}

function print(){
    let lista = selectAll();
    console.log(lista);
}