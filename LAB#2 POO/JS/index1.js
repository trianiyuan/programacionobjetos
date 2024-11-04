// VARIABLES
let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
let editingIndex = null;

// CLASE DE CONTACTOL
class Contact {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

// CONTACTOS EN LOCALSTORAGE
function saveContacts() {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

// AGREGAR//EDITAR CONTACTOS
function addOrUpdateContact(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const newContact = new Contact(name, email, phone);

    if (editingIndex !== null) {
        contacts[editingIndex] = newContact;
        editingIndex = null;
    } else {
        contacts.push(newContact);
    }

    saveContacts();
    displayContacts();
    document.getElementById('contactForm').reset();
}

// MOSTRAR CONTACTOS
function displayContacts(filter = '') {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    filteredContacts.forEach((contact, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.phone}</td>
            <td class="action-buttons">
                <button class="edit-btn" onclick="editContact(${index})">Editar</button>
                <button class="delete-btn" onclick="deleteContact(${index})">Eliminar</button>
            </td>
        `;
        contactList.appendChild(row);
    });
}

// EDITAR CONTACTOS
function editContact(index) {
    editingIndex = index;
    const contact = contacts[index];
    document.getElementById('name').value = contact.name;
    document.getElementById('email').value = contact.email;
    document.getElementById('phone').value = contact.phone;
}

// ELIMINAR UN CONTACTO
function deleteContact(index) {
    contacts.splice(index, 1);
    saveContacts();
    displayContacts();
}

// BUSCAE CONTACTOS
document.getElementById('searchBar').addEventListener('input', (event) => {
    displayContacts(event.target.value);
});


document.getElementById('contactForm').addEventListener('submit', addOrUpdateContact);

// CUANDO CARGA LA PAGINA SE MUESTRA EL CONTACTO
displayContacts();
