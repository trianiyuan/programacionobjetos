function showMessage(message, type = 'error') {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message', type);  
    messageContainer.innerHTML = message;

    const container = document.getElementById('messageContainer');

    container.innerHTML = ''; 
    container.appendChild(messageContainer);

    messageContainer.style.display = 'block';  
    setTimeout(() => {
        messageContainer.style.display = 'none';  
    }, 5000);  
}

function loadSelectors() {
    const departureAirportSelect = document.getElementById('departureAirport');
    const destinationAirportSelect = document.getElementById('destinationAirport');

    const airports = JSON.parse(localStorage.getItem('airports')) || [];

    departureAirportSelect.innerHTML = '';
    destinationAirportSelect.innerHTML = '';

    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'Seleccione un aeropuerto';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    departureAirportSelect.appendChild(defaultOption);
    destinationAirportSelect.appendChild(defaultOption.cloneNode(true));

    // Agregar los aeropuertos a los selectores
    airports.forEach(airport => {
        const option = document.createElement('option');
        option.value = airport.airportCode;
        option.textContent = `${airport.airportName} (${airport.airportCode}) - ${airport.country}`;
        departureAirportSelect.appendChild(option);
        destinationAirportSelect.appendChild(option.cloneNode(true));
    });
}

function createReservation(departureAirport, destinationAirport, departureDate, returnDate, numPassengers, flightClass) {
    const flight = {
        flightNumber: Math.floor(Math.random() * 10000), 
        capacity: 200, 
        serviceYears: 5 
    };

    return {
        departureAirport,
        destinationAirport,
        departureDate,
        returnDate,
        numPassengers,
        flightClass,
        flight
    };
}

function loadReservations() {
    const username = localStorage.getItem('username');
    if (!username) {
        showMessage('No estás logueado. Por favor, inicia sesión.', 'error');
        return;
    }

    const reservationList = document.getElementById('reservationList').getElementsByTagName('tbody')[0];

    reservationList.innerHTML = '';

    const reservations = JSON.parse(localStorage.getItem('reservations_' + username)) || [];

    reservations.forEach((reservation, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${reservation.departureAirport.name} (${reservation.departureAirport.code})</td>
            <td>${reservation.destinationAirport.name} (${reservation.destinationAirport.code})</td>
            <td>${reservation.departureDate}</td>
            <td>${reservation.returnDate}</td>
            <td>${reservation.numPassengers}</td>
            <td>${reservation.flightClass}</td>
        `;

        reservationList.appendChild(row);
    });
}

document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = localStorage.getItem('username');
    if (!username) {
        showMessage('Por favor, inicia sesión para realizar una reserva.', 'error');
        return;
    }

    const departureAirportCode = document.getElementById('departureAirport').value;
    const destinationAirportCode = document.getElementById('destinationAirport').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const numPassengers = document.getElementById('numPassengers').value;
    const flightClass = document.getElementById('flightClass').value;

    if (new Date(departureDate) >= new Date(returnDate)) {
        showMessage('La fecha de salida debe ser antes que la fecha de regreso.', 'error');
        return;
    }

    const airports = JSON.parse(localStorage.getItem('airports')) || [];
    const departureAirport = airports.find(airport => airport.airportCode === departureAirportCode);
    const destinationAirport = airports.find(airport => airport.airportCode === destinationAirportCode);

    if (!departureAirport || !destinationAirport) {
        showMessage('Uno o ambos aeropuertos no están registrados.', 'error');
        return;
    }

    const newReservation = createReservation(
        { name: departureAirport.airportName, code: departureAirport.airportCode },
        { name: destinationAirport.airportName, code: destinationAirport.airportCode },
        departureDate,
        returnDate,
        numPassengers,
        flightClass
    );

    let reservations = JSON.parse(localStorage.getItem('reservations_' + username)) || [];
    reservations.push(newReservation);
    localStorage.setItem('reservations_' + username, JSON.stringify(reservations));

    showMessage('Reserva realizada con éxito.', 'success');

    document.getElementById('reservationForm').reset();

    loadReservations();
});

document.addEventListener('DOMContentLoaded', () => {
    loadSelectors();   
    loadReservations();
});
