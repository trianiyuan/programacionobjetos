class Usuario {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('registerPassword').value;

    const messageDiv = document.getElementById('registerMessage');

    messageDiv.innerHTML = '';
    messageDiv.classList.remove('success', 'error');

    const newUser = new Usuario(firstName, lastName, email, password);

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const emailExists = storedUsers.some(user => user.email === email);

    if (emailExists) {
        messageDiv.classList.add('error');
        messageDiv.innerHTML = `El correo electrónico ya está registrado. <a href="index.html">Inicia sesión aquí</a>`;
        return;
    }

    storedUsers.push(newUser);

    // Guardar datos en LS
    localStorage.setItem('users', JSON.stringify(storedUsers));

    messageDiv.classList.add('success');
    messageDiv.innerHTML = `Registro exitoso. Redirigiendo a inicio de sesión... <a href="index.html">Inicia sesión aquí</a>`;

    setTimeout(() => {
        window.location.href = 'index.html'; // Redirigir a la página de inicio de sesión
    }, 2000);
});
