    // Función para crear un objeto de tarea
    function crearTarea(id, titulo, descripcion, completada) {
    return {
        id: id,
        titulo: titulo,
        descripcion: descripcion,
        completada: completada
    };
    }

    // Función para agregar una tarea a la lista y guardarla en el Local Storage
    function agregarTarea(titulo, descripcion, completada) {
    // Recuperar las tareas del Local Storage (si ya existen)
    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

    // Generar un id único para la nueva tarea (puede ser el siguiente número)
    const id = tareas.length ? tareas[tareas.length - 1].id + 1 : 1;

    // Crear la nueva tarea
    const nuevaTarea = crearTarea(id, titulo, descripcion, completada);

    // Agregar la tarea al array de tareas
    tareas.push(nuevaTarea);

    // Guardar las tareas actualizadas en el Local Storage
    localStorage.setItem('tareas', JSON.stringify(tareas));
    console.log('Tarea añadida exitosamente!');
    }

    // Función para mostrar todas las tareas almacenadas en el Local Storage
    function mostrarTareas() {
    // Recuperar las tareas del Local Storage
    const tareas = JSON.parse(localStorage.getItem('tareas')) || [];

    // Verificar si hay tareas almacenadas
    if (tareas.length === 0) {
        console.log('No hay tareas almacenadas.');
    } else {
        // Mostrar cada tarea en la consola
        tareas.forEach(tarea => {
        console.log(`ID: ${tarea.id}`);
        console.log(`Título: ${tarea.titulo}`);
        console.log(`Descripción: ${tarea.descripcion}`);
        console.log(`Completada: ${tarea.completada ? 'Sí' : 'No'}`);
        console.log('---------------------------');
        });
    }
    }

// Ejemplo de uso
agregarTarea('Comprar leche', 'Ir al supermercado y comprar leche', false);
agregarTarea('Estudiar JavaScript', 'Revisar conceptos de funciones y arrays', false);

// Mostrar las tareas almacenadas
mostrarTareas();
