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

function reassignIndex() {
  const books = bookShelf.children;
  for (let i = 0; i < books.length; i += 1) {
    books[i].setAttribute("data-index", i);
  }
}

function removeBookFromLibrary(e) {
  // eslint-disable-next-line no-restricted-globals, no-alert
  if (confirm("Are you sure you wish to remove this book?")) {
    const removeIndex = e.target.parentNode.getAttribute("data-index");
    myLibrary.splice(removeIndex, 1);
    e.target.parentNode.remove();
    reassignIndex();
  }
}

function createRemoveButton() {
  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", removeBookFromLibrary);
  return removeButton;
}

function createReadAndNotRead(hasRead) {
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("read-buttons");
  const readButton = document.createElement("button");
  readButton.classList.add("button-off");
  readButton.textContent = "Read";
  const notReadButton = document.createElement("button");
  notReadButton.classList.add("button-off");
  notReadButton.textContent = "Not Read";

  if (hasRead === "Yes") {
    readButton.classList.add("read-button-on");
  } else {
    notReadButton.classList.add("notRead-button-on");
  }
  readButton.addEventListener("click", () => {
    readButton.classList.toggle("read-button-on");
    notReadButton.classList.toggle("notRead-button-on");
    if (hasRead === "Yes") {
      // eslint-disable-next-line no-param-reassign
      hasRead = "No";
    } else {
      // eslint-disable-next-line no-param-reassign
      hasRead = "Yes";
    }
  });
  notReadButton.addEventListener("click", () => {
    notReadButton.classList.toggle("notRead-button-on");
    readButton.classList.toggle("read-button-on");
    if (hasRead === "Yes") {
      // eslint-disable-next-line no-param-reassign
      hasRead = "No";
    } else {
      // eslint-disable-next-line no-param-reassign
      hasRead = "Yes";
    }
  });
  buttonsDiv.appendChild(readButton);
  buttonsDiv.appendChild(notReadButton);
  return buttonsDiv;
}

function createDisplay(bookToDisplay) {
  const currentBook = document.createElement("div");
  currentBook.classList.add("book-title-display");
  currentBook.setAttribute("data-index", myLibrary.indexOf(bookToDisplay));
  currentBook.textContent = bookToDisplay.title;
  const titleInfo = document.createElement("p");
  titleInfo.textContent = `Title: ${bookToDisplay.title}`;
  const authorInfo = document.createElement("p");
  authorInfo.textContent = `Author: ${bookToDisplay.author}`;
  const publishedInfo = document.createElement("p");
  publishedInfo.textContent = `Published: ${bookToDisplay.published}`;
  const pagesInfo = document.createElement("p");
  pagesInfo.textContent = `Pages: ${bookToDisplay.pages}`;
  const readAndNotRead = createReadAndNotRead(bookToDisplay.hasRead);
  const currentButton = createRemoveButton();
  currentBook.addEventListener("mouseover", () => {
    currentBook.classList.toggle("book-title-display");
    currentBook.classList.toggle("book-info-display");
    currentBook.textContent = "";
    currentBook.appendChild(titleInfo);
    currentBook.appendChild(authorInfo);
    currentBook.appendChild(publishedInfo);
    currentBook.appendChild(pagesInfo);
    currentBook.appendChild(readAndNotRead);
    currentBook.appendChild(currentButton);
  });
  currentBook.addEventListener("mouseout", () => {
    currentBook.classList.toggle("book-title-display");
    currentBook.classList.toggle("book-info-display");
    currentBook.textContent = bookToDisplay.title;
    currentBook.appendChild(titleInfo);
    currentBook.appendChild(authorInfo);
    currentBook.appendChild(publishedInfo);
    currentBook.appendChild(pagesInfo);
    currentBook.appendChild(readAndNotRead);
    currentBook.appendChild(currentButton);
  });
  bookShelf.appendChild(currentBook);
}

function addBookToLibrary(event) {
  event.preventDefault();
  const newBook = new Book(
    newTitle.value,
    newAuthor.value,
    newPublished.value,
    newPages.value,
    newHasRead.checked ? newHasRead.value : "No"
  );
  myLibrary.push(newBook);
  createDisplay(newBook);
  form.reset();
}

submit.addEventListener("click", addBookToLibrary);

const testBook = new Book("Test Book1", "Andrew Park", "2023", "300", "Yes");
myLibrary.push(testBook);
createDisplay(testBook);
const testBook2 = new Book("Test Book2", "Andrew Park", "2023", "300", "No");
myLibrary.push(testBook2);
createDisplay(testBook2);
const testBook3 = new Book("Test Book3", "Andrew Park", "2023", "300", "Yes");
myLibrary.push(testBook3);
createDisplay(testBook3);
const testBook4 = new Book("Test Book4", "Andrew Park", "2023", "300", "No");
myLibrary.push(testBook4);
createDisplay(testBook4);
const testBook5 = new Book("Test Book5", "Andrew Park", "2023", "300", "No");
myLibrary.push(testBook5);
createDisplay(testBook5);
const testBook6 = new Book("Test Book6", "Andrew Park", "2023", "300", "Yes");
myLibrary.push(testBook6);
createDisplay(testBook6);
const testBook7 = new Book("Test Book7", "Andrew Park", "2023", "300", "Yes");
myLibrary.push(testBook7);
createDisplay(testBook7);
const testBook8 = new Book("Test Book8", "Andrew Park", "2023", "300", "No");
myLibrary.push(testBook8);
createDisplay(testBook8);
const testBook9 = new Book("Test Book9", "Andrew Park", "2023", "300", "No");
myLibrary.push(testBook9);
createDisplay(testBook9);
