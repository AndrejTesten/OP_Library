// array for all books
const myLibrary = [];

//book object
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
Book.prototype.setTitle = function (title) {
  this.title = title;
};
Book.prototype.setAuthor = function (author) {
  this.author = author;
};
Book.prototype.setPages = function (pages) {
  this.pages = pages;
};
Book.prototype.setRead = function (read) {
  this.read = read;
};
Book.prototype.getTitle = function () {
  return this.title;
};
Book.prototype.getAuthor = function () {
  return this.author;
};
Book.prototype.getPages = function () {
  return this.pages;
};
Book.prototype.getRead = function () {
  return this.read;
};
Book.prototype.info = function () {
  return (
    this.getTitle() +
    " by " +
    this.getAuthor() +
    ", " +
    this.getPages() +
    ", " +
    this.getRead()
  );
};
//Add button card
let buttonAdd = document.getElementById("add-card");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
buttonAdd.addEventListener("click", function (event) {
  event.preventDefault();
  modal.style.display = "block";
});
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Add vaalues to new book
document.getElementById("bookForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var title = document.getElementById("titleInput").value;
    var author = document.getElementById("authorInput").value;
    var pages = document.getElementById("pagesInput").value;
    var readInput = document.querySelector(
      "#myModal .switch input[type='checkbox']"
    );
    var read = readInput.checked;
    var book = new Book(title, author, pages, read);
    myLibrary.push(book);
    addBookToPage(book, myLibrary.length - 1);
    modal.style.display = "none";
  });
//Adding book to page
function addBookToPage(book, index) {
  const mainElement = document.querySelector(".main");
  var newBook = document.createElement("div");
  newBook.classList.add("cards");
  newBook.classList.add("book-card");
  var titleElement = document.createElement("h2");
  titleElement.id = "title";
  titleElement.textContent = `Title: ${book.title}`;
  var authorElement = document.createElement("h2");
  authorElement.id = "author";
  authorElement.textContent = `Author: ${book.author}`;
  var pagesElement = document.createElement("h2");
  pagesElement.textContent = `Pages: ${book.pages}`;
  pagesElement.id = "pages";
  var readElement = document.createElement("h2");
  readElement.textContent = `Read: ${book.read ? "Yes" : "No"}`;
  var deleteButton = document.createElement("div");
  deleteButton.id = "delete";
  deleteButton.innerHTML = '<i class="bx bxs-message-square-x"></i>';
  deleteButton.addEventListener("click", function () {
    var index = parseInt(newBook.getAttribute("data-index"));
    myLibrary.splice(index, 1);
    mainElement.removeChild(newBook);
  });

  newBook.appendChild(titleElement);
  newBook.appendChild(authorElement);
  newBook.appendChild(pagesElement);
  newBook.appendChild(readElement);
  newBook.appendChild(deleteButton);
  newBook.setAttribute("data-index", index);
  mainElement.appendChild(newBook); 
}

// Search modal
var modalSearch = document.getElementById("myModalSearch");
var btnSearch = document.getElementById("myBtnSearch");
var spanSearch = document.getElementsByClassName("closeSearch")[0];

btnSearch.onclick = function () {
  event.preventDefault();
  modalSearch.style.display = "block";
};

spanSearch.onclick = function () {
  modalSearch.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalSearch) {
    modalSearch.style.display = "none";
  }
};

//filter books based on read 
function filterBooks(isRead) {
  const bookCards = document.querySelectorAll(".main .book-card");
  bookCards.forEach(function (card) {
    const index = parseInt(card.getAttribute("data-index"));
    const book = myLibrary[index];
    if (book.read === isRead) {
      card.style.display = "block"; 
    } else {
      card.style.display = "none"; 
    }
  });
}

//filter books based on search 
function searchBooks(searchTerm) {
  const bookCards = document.querySelectorAll(".main .book-card");
  bookCards.forEach(function (card) {
    const index = parseInt(card.getAttribute("data-index"));
    const book = myLibrary[index];
    const titleMatch = book.title.toLowerCase().includes(searchTerm);
    const authorMatch = book.author.toLowerCase().includes(searchTerm);
    const pagesMatch = book.pages.toString().includes(searchTerm);
    if (titleMatch || authorMatch || pagesMatch) {
      card.style.display = "block"; 
    } else {
      card.style.display = "none"; 
    }
  });
}

document.getElementById("readBooks").addEventListener("click", function (event) {
    event.preventDefault();
    filterBooks(true); 
  });

document.getElementById("unreadBooks").addEventListener("click", function (event) {
    event.preventDefault();
    filterBooks(false); 
  });

document
  .getElementById("searchButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const searchTerm = document
      .getElementById("searchInput")
      .value.toLowerCase();
    searchBooks(searchTerm); 
  });

document.getElementById("allBooks").addEventListener("click", function (event) {
  event.preventDefault();
  displayAllBooks();
});

function displayAllBooks() {
  const bookCards = document.querySelectorAll(".main .book-card");
  bookCards.forEach(function (card) {
    card.style.display = "block"; 
  });
}
