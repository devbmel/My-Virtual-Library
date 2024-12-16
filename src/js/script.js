async function getBookDataByTitle(title) {
  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(title)}`
    );
    if (!response.ok) {
      throw new Error("Le livre n'a pas pu être recupéré");
    }
    const data = await response.json();
    return data.docs;
  } catch (error) {
    console.error(error);
  }
}

function getIconsCard() {
  const inconsDiv = document.createElement("div");
  const suppCardImg = document.createElement("img");
  const addFavImg = document.createElement("img");

  inconsDiv.className = "icones";
  suppCardImg.src = "/asset/images/annuler.png";
  addFavImg.src = "/asset/images/ajouter-aux-favoris.png";

  inconsDiv.appendChild(suppCardImg);
  inconsDiv.appendChild(addFavImg);
  return inconsDiv;
}

function getTitleCard(book) {
  const title = document.createElement("h3");
  title.id = "titreLivre";
  title.textContent = book.title;
  return title;
}

function getCover(book) {
  const coverDiv = document.createElement("div");
  const coverImg = document.createElement("img");

  coverImg.src = book.cover_img_url;
  coverDiv.className = "cover";

  coverDiv.appendChild(coverImg);
  return coverDiv;
}

function getBookDetails(book) {
  const detailsDiv = document.createElement("div");
  const author = document.createElement("h4");
  const genre = document.createElement("h4");
  const status = document.createElement("h4");

  genre.id = "genreLivre";
  author.id = "auteur";
  author.textContent = book.author;
  genre.textContent = book.genre;
  status.textContent = "Statut";

  detailsDiv.appendChild(author);
  detailsDiv.appendChild(genre);
  detailsDiv.appendChild(status);

  return detailsDiv;
}

function getWraph4(book) {
  const wraph4 = document.createElement("div");
  wraph4.className = "wraph4";
  wraph4.appendChild(getCover(book));
  wraph4.appendChild(getBookDetails(book));
  return wraph4;
}

function displayBookCard(book) {
  const booksSection = document.getElementById("bibliotheque");
  const card = document.createElement("article");

  card.className = "card";

  card.appendChild(getIconsCard());
  card.appendChild(getTitleCard(book));
  card.appendChild(getWraph4(book));

  booksSection.appendChild(card);
}

async function main() {
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

  btnAddBook.addEventListener("click", async () => {
    const inputAddTitle = document.getElementById("addTitle");
    const valueInput = inputAddTitle.value.trim();

    if (valueInput === "") {
      console.error("Please enter a book title");
      return;
    }

    const data = await getBookDataByTitle(valueInput);

    let booksStorage = data.slice(0, 10).map((book) => ({
      title: book.title,
      author: book.author_name,
      cover: book.cover_i,
      cover_img_url: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg?default=true`, // image par défaut sans image
      genre: "",
    }));
    displayBookCard(booksStorage[0]);
    localStorage.setItem("booksStorage", JSON.stringify(booksStorage));
  });
}

main();
