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
