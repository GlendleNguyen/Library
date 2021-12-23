const books = document.getElementById('cards');

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

function pushBook(author, title, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function clearModalFields() {
    document.getElementById('bookName').value = "";
    document.getElementById('bookAuthor').value = "";
    document.getElementById('bookPages').value = "";
    document.getElementById('bookRead').checked = false;
}

function addFromModal() {
    let title = document.getElementById('bookName');
    let author = document.getElementById('bookAuthor');
    let pages = document.getElementById('bookPages');
    let read = document.getElementById('bookRead');

    pushBook(title, author, pages, read);
    displayBooks();
    clearModalFields();
}

function displayBooks() {
    

}

displayBooks(); 