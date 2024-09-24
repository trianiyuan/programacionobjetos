// Clase para representar una característica
class Caracteristica {
    constructor(nombre, descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}

// Clase para gestionar la tabla de características
class CaracteristicaManager {
    constructor() {
        this.caracteristicas = []; // Lista para almacenar todas las características
        this.tableBody = document.querySelector('#charTable tbody'); // Referencia al cuerpo de la tabla
    }

    // Método para agregar una característica
    agregarCaracteristica(caracteristica) {
        // Añadir la nueva característica al arreglo sin eliminar las anteriores
        this.caracteristicas.push(caracteristica);
        this.actualizarTabla(); // Actualizar la tabla con la nueva lista de características
    }

    // Método para actualizar la tabla
    actualizarTabla() {
        // Limpiar el contenido de la tabla antes de actualizarla
        this.tableBody.innerHTML = '';

        // Recorrer todas las características y agregarlas a la tabla
        this.caracteristicas.forEach(caracteristica => {
            const fila = document.createElement('tr');

            const nombreCelda = document.createElement('td');
            nombreCelda.textContent = caracteristica.nombre;
            fila.appendChild(nombreCelda);

            const descripcionCelda = document.createElement('td');
            descripcionCelda.textContent = caracteristica.descripcion;
            fila.appendChild(descripcionCelda);

            this.tableBody.appendChild(fila);
        });
    }
}

// Inicializar el administrador de características
const caracteristicaManager = new CaracteristicaManager();

// Capturar el botón de añadir característica
const addCharButton = document.getElementById('addCharButton');

// Capturar los campos de entrada
const charNameInput = document.getElementById('charName');
const charDescriptionInput = document.getElementById('charDescription');

// Agregar evento al botón para añadir la característica
addCharButton.addEventListener('click', () => {
    const nombre = charNameInput.value.trim();
    const descripcion = charDescriptionInput.value.trim();

    if (nombre && descripcion) {
        // Crear una nueva característica y agregarla a la tabla
        const nuevaCaracteristica = new Caracteristica(nombre, descripcion);
        caracteristicaManager.agregarCaracteristica(nuevaCaracteristica);

        // Limpiar los campos de entrada
        charNameInput.value = '';
        charDescriptionInput.value = '';
    } else {
        alert('Por favor, completa ambos campos antes de añadir la característica.');
    }
});
