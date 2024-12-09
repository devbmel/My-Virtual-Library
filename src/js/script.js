const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeBtn");
const btnAddBook = document.getElementById("btnAddBook");
const formAddBook = document.getElementById("formAddBook");

// Ouvrir la modale lorsqu'on clique sur le bouton
openModalBtn.addEventListener("click", () => {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
});

// Fermer la modale lorsqu'on clique sur le bouton "X"
closeBtn.addEventListener("click", () => {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
});

// Fermer la modale si l'utilisateur clique en dehors de la fenêtre modale
window.addEventListener("click", (event) => {
  const modal = document.getElementById("modal");

  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Envoi du formulaire
formAddBook.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Formulaire envoyé!");
  modal.style.display = "none";
});

btnAddBook.addEventListener("click", () => {
  const inputAddTitle = document.getElementById("addTitle");
  inputAddTitle.value.trim();
  fetch(
    `https://openlibrary.org/search.json?q=${inputAddTitle.replaceAll(
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
    })
    .catch((error) => {
      console.error(error);
    });
});
