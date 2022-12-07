let myLibrary = [];

function Book(name, pages, read) {
    //the constructor
    this.name = name;
    this.pages = pages;
    this.read = read;
}

function displayBook() {
    for (let index = 0; index < myLibrary.length; index++) {
        const element = myLibrary[index];
        console.table(element);
    }
}



function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

const boyCried = {
    Author: "wofle manors",
    Bookname: "The winter soldier mano",
    pages: 345,
    read: "yes"
}

const deMan = {
    Author: "Josephat Odipo",
    Bookname: "Welcome to the josephat show",
    pages: 215,
    read: "yes"
}

const wagwan = {
    Author: "DE Ganja famer",
    Bookname: "Chronicles of the ganja farmer",
    pages: 453,
    read: "no"
}
addBookToLibrary(boyCried);
addBookToLibrary(deMan);
addBookToLibrary(wagwan);
displayBook();