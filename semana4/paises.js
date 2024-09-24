// Tomamos las instancias del botón
const addCountryCharBtn = document.getElementById('addCharButton');
//arreglo que va a ir guardando las caracteristicas
const characArray= [];
//se va a definir el handler del botón, el handler escuchara cada vez que se le de click al boton
const addCountryCharHandler = () => {//se va a definir el handler del botón, el handler escuchara cada vez que se le de click al boton

    // Tomar los valores del formulario
    let nameValue = document.getElementById('charName').value;
    let description = document.getElementById('charDescription').value;

    // Validaciones
    if (!nameValue || !description) {
        alert('Completa ambos campos.');
        return; // Salir si hay campos vacíos
    }

    // Verificar si la característica ya existe
    const exists = characArray.some(c => Object.keys(c)[0] === nameValue);
    if (exists) {
        alert('Esta característica ya fue añadida.');
        return; // Salir si la característica ya existe
    }

    // Crear el objeto
    let characteristic = {
        [nameValue]: nameValue,
        description, //este no coupa ponerlo entre[] porque al buscar [nameValue], ya la description lo liga y lo reconoce a ese nameValue
    };
    console.log(characteristic);

    // Agregar cada característica al arreglo
    characArray.push(characteristic);
    showCharacteristics();

    // Imprimir el arreglo en la consola
    console.log(characArray);
};

//agregar a la tabla de caracteristicas cada caracteristica
const showCharacteristics = () =>{
    //.tomar la tabla
    const charTable = document.getElementById('charTable').getElementsByTagName('tbody')[0];
    characArray.forEach((c) => {
        const charRow = charTable.insertRow();
        //nombre.
        const nameCell = charRow.insertCell(0);
        //recorremos la coleccion key-values, y vamos a pedir el property que no sea la descripcion
        for (const key in c) {
            if (key !== 'description') {
                nameCell.textContent = key;
            }
        }
        //descripcion. se guarda la informacion 
        const descriptionCell = charRow.insertCell(1);
        descriptionCell.textContent = c.description
    });
    //recorrer el arreglo
    //delcara la fila y la celda
}
    

// Asignar el handler al botón, asociar el evento al boton
addCountryCharBtn.addEventListener('click', addCountryCharHandler);


