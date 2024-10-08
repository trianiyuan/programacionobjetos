 // Función para obtener los libros almacenados en localStorage
function getBooks() {
    let books = localStorage.getItem('books');
    return books ? JSON.parse(books) : [];
}

// Función para guardar los libros en localStorage
function saveBooks(books) {
    localStorage.setItem('books', JSON.stringify(books));
}

// Función para eliminar un libro de localStorage y de la tabla
function removeBook(index) {
    let books = getBooks();
    books.splice(index, 1); // Elimina el libro en la posición 'index'
    saveBooks(books); // Guarda la lista actualizada en localStorage
    loadBooks(); // Vuelve a cargar los libros en la tabla
}

// Función para agregar un libro a la tabla y actualizar localStorage
function addBookToTable(book, index) {
    const bookList = document.getElementById('bookList');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td>${book.genre}</td>
        <td><button class="delete-btn" onclick="removeBook(${index})">Eliminar</button></td> <!-- Botón Eliminar con clase -->
    `;


    bookList.appendChild(row);
}

// Función para cargar todos los libros almacenados en la tabla
function loadBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Limpiar la tabla antes de cargar los libros
    const books = getBooks();
    books.forEach((book, index) => addBookToTable(book, index));
}

// Mostrar libros almacenados al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const books = getBooks();
    books.forEach(book => addBookToTable(book));
});

// Manejar el envío del formulario
document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener los datos del formulario
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;

    // Crear un objeto libro
    const newBook = { 
        title,
        author, 
        year, 
        genre 
    };

    // Almacenar el libro en localStorage
    let books = getBooks();
    books.push(newBook);
    saveBooks(books);

    // Agregar el libro a la tabla
    addBookToTable(newBook);

    // Confirmación en la consola
    console.log('Libro almacenado:', newBook);

    // Limpiar el formulario
    document.getElementById('bookForm').reset();
    });