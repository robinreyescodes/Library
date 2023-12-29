'use strict';
let library;

//create a clickable button to add books into the library
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const ul = document.querySelector('.book-list');
const body = document.querySelector('body');
const addButton = document.querySelector('.add-button');


//loop through the items that are stored already in storage
const grabBooks = JSON.parse(localStorage.getItem('book'));
if(grabBooks !== null) {
  for (const book of grabBooks) {
    displayCreatedBooks(book);
  }
}

//stores new books into local storage and adds new books in list that gets displayed
addButton.addEventListener('click', () => {
  // get the localStorage items...if it's empty, create an empty array
  // if not, set the library to be what is in the storage.
  const storedBooks = JSON.parse(localStorage.getItem('book'));
  if (storedBooks === null) library = [];
  else library = storedBooks;

  //put the book in the library and set it into localStorage to be remembered
  const newBook = new Book(title.value, author.value);
  library.push(newBook);
  localStorage.setItem('book', JSON.stringify(library));

  //create a li element to put inside our list, display it on page
  displayCreatedBooks(newBook);

  title.value = '';
  author.value = '';
  title.focus();

})


function displayCreatedBooks(book) {
  const li = document.createElement('li');
  li.classList.add('book');
  li.innerHTML = `title: ${book.title} <br> author: ${book.author}`
  ul.insertBefore(li, ul.firstChild);
}


class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;

    console.log(`${this.title} has been added into the library`);
  }
}


