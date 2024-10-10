const users = [
    { username: 'trianiyuan', password: '12345678' },
    { username: 'triyuan', password: '87654321' },
    { username: 'tyuana', password: '22446688' }
];

// Guardar usuarios en localStorage solo si no están
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Manejo del inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Recuperar los usuarios almacenados
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    console.log('Usuarios almacenados:', storedUsers); // Verificar qué usuarios se están obteniendo

    // Verificar los datos de inicio de sesión
    const validUser = storedUsers.find(user => user.username === username && user.password === password);

    if (validUser) {
        alert('Inicio de sesión exitoso');
        window.location.href = 'reserva.html'; // Redirigir a la página de reserva
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});
