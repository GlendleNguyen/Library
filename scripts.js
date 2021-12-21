/**
 * Variables
 */
let myLibrary = [];

/** 
 * Constants
 */
const addButton=document.getElementById('add');

/**
 * Event Listeners
 */
addButton.addEventListener('click', openForm); 

/**
 * Classes
 */
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

/**
 * Other functions
 */
Book.prototype.info = function() {
    let text = `${title} by ${author}, ${pages} pages, ${read}`;
    return(text);
}

function newBook() {
    let book = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not yet read");
    myLibrary.push(book);
}


/**
 * Add book form functions
 */

function openForm() {
    document.getElementById("bookForm").style.display = "flex";
  }
  
  function closeForm() {
    document.getElementById("bookForm").style.display = "none";
  }

function addBook() {
    document.getElementById("newForm").reset();
    closeForm();
}