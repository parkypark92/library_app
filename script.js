const myLibrary = [];
const form = document.querySelector("form");
const submit = document.querySelector("button");
const newTitle = document.getElementById("title");
const newAuthor = document.getElementById("author");
const newPublished = document.getElementById("published");
const newPages = document.getElementById("pages");
const newHasRead = document.getElementById("has-read");
const bookShelf = document.querySelector(".my-books");

function Book(title, author, published, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.published = published;
  this.pages = pages;
  this.hasRead = hasRead;
}

function displayBooks(bookToDisplay) {
  const currentBook = document.createElement("div");
  currentBook.classList.add("book");
  currentBook.textContent = bookToDisplay.title;
  bookShelf.appendChild(currentBook);
}

function addBookToLibrary(event) {
  event.preventDefault();
  const newBook = new Book(
    newTitle.value,
    newAuthor.value,
    newPublished.value,
    newPages.value,
    newHasRead.checked ? newHasRead.value : "False"
  );
  myLibrary.push(newBook);
  displayBooks(newBook);
  form.reset();
}

submit.addEventListener("click", addBookToLibrary);

const testBook = new Book("Test Book1", "Andrew Park", "2023", "300", "Off");
myLibrary.push(testBook);
displayBooks(testBook);
const testBook2 = new Book("Test Book2", "Andrew Park", "2023", "300", "Off");
myLibrary.push(testBook2);
displayBooks(testBook2);
const testBook3 = new Book("Test Book3", "Andrew Park", "2023", "300", "Off");
myLibrary.push(testBook3);
displayBooks(testBook3);
const testBook4 = new Book("Test Book4", "Andrew Park", "2023", "300", "Off");
myLibrary.push(testBook4);
displayBooks(testBook4);
const testBook5 = new Book("Test Book5", "Andrew Park", "2023", "300", "Off");
myLibrary.push(testBook5);
displayBooks(testBook5);
const testBook6 = new Book("Test Book6", "Andrew Park", "2023", "300", "Off");
myLibrary.push(testBook6);
displayBooks(testBook6);
const testBook7 = new Book("Test Book7", "Andrew Park", "2023", "300", "Off");
myLibrary.push(testBook7);
displayBooks(testBook7);
const testBook8 = new Book("Test Book8", "Andrew Park", "2023", "300", "Off");
myLibrary.push(testBook8);
displayBooks(testBook8);
const testBook9 = new Book("Test Book9", "Andrew Park", "2023", "300", "Off");
myLibrary.push(testBook9);
displayBooks(testBook9);
