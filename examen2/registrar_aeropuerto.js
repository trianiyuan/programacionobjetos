class Airport {
    constructor(country, airportName, airportCode) {
        this.country = country;
        this.airportName = airportName;
        this.airportCode = airportCode;
    }
}

function saveAirportToLocalStorage(airport) {
    let airports = JSON.parse(localStorage.getItem('airports')) || [];
    airports.push(airport); 
    localStorage.setItem('airports', JSON.stringify(airports)); 
}

document.getElementById('airportForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const country = document.getElementById('country').value.trim();
    const airportName = document.getElementById('airportName').value.trim();
    const airportCode = document.getElementById('airportCode').value.trim();

    if (!country || !airportName || !airportCode) {
        alert('Todos los campos son obligatorios.');
        return;
    }

    const newAirport = new Airport(country, airportName, airportCode);

    saveAirportToLocalStorage(newAirport);

    window.location.href = 'reserva.html';
});
