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
let book


let myLibrary = [
];

Book.prototype.toggleRead = function() {
  if (this.readStatus === "Read") {
    this.readStatus = "Not Read";
  } else if (this.readStatus === "Not Read") {
    this.readStatus = "Read";
  }   
}

function Book(name, author, page, readStatus) {
  this.name = name;
  this.author = author;
  this.page = page;
  this.readStatus = readStatus;
}

function addBookToLibrary(readstatus) {
  container.textContent = "";

  book = new Book(title.value, author.value, pages.value, readstatus);
  
  // console.log(Book.prototype.toggleRead());
  myLibrary.push(book);
  
}

console.log(book)

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
      paraName.textContent = `${myLibrary[i].name}`;
      paraAuthor.textContent = `${myLibrary[i].author}`;
      paraPage.textContent = `${myLibrary[i].page}`;
      toggleReadButton.textContent = `${myLibrary[i].readStatus}`;
      removeButton.textContent = `Remove`

      bookCard.setAttribute("id", i);

      toggleReadButton.addEventListener("click", () => {
        myLibrary[i].toggleRead();
        toggleReadButton.textContent = myLibrary[i].readStatus; 
      })

      bookCard.appendChild(paraName);
      bookCard.appendChild(paraAuthor);
      bookCard.appendChild(paraPage); 
      buttonGroup.appendChild(toggleReadButton);
      buttonGroup.appendChild(removeButton);

      bookCard.appendChild(buttonGroup);
      container.appendChild(bookCard); 
  }   

  toggleReadButton = document.querySelectorAll(".toggleReadButton");
  removeButton = document.querySelectorAll(".remove-button"); 
  readStatus = document.querySelector("#readStatus");
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
      const parentID = Number(removeButtons.parentElement.parentElement.id);
      const parentElm = document.getElementById(`${parentID}`);


      const newArr = myLibrary.filter((item, index) => {
        return parentID !== index
      })

      parentElm.remove();
      myLibrary = newArr;
    })
  })

}