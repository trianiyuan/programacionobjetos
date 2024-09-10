// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre');
    const carnet = document.getElementById('carnet');
    const clave = document.getElementById('clave');

        // Guardar datos en localStorage
        localStorage.setItem('studentNombre', nombre.value);
        localStorage.setItem('studentCarnet', carnet.value);
        localStorage.setItem('studentClave', clave.value); // Puede ser útil para futuras validaciones

        // Redirigir a la página de prematrícula
        window.location.href = 'prematricula.html';
});
