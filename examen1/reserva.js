const departureAirports = [
    "Madrid - Barajas (MAD)",
    "Barcelona - El Prat (BCN)",
    "Londres - Heathrow (LHR)",
    "Nueva York - JFK (JFK)",
    "San José - Juan Santamaría (SJO)",
    "Dubai - International (DXB)"
];

const destinationAirports = [
    "Tokio - Narita (NRT)",
    "Seúl - Incheon (ICN)",
    "Sídney - Kingsford Smith (SYD)",
    "Toronto - Pearson (YYZ)",
    "Pekín - Capital (PEK)",
    "Los Ángeles - LAX (LAX)"
];

const flightClasses = ["Primera Clase", "Clase Negocios", "Económica"];

// Selectores con localstorage
function loadSelectors() {
    const departureAirportSelect = document.getElementById('departureAirport');
    const destinationAirportSelect = document.getElementById('destinationAirport');
    const flightClassSelect = document.getElementById('flightClass');

    //Aeropuertos de Salida
    departureAirports.forEach(airport => {
        const option = document.createElement('option');
        option.value = airport;
        option.textContent = airport;
        departureAirportSelect.appendChild(option);
    });

    //Aeropuertos de Destino
    destinationAirports.forEach(airport => {
        const option = document.createElement('option');
        option.value = airport;
        option.textContent = airport;
        destinationAirportSelect.appendChild(option);
    });

    //Clase de Vuelo
    flightClasses.forEach(flightClass => {
        const option = document.createElement('option');
        option.value = flightClass;
        option.textContent = flightClass;
        flightClassSelect.appendChild(option);
    });
}

// obtener dle localstorage con.parse
function getReservations() {
    let reservations = localStorage.getItem('reservations');
    return reservations ? JSON.parse(reservations) : [];
}

// guardar en LS
function saveReservations(reservations) {
    localStorage.setItem('reservations', JSON.stringify(reservations));
}

// Eliminar de la tabla
function removeReservation(index) {
    let reservations = getReservations();
    reservations.splice(index, 1); // Eliminar la reserva en la posición 'index'
    saveReservations(reservations); // Guardar la lista actualizada
    loadReservations(); // Recargar la tabla
}

// Agregar reservación a la tabla
function addReservationToTable(reservation, index) {
    const reservationList = document.getElementById('reservationList');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${reservation.departureAirport}</td>
        <td>${reservation.destinationAirport}</td>
        <td>${reservation.departureDate}</td>
        <td>${reservation.returnDate}</td>
        <td>${reservation.numPassengers}</td>
        <td>${reservation.flightClass}</td>
        <td><button class="delete-btn" onclick="removeReservation(${index})">Eliminar</button></td>
    `;

    reservationList.appendChild(row);
}

// Cargar todas las reservas
function loadReservations() {
    const reservationList = document.getElementById('reservationList');
    reservationList.innerHTML = ''; // Limpiar la tabla antes de cargar las reservas
    const reservations = getReservations();
    reservations.forEach((reservation, index) => addReservationToTable(reservation, index));
}

// Para mostrar las reservas cuando cargue la página
document.addEventListener('DOMContentLoaded', () => {
    loadSelectors();
    loadReservations(); 
});

// Manejar el envío del formulario de reservas
document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener los datos del formulario
    const departureAirport = document.getElementById('departureAirport').value;
    const destinationAirport = document.getElementById('destinationAirport').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const numPassengers = document.getElementById('numPassengers').value;
    const flightClass = document.getElementById('flightClass').value;

    if (returnDate < departureDate) {
        alert('La fecha de regreso no puede ser anterior a la fecha de salida.');
        return; 
        }
    // Crear un objeto de reserva
    const newReservation = {
        departureAirport,
        destinationAirport,
        departureDate,
        returnDate,
        numPassengers,
        flightClass
    };

    // Mostrar en consola el objeto de reserva creado
    console.log('Reserva creada:', newReservation);

    // Almacenar en LS
    let reservations = getReservations();
    reservations.push(newReservation);
    saveReservations(reservations);

    // Agregar la reserva a la tabla
    addReservationToTable(newReservation, reservations.length - 1);

    // Limpiar el formulario
    document.getElementById('reservationForm').reset();
});
