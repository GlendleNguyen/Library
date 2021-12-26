const bookshelf = document.getElementById('cards');

let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

Book.prototype.info = function () {
    let text = `${title} by ${author}, ${pages} pages, ${read}`;
    return (text);
}

function pushBook(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function deleteBook(arrayIndex) {
    myLibrary.splice(arrayIndex, 1);
}

function clearModalFields() {
    document.getElementById('bookName').value = "";
    document.getElementById('bookAuthor').value = "";
    document.getElementById('bookPages').value = "";
    document.getElementById('bookRead').checked = false;
}

function addFromModal() {
    let title = document.getElementById('bookName').value;
    let author = document.getElementById('bookAuthor').value;
    let pages = document.getElementById('bookPages').value;
    let read = document.getElementById('bookRead').value;

    pushBook(title, author, pages, read);
    displayBooks();
    clearModalFields();
}

function displayBooks() {
    // clear existing shelf
    bookshelf.innerHTML = '';

    // iterate through library, create and display book cards
    for (let i = 0; i < myLibrary.length; i++) {

        let bookCard = document.createElement('div');
        let bookTitle = document.createElement('div');
        let bookAuthor = document.createElement('div');
        let bookPages = document.createElement('div');
        let readButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        bookTitle.innerText = `Title: ${myLibrary[i].title}`; 
        bookAuthor.innerText = `Author: ${myLibrary[i].author}`;
        bookPages.innerText = `Pages: ${myLibrary[i].pages}`;
        deleteButton.innerText = "Remove" 

        bookCard.classList.add("book-card");
        bookCard.setAttribute("id", i);
        bookTitle.classList.add("card-title");

        console.log(`Title: ${myLibrary[i].title}, cardAttributeID: ${bookCard.id}`);

        // Delete button removes bookcard and corresponding book in array by index value
        deleteButton.addEventListener('click', () => {
            bookshelf.removeChild(bookCard);
            myLibrary.splice(bookCard.id, 1);
        })

        // TODO
        let readStatus = myLibrary[i].read;
        if (readStatus == true) {
            readButton.style.backgroundColor = "lightgreen";
            readButton.innerText = "Read";
        } else {
            readButton.style.backgroundColor = "lightcoral";
            readButton.innerText = "Not Read";
        };

        // TODO
        readButton.addEventListener('click', () => {
            if (readStatus) {
                readStatus = false;
                readButton.innerText = "Not Read";
                readButton.style.backgroundColor = "lightcoral";
            } else {
                readStatus = true;
                readButton.innerText = "Read";
                readButton.style.backgroundColor = "lightgreen";
            }
        })

        bookCard.append(bookTitle, bookAuthor, bookPages, readButton, deleteButton);
        bookshelf.appendChild(bookCard);
    }
}