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

const book1 = new Book('asd','asd',123,true);
console.log(book1.info());
