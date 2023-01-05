HTML:

CSS:

JavaScript:

- show whether book has been read or not under book display
- loop through myLibrary to add reference data-attributes whenever a book is removed

function createDisplay(bookToDisplay) {
const currentBook = document.createElement("div");
currentBook.classList.add("book-title-display");
currentBook.setAttribute("data-index", myLibrary.indexOf(bookToDisplay));
currentBook.textContent = bookToDisplay.title;
const removeButton = document.createElement("button");
removeButton.classList.add("remove-button");
removeButton.textContent = "Remove";
removeButton.addEventListener("click", (e) => {
if (confirm("Are you sure you wish to remove this book?")) {
const removeIndex = e.target.parentNode.getAttribute("data-index");
myLibrary.splice(removeIndex, 1);
e.target.parentNode.remove();

      console.log(myLibrary);
    }

});
currentBook.addEventListener("mouseover", () => {
currentBook.classList.toggle("book-title-display");
currentBook.classList.toggle("book-info-display");
currentBook.textContent = `
    Title: ${bookToDisplay.title}
    Author: ${bookToDisplay.author}
    Published: ${bookToDisplay.published}
    Pages: ${bookToDisplay.pages}
    Has Read: ${bookToDisplay.hasRead}`;
currentBook.appendChild(removeButton);
});
currentBook.addEventListener("mouseout", () => {
currentBook.classList.toggle("book-title-display");
currentBook.classList.toggle("book-info-display");
currentBook.textContent = bookToDisplay.title;
currentBook.appendChild(removeButton);
});
bookShelf.appendChild(currentBook);
}
