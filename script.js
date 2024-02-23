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
    var readInput = document.querySelector("#myModal .switch input[type='checkbox']");
    var read = readInput.checked;
    var book = new Book(title,author,pages, read);
    myLibrary.push(book);

    addBookToPage(book, myLibrary.length - 1);

    modal.style.display="none";

});

function addBookToPage(book, index) {
    const mainElement = document.querySelector('.main');
    var newBook = document.createElement('div');
    newBook.classList.add('cards');
    var titleElement = document.createElement('h2');
    titleElement.id='title';
    titleElement.textContent = `Title: ${book.title}`;
    var authorElement = document.createElement('h2');
    authorElement.id='author'
    authorElement.textContent = `Author: ${book.author}`;
    var pagesElement = document.createElement('h2');
    pagesElement.textContent = `Pages: ${book.pages}`;
    pagesElement.id='pages';
    var readElement = document.createElement('h2');
    readElement.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
    var deleteButton = document.createElement('div');
    deleteButton.id = 'delete';
    deleteButton.innerHTML = '<i class="bx bxs-message-square-x"></i>';
    deleteButton.addEventListener('click', function() {
        var index = parseInt(newBook.getAttribute('data-index'));
        myLibrary.splice(index, 1);
        mainElement.removeChild(newBook);
    });

    newBook.appendChild(titleElement);
    newBook.appendChild(authorElement);
    newBook.appendChild(pagesElement);
    newBook.appendChild(readElement);
    newBook.appendChild(deleteButton);
    mainElement.insertBefore(newBook,buttonAdd);
    newBook.setAttribute('data-index', index);
}

let unreadBttn = document.getElementById('unread');
unreadBttn.addEventListener('click', filterRead);
function filterRead() {
    event.preventDefault();
    const mainElement = document.querySelector('.main');
 for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookElement = mainElement.children[i];
    if (!book.read) {
        bookElement.style.display = 'block';
        modal.style.display = 'none';
    } else {
        bookElement.style.display = 'none';
    }
 }
}

