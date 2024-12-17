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

  genre.id = "genreLivre";
  author.id = "auteur";
  author.textContent = book.author;
  genre.textContent = book.genre;

  detailsDiv.appendChild(author);
  detailsDiv.appendChild(genre);

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
