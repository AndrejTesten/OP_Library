// array for all books
const myLibrary = [];

//book object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.setTitle = function(title) {
    this.title = title;
}
Book.prototype.setAuthor = function(author) {
    this.author = author;
}
Book.prototype.setPages = function(pages) {
    this.pages = pages;
}
Book.prototype.setRead = function(read) {
    this.read = read;
}
Book.prototype.getTitle = function() {
    return this.title;
}
Book.prototype.getAuthor = function() {
    return this.author;
}
Book.prototype.getPages = function() {
    return this.pages;
}
Book.prototype.getRead = function() {
    return this.read;
}
Book.prototype.info = function() {
    return (this.getTitle() + " by " + this.getAuthor() + ", " + this.getPages() + ", " + this.getRead());
}


let buttonAdd = document.getElementById('add-card');

//
var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

buttonAdd.addEventListener("click", function(event) {
    event.preventDefault();
    modal.style.display = "block";
})

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("bookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var title = document.getElementById("titleInput").value;
    var author = document.getElementById("authorInput").value;
    var pages = document.getElementById("pagesInput").value;

    var book = new Book(title,author,pages, false);
    myLibrary.push(book);

    addBookToPage(book);

    modal.style.display="none";

});

function addBookToPage(book) {
    const mainElement = document.querySelector('.main');
    var newBook = document.createElement('div');
    newBook.classList.add('cards');
    var titleElement = document.createElement('h2');
    titleElement.textContent = `Title: ${book.title}`;
    var authorElement = document.createElement('h2');
    authorElement.textContent = `Author: ${book.author}`;
    var pagesElement = document.createElement('h2');
    pagesElement.textContent = `Pages: ${book.pages}`;

    newBook.appendChild(titleElement);
    newBook.appendChild(authorElement);
    newBook.appendChild(pagesElement);
    mainElement.insertBefore(newBook,buttonAdd);
}
