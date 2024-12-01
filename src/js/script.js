// const titreLivre = document.getElementById("titreLivre");
// const auteurLivre = document.getElementById("auteur");
// const genreLivre = document.getElementById("genreLivre");
// const descriptionLivre = document.getElementById("description");
// const couvertureLivre = document.createElement("img");
// const supprimerCard = document.getElementById("suppCard");

// const livre = bibliotheque.livre[3];

// titreLivre.textContent = livre.Titre;
// auteurLivre.textContent = livre.Auteur;
// genreLivre.textContent = livre.Genre;
// descriptionLivre.textContent = livre.Description;

supprimerCard.addEventListener("click", () => {
  document.getElementById("card1").remove;
});

// Récupérer les éléments nécessaires
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeBtn");

// Ouvrir la modale lorsqu'on clique sur le bouton
openModalBtn.onclick = function () {
  modal.style.display = "block";
};

// Fermer la modale lorsqu'on clique sur le bouton "X"
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Fermer la modale si l'utilisateur clique en dehors de la fenêtre modale
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Gérer l'envoi du formulaire
document.getElementById("formAddBook").onsubmit = function (e) {
  e.preventDefault();
  alert("Formulaire envoyé !");
  modal.style.display = "none"; // Fermer la modale après l'envoi
};

btnAddBook.addEventListener("click", () => {
  const btnAddBook = document.getElementById("btnAddBook");
  const inputAddTittle = document.getElementById("addTittle").value.trim();
  fetch(
    `https://openlibrary.org/search.json?q=${inputAddTittle.replaceAll(
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
