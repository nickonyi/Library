const addBook = document.getElementById("submit");
addBook.addEventListener("click", addBookToLibrary);
const newBtn = document.getElementById("new-btn");
const popUp = document.getElementById("pop-up");
newBtn.addEventListener("click", () => { popUp.style.display = 'block'; });
const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    popUp.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popUp) {
        popUp.style.display = "none";
    }
}

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.read = form.read.checked;
}

function addBookToLibrary() {
    event.preventDefault();
    popUp.style.display = "none";
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    setBook();
    displayBooks();

    form.reset();
}

function displayBooks() {
    const display = document.getElementById('library-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));

    for (i = 0; i < myLibrary.length; i++) {
        createBook(myLibrary[i]);

    }
}

function setBook() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

//creating book DOM elements to be used in render
function createBook(book) {
    const library = document.getElementById("library-container");
    const bookDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const pageDiv = document.createElement("div");
    const removeBtn = document.createElement("button");
    const readBtn = document.createElement("button");

    bookDiv.classList.add('book');
    bookDiv.setAttribute("id", myLibrary.indexOf(book));

    titleDiv.textContent = book.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = book.author;
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv);

    pageDiv.textContent = book.pages;
    pageDiv.classList.add("pages");
    bookDiv.appendChild(pageDiv);

    readBtn.classList.add('read-btn');
    bookDiv.appendChild(readBtn);

    if (book.read === false) {
        readBtn.textContent = "Not read";
        readBtn.style.backgroundColor = '#e04f63';
    } else {
        readBtn.textContent = "Read";
        readBtn.style.backgroundColor = '#63da63';
    }


    removeBtn.textContent = "Remove book";
    removeBtn.setAttribute("id", "remove-btn");
    bookDiv.appendChild(removeBtn);

    library.appendChild(bookDiv);

    removeBtn.addEventListener("click", () => {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        setBook();
        displayBooks();
    });

    //add toggle ability to each read button on click
    readBtn.addEventListener("click", () => {
        book.read = !book.read;
        setBook();
        displayBooks();
    });
}