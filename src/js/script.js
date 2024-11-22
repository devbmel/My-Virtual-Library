let bibliotheque = {
  livre: [
    {
      Titre: "Dracula",
      Auteur: "Bram Stocker",
      Page: 400,
      Genre: "fantastique",
    },
    {
      Titre: "Mémoires de la forêt",
      Auteur: "Mickaël Brun-Arnaud",
      Page: 320,
      Genre: "jeunesse",
    },
    {
      Titre: "Harry Potter",
      Auteur: "J.K Rowling",
      Page: 400,
      Genre: "fantasy",
    },
    {
      Titre: "L'assassin Royal",
      Auteur: "Robin Robb",
      Page: 400,
      Genre: "fantasy",
      Description:
        "Au royaume des Six-Duchés, le prince Chevalerie, de la famille régnante des Loinvoyant - par tradition, le nom des seigneurs doit modeler leur caractère - décide de renoncer à son ambition de devenir roi-servant en apprenant l'existence de Fitz, son fils illégitime. ",
    },
    {
      Titre: "Fils des brumes",
      Auteur: "Brandon Sanderson",
      Page: 500,
      Genre: "fantasy",
    },
    {
      Titre: "Le seigneur des anneaux intégrale",
      Auteur: "J.R.R Tolkien",
      Page: 1000,
      Genre: "fantasy",
    },
    {
      Titre: "La Horde du contrevent",
      Auteur: "Alain Damasio",
      Page: 500,
      Genre: "fantasy",
    },
    {
      Titre: "Les royaumes du nord",
      Auteur: "Philip Pullman",
      Page: 400,
      Genre: "fantasy",
    },
    {
      Titre: "Le nom du vent",
      Auteur: "Patrick Rothfuss",
      Page: 600,
      Genre: "fantasy",
    },
  ],
};

// const libraryList = document.getElementById("libraryList");

// for (const livre of bibliotheque.livre) {
//   for (const [cleLivre, valeurLivre] of Object.entries(livre)) {
//     const li = document.createElement("li");

//     li.textContent = valeurLivre;
//     libraryList.appendChild(li);
//   }
// }

const titreLivre = document.getElementById("titreLivre");
const auteurLivre = document.getElementById("auteur");
const genreLivre = document.getElementById("genreLivre");
const descriptionLivre = document.getElementById("description");
const couvertureLivre = document.createElement("img");
const supprimerCard = document.getElementById("suppCard");

const livre = bibliotheque.livre[3];

titreLivre.textContent = livre.Titre;
auteurLivre.textContent = livre.Auteur;
genreLivre.textContent = livre.Genre;
descriptionLivre.textContent = livre.Description;

couvertureLivre.src =
  "https://m.media-amazon.com/images/I/51Mg715fLvL._SX195_.jpg";

const couvertureElement = document.getElementsByClassName("couverture")[0];
couvertureElement.appendChild(couvertureLivre);

supprimerCard.addEventListener("click", () => {
  document.getElementById("card1").remove;
  // alert("supprimer");
});
