function openDialog() {
  const dialog = document.getElementById("my-dialog");
  dialog.showModal();
}

function closeDialog() {
  const dialog = document.getElementById("my-dialog");
  clearFormData();
  dialog.close();
}

function clearFormData() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").value = false;
}

const myLibrary = [];

function addBookToLibrary(name) {
  return myLibrary.push(name);
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  addBookToLibrary(this.title);
}

function handleSubmit(event) {
  event.preventDefault();

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  if (read === true) {
    read = "read";
  } else {
    read = "not read";
  }

  const book = new Book(title, author, pages, read);
  console.log(book);
  console.log(myLibrary);
  closeDialog();

  let formDisplays = document.getElementById("books-display");
  let bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.innerHTML = `
  <p>${title}</p>
  <p>by ${author}</p>
  <p>${pages}</p>
  <button id="read-btn" onclick="toggleCheckbox()">${read}</button>
  <button class="delete-btn" onclick = "deleteChild(event)">delete</button>
  `;
  formDisplays.appendChild(bookCard);
}

function toggleCheckbox() {
  var checkbox = document.getElementById("read");
  checkbox.checked = !checkbox.checked; // Toggle the checkbox state
}

function deleteChild(event) {
  let bookCard = event.target.parentNode;
  bookCard.parentNode.removeChild(bookCard);
}

document
  .getElementById("library-form")
  .addEventListener("submit", handleSubmit);

Book.prototype.info = function () {
  return `${this.title} by ${this.author} has ${this.pages} pages and it is ${this.read}`;
};
