// Tomamos las instancias del botón
const addCountryCharBtn = document.getElementById('addCharButton');
const addCountryBtn = document.getElementById('addCountryButton');
//arreglo que va a ir guardando las caracteristicas
const characArray= [];
//se va a definir el handler del botón, el handler escuchara cada vez que se le de click al boton
const addCountryHandler = () => {
    //tomar el valor del nombre y la descripcion del pais
    let countryName = document.getElementById('countryName').value;
    let countryDesc  = document.getElementById('countryDescription').value;
    let country = {
        countryName,
        countryDesc,
        characteristic: characArray
    };
    console.log(country);

};
const addCountryCharHandler = () => {//se va a definir el handler del botón, el handler escuchara cada vez que se le de click al boton

    // Tomar los valores de nombre y descripcion de la caracteristica
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
const showCharacteristics = () => {
    // Tomar la tabla y limpiar las filas antes de agregar nuevas
    const charTable = document.getElementById('charTable').getElementsByTagName('tbody')[0];
    charTable.innerHTML = ''; // Limpiar la tabla antes de agregar nuevas filas, no duplica la información

    // Recorrer el arreglo de características y agregar cada fila de nuevo
    characArray.forEach((c) => {
        const charRow = charTable.insertRow();
        
        // Nombre de la característica
        const nameCell = charRow.insertCell(0);
        for (const key in c) {
            if (key !== 'description') {
                nameCell.textContent = key;
            }
        }

        // Descripción de la característica
        const descriptionCell = charRow.insertCell(1);
        descriptionCell.textContent = c.description;
    });
};



// Asignar el handler al botón, asociar el evento al boton
addCountryCharBtn.addEventListener('click', addCountryCharHandler);
addCountryBtn.addEventListener('click', addCountryHandler);

