function getCarData(event) {
    event.preventDefault();

    // Crear el objeto utilizando la notación de objeto literal
    const car = {
        marca: document.getElementById('marca').value,
        modelo: document.getElementById('modelo').value,
        owner: {
            id: document.getElementById('idDueño').value,
            nombre: document.getElementById('nombreDueño').value
        },
        revisionTecnica: document.getElementById('revisionTecnica').checked,
        tech_review: function() {
            console.log("Revisión técnica al día");
        }
    };

    // Añadir una propiedad fuera de la declaración
    car.tipovehiculo = "Gasolina";

    // Imprimir la nueva propiedad
    console.log('Tipo de Vehículo:', car.tipovehiculo);

    // Imprimir la información del vehículo
    console.log('Marca:', car.marca);
    console.log('Modelo:', car.modelo);
    console.log('Identificación del Dueño:', car.owner.id);
    console.log('Nombre del Dueño:', car.owner.nombre);
    console.log('¿Pasó la Revisión Técnica?:', car.revisionTecnica);
    
    // Llamar al método tech_review
    car.tech_review();

    // Eliminar la propiedad tipovehiculo
    delete car.tipovehiculo;

    // Intentar acceder a la propiedad eliminada
    console.log('Tipo de Vehículo después de eliminar:', car.tipovehiculo || 'No especificado');
    console.log(car.tipoVechiculo)
}

console.log(car.tipoVechiculo)