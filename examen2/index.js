const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
console.log(storedUsers); 

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const messageDiv = document.getElementById('loginMessage');

    messageDiv.innerHTML = '';
    messageDiv.classList.remove('success', 'error');

    const validUser = storedUsers.find(user => user.email === email && user.password === password);

    if (validUser) {
        localStorage.setItem('username', validUser.email);

        messageDiv.classList.add('success');
        messageDiv.innerHTML = 'Inicio de sesión exitoso. Redirigiendo...';
        window.location.href = 'reserva.html'; // Redirigir a la página de reservas
    } else {
        messageDiv.classList.add('error');
        messageDiv.innerHTML = 'Correo electrónico o contraseña incorrectos.';
    }
});


function logout() {
    localStorage.removeItem('username');
    
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('welcomeMessage').style.display = 'none';
    
    window.location.href = 'index.html';
}

document.getElementById('logoutNavLink').addEventListener('click', function(e) {
    e.preventDefault(); 
    showLogoutPopup(); 
});

