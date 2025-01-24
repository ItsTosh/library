const container = document.querySelector(".book-container");
const addButton = document.querySelector(".add-button");
const submitButton = document.querySelector("#submit-button");
const dialog = document.querySelector("dialog");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
let readStatus = document.querySelector("#readStatus");
let removeButton = undefined;
let toggleReadButton = undefined;
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
      if (this.readStatus = "Read") {
        button.textContent = "Not Read";
        this.readStatus = "Not Read"
        console.log("Worked")
      } else if (this.readStatus = "Not Read") {
        button.textContent = "Read";
        this.readStatus = "Read";
        console.log("Not worked") 
      } else {
        console.log("POO")
      }
    })
  })

}

// addBookToLibrary()

function Book(name, author, page, readStatus) {
  this.name = name;
  this.author = author;
  this.page = page;
  this.readStatus = readStatus
}

function addBookToLibrary() {
  if (readStatus.checked === true) {
    readStatus = "Read";
  } else {
    readStatus = "Not Read";
  }

  const book = new Book(title.value, author.value, pages.value, readStatus);
  book.toggleRead();
  myLibrary.push(book);
}

addButton.addEventListener('click', () => {
  dialog.showModal();
})

function displayBook() {

  for (let i = 0; i < myLibrary.length; i++) {    
      const bookCard = document.createElement("div");

      bookCard.classList.add("book-card");
      bookCard.setAttribute("id", bookCounter);
      bookCounter += 1;
      bookCard.innerHTML = `
            <p>${myLibrary[i].name}</p>
            <p>${myLibrary[i].author}</p>
            <p>${myLibrary[i].page} pages</p>
            <div class="button-group">
              <button class="toggleReadButton">${myLibrary[i].readStatus}</button>
              <button class="remove-button">Remove</button>
            </div>`;  
  
      
      container.appendChild(bookCard); 
  }

  toggleReadButton = document.querySelectorAll(".toggleReadButton");
  removeButton = document.querySelectorAll(".remove-button");
  myLibrary = [];
  readStatus = document.querySelector("#readStatus")
}


displayBook()
 
submitButton.addEventListener("click", (event) => {
  if (
    title.checkValidity(),
    author.checkValidity(),
    pages.checkValidity()
  ) {
    addBookToLibrary();
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