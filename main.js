const container = document.querySelector(".book-container");
const addButton = document.querySelector(".add-button");
const submitButton = document.querySelector("#submit-button");
const dialog = document.querySelector("dialog");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
let readStatus = document.querySelector("#readStatus");
let removeButton = document.querySelectorAll(".remove-button")
let toggleReadButton = document.querySelectorAll(".toggleReadButton");
let bookCounter = 0;
let readCounter = 0;

let myLibrary = [
  {
    name: "The Hobbit", 
    author: "J.R.R",
    page: 295,
    readStatus: "Not Read"
  },
  {
    name: "Diary of the Wimpy Kid", 
    author: "Jeff Kinney",
    page: 221,
    readStatus: "Read"
  }
];

Book.prototype.toggleRead = function() {
  toggleReadButton.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.textContent === "Not Read") {
        button.textContent = "Read";  
      } else if (button.textContent === "Read") {
        button.textContent = "Not Read";
      }
    })   
  })
}


// addBookToLibrary()

function Book(name, author, page, readStatus) {
  this.name = name;
  this.author = author;
  this.page = page;
  this.readStatus = readStatus;
}

function addBookToLibrary(readstatus) {
  const book = new Book(title.value, author.value, pages.value, readstatus);
  myLibrary.push(book);
}

addButton.addEventListener('click', () => {
  dialog.showModal();
})

function displayBook() {

  for (let i = 0; i < myLibrary.length; i++) {  
      const bookCard = document.createElement("div");
      const paraName = document.createElement("p");
      const paraAuthor = document.createElement("p");
      const paraPage = document.createElement("p");
      const buttonGroup = document.createElement("div");
      const toggleReadButton = document.createElement("button");
      const removeButton = document.createElement("button");

      bookCard.classList.add("book-card");
      buttonGroup.classList.add("button-group")
      toggleReadButton.classList.add("toggleReadButton");
      removeButton.classList.add("remove-button")
      bookCard.setAttribute("id", bookCounter);

      paraName.textContent = `${myLibrary[i].name}`;
      paraAuthor.textContent = `${myLibrary[i].author}`;
      paraPage.textContent = `${myLibrary[i].page}`;
      toggleReadButton.textContent = `${myLibrary[i].readStatus}`;
      removeButton.textContent = `Remove`

      bookCard.appendChild(paraName);
      bookCard.appendChild(paraAuthor);
      bookCard.appendChild(paraPage); 
      buttonGroup.appendChild(toggleReadButton);
      buttonGroup.appendChild(removeButton);

      bookCard.appendChild(buttonGroup);

      bookCounter++;
      container.appendChild(bookCard);  
  } 

  toggleReadButton = document.querySelectorAll(".toggleReadButton");
  removeButton = document.querySelectorAll(".remove-button"); 
  myLibrary = [];
  readStatus = document.querySelector("#readStatus");
  Book.prototype.toggleRead();
}


displayBook()
 
submitButton.addEventListener("click", (event) => {
  if (
    title.checkValidity(),
    author.checkValidity(),
    pages.checkValidity()
  ) {
    if (readStatus.checked === true) {
      addBookToLibrary("Read");
    } else if (readStatus.checked === false) {
      addBookToLibrary("Not Read")
    }
    displayBook();
    event.preventDefault()
    removeButtons();
    dialog.close();
    title.value = "";
    author.value = "";
    pages.value = "";
    readStatus.checked = false;
    }
})

function removeButtons() {

  removeButton.forEach((removeButtons) => {
    removeButtons.addEventListener("click", () => {
      const parentID = removeButtons.parentElement.parentElement.id;
      const parentElm = document.getElementById(`${parentID}`)

      parentElm.remove()
    })
  })

}

removeButtons()