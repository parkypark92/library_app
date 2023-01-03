const myLibrary = [];
const form = document.querySelector("form");
const submit = document.querySelector("button");
const newTitle = document.getElementById("title");
const newAuthor = document.getElementById("author");
const newPublished = document.getElementById("published");
const newPages = document.getElementById("pages");
const newHasRead = document.getElementById("has-read");

function Book(title, author, published, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.published = published;
  this.pages = pages;
  this.hasRead = hasRead;
}

function addBookToLibrary(event) {
  event.preventDefault();
  const newBook = new Book(
    newTitle.value,
    newAuthor.value,
    newPublished.value,
    newPages.value,
    newHasRead.checked ? newHasRead.value : "Off"
  );
  myLibrary.push(newBook);
  console.log(myLibrary);
  form.reset();
}

submit.addEventListener("click", addBookToLibrary);
