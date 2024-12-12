const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeBtn");
const btnAddBook = document.getElementById("btnAddBook");
const formAddBook = document.getElementById("formAddBook");

openModalBtn.addEventListener("click", () => {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
});

formAddBook.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Formulaire envoyé!");
  modal.style.display = "none";
});

btnAddBook.addEventListener("click", () => {
  const inputAddTitle = document.getElementById("addTitle");
  inputAddTitle.value = inputAddTitle.value.trim();

  if (inputAddTitle.value === "") {
    console.error("Please enter a book title");
    return;
  }

  fetch(
    `https://openlibrary.org/search.json?q=${inputAddTitle.value.replaceAll(
      " ",
      "+"
    )}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Le livre n'a pas pu être récupéré");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let booksStorage = data.docs.slice(0, 10).map((book) => ({
        title: book.title,
        author: book.author_name,

        genre: "",
      }));

      localStorage.setItem("booksStorage", JSON.stringify(booksStorage));
      displaycardBooks(booksStorage);
    })
    .catch((error) => {
      console.error(error);
    });
});

function displayResult() {}

function displayCardBooks(books) {
  const booksContainer = document.getElementById("booksContainer");
  booksContainer.innerHTML = "";

  for (let book of books) {
    const card = document.createElement("article");
    card.className = "card";

    const inconesDiv = document.createElement("div");
    inconesDiv.className = "icones";

    const suppCardImg = document.createElement("img");
    suppCardImg.src = "/asset/images/annuler.png";
    inconesDiv.appendChild(suppCardImg);

    const addFavImg = document.createElement("img");
    addFavImg.src = "/asset/images/ajouter-aux-favoris.png";
    inconesDiv.appendChild(addFavImg);

    const title = document.createElement("h3");
    title.setAttribute("id", "titreLivre");
    title.textContent = book.title;
    card.appendChild(title);

    // booksContainer.appendChild(card);

    const wraph4 = document.createElement("div");
    wraph4.className = "wraph4";

    const couvertureDiv = document.createElement("div");
    couvertureDiv.className = "couverture";
    wraph4.appendChild(couvertureDiv);

    const detailsDiv = document.createElement("div");
    const author = document.createElement("h4");
    author.setAttribute("id", "auteur");
    author.textContent = book.author;
    card.appendChild(author);

    const genre = document.createElement("h4");
    genre.id = "genreLivre";
    genre.textContent = book.genre;
    detailsDiv.appendChild(genre);

    wraph4.appendChild(detailsDiv);
    card.appendChild(wraph4);

    card.appendChild(inconesDiv);

    booksContainer.appendChild(card);
  }
}
