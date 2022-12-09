const addBook = document.getElementById("submit");
addBook.addEventListener("click", addBookToLibrary);

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = form.title.value;
    this.author = form.title.value;
    this.pages = form.title.value;
    this.read = form.read.checked;
}

function addBookToLibrary() {
    event.preventDefault();
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.table(myLibrary);
    form.reset();
}