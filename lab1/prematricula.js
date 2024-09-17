document.addEventListener('DOMContentLoaded', () => {
    const courses = ['Base de Datos', 'Diseño Web', 'Programación', 'Fundamentos de Programación', 'Ciberseguridad'];
    const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];

    // Recuperar los datos del localStorage
    const nombre = localStorage.getItem('studentNombre') || 'Nombre del Estudiante';
    const carnet = localStorage.getItem('studentCarnet') || 'Carnet del Estudiante';

    function updateStudentInfo() {
        document.getElementById('studentInfo').innerHTML = `
            <strong>Carnet:</strong> ${carnet}<br>
            <strong>Nombre:</strong> ${nombre}
        `;
    }

    function updateCourseLists() {
        const courseList = document.getElementById('courseList');
        const enrolledCoursesList = document.getElementById('enrolledCourses');

        courseList.innerHTML = '';
        enrolledCoursesList.innerHTML = '';

        // Mostrar cursos disponibles
        courses.forEach(course => {
            if (!enrolledCourses.some(enrolled => enrolled.startsWith(course.split(' ')[0]))) {
                const li = document.createElement('li');
                li.className = 'list-group-item d-flex justify-content-between align-items-center';
                li.textContent = course;

                const btn = document.createElement('button');
                btn.className = 'btn btn-primary btn-sm';
                btn.textContent = 'Incluir';
                btn.onclick = () => openHorarioModal(course);

                li.appendChild(btn);
                courseList.appendChild(li);
            }
        });

        // Mostrar cursos prematriculados
        enrolledCourses.forEach(course => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.textContent = course;

            const btn = document.createElement('button');
            btn.className = 'btn btn-danger btn-sm';
            btn.textContent = 'Eliminar';
            btn.onclick = () => excludeCourse(course);

            li.appendChild(btn);
            enrolledCoursesList.appendChild(li);
        });
    }

    function openHorarioModal(course) {
        console.log('Abrir modal para curso:', course);
        // Configura el curso a incluir en el modal
        document.getElementById('courseToInclude').value = course;
        // Abre el modal
        $('#horarioModal').modal('show');
    }

    document.getElementById('horarioForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const course = document.getElementById('courseToInclude').value;
        const horario = document.getElementById('horarioSelect').value;

        if (horario) {
            // Añade el curso con el horario seleccionado
            enrolledCourses.push(`${course} (${horario})`);
            localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
            updateCourseLists();
            // Cierra el modal
            $('#horarioModal').modal('hide');
        } else {
            alert('Por favor, seleccione un horario.');
        }
    });

    function excludeCourse(course) {
        console.log('Excluir curso:', course);

        // Elimina el curso de la lista de prematrícula
        const index = enrolledCourses.findIndex(enrolled => enrolled === course);
        if (index !== -1) {
            enrolledCourses.splice(index, 1);
            localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
            updateCourseLists();
        }
    }

    updateStudentInfo();
    updateCourseLists();
});


