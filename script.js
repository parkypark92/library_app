const myLibrary = [];
const submit = document.querySelector("button");
const newTitle = document.getElementById("title");
const newAuthor = document.getElementById("author");
const newPages = document.getElementById("pages");
const newHasRead = document.getElementById("has-read");

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

function clearInputValues() {
  newTitle.value = "";
  newAuthor.value = "";
  newPages.value = "";
  newHasRead.value = "";
}

function addBookToLibrary(event) {
  event.preventDefault();
  const newBook = new Book(
    newTitle.value,
    newAuthor.value,
    newPages.value,
    newHasRead.checked ? newHasRead.value : "Off"
  );
  myLibrary.push(newBook);
  console.log(myLibrary);
  clearInputValues();
}

submit.addEventListener("click", addBookToLibrary);
