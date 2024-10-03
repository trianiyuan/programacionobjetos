// Factory function para crear una mascota
function crearMascota(nombre, tipo, edad, raza, foto) {
    return {
        nombre,
        tipo,
        edad,
        raza,
        foto
    };
}

// Array para almacenar las mascotas registradas
let mascotas = [];

// Función para mostrar la lista de mascotas
function mostrarMascotas() {
    const mascotasContainer = document.getElementById('mascotas-container');
    mascotasContainer.innerHTML = ''; // Limpiar la lista antes de actualizar

    mascotas.forEach(mascota => {
        const mascotaDiv = document.createElement('div');
        mascotaDiv.classList.add('mascota-item');

        mascotaDiv.innerHTML = `
            <h3>${mascota.nombre}</h3>
            <p>Tipo: ${mascota.tipo}</p>
            <p>Edad: ${mascota.edad} años</p>
            <p>Raza: ${mascota.raza}</p>
            <img src="${mascota.foto}" alt="${mascota.nombre}">
        `;

        mascotasContainer.appendChild(mascotaDiv);
    });
}

// Función para obtener la imagen como URL base64
function obtenerImagenBase64(file, callback) {
    const reader = new FileReader();
    reader.onload = function(event) {
        callback(event.target.result);
    };
    reader.readAsDataURL(file);
}

// Capturar el formulario y registrar la mascota
document.getElementById('form-mascota').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const tipo = document.getElementById('tipo').value;
    const edad = document.getElementById('edad').value;
    const raza = document.getElementById('raza').value;
    const foto = document.getElementById('foto').files[0];

    // Convertir la foto a base64
    obtenerImagenBase64(foto, function(base64Image) {
        const mascota = crearMascota(nombre, tipo, edad, raza, base64Image);
        mascotas.push(mascota); // Agregar la mascota al array
        mostrarMascotas(); // Actualizar la lista de mascotas
    });

    // Limpiar el formulario
    document.getElementById('form-mascota').reset();
});


//---------------codigo del profe-------------------//