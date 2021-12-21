let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

Book.prototype.info = function() {
    let text = `${title} by ${author}, ${pages} pages, ${read}`;
    return(text);
}

function newBook() {
    let book = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not yet read");
    myLibrary.push(book)
}



