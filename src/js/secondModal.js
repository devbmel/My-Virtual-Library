function getListBooksFromAPI(books, resultsModal) {
  const resultsList = document.createElement("ul");

  resultsList.id = "resultsList";

  for (const book of books) {
    let listItem = document.createElement("li");
    listItem.textContent = `${book.title} - ${book.author}`;
    listItem.addEventListener("click", () => {
      displayBookCard(book);

      // Récupérer les données existantes ou initialiser une liste vide
      let cardBook = JSON.parse(localStorage.getItem("cardBook") || "[]");

      cardBook.push(book);

      localStorage.setItem("cardBook", JSON.stringify(cardBook));

      resultsModal.style.display = "none";
      resultsModal.remove();
    });

    resultsList.appendChild(listItem);
  }

  return resultsList;
}

function getModalContent(books, resultsModal) {
  const modalContent = document.createElement("div");
  const closeBtn = document.createElement("span");
  const selectTitle = document.createElement("h2");

  selectTitle.textContent = "Sélectionnez un livre";
  modalContent.className = "modal-content";
  closeBtn.className = "close";
  closeBtn.addEventListener("click", () => {
    resultsModal.style.display = "none";
    resultsModal.remove();
  });

  modalContent.appendChild(closeBtn);
  modalContent.appendChild(selectTitle);
  modalContent.appendChild(getListBooksFromAPI(books, resultsModal));

  return modalContent;
}

function displayResultsModal(books) {
  const resultsModal = document.createElement("div");

  resultsModal.id = "resultsModal";
  resultsModal.className = "modal";
  resultsModal.style.display = "block";

  resultsModal.appendChild(getModalContent(books, resultsModal));
  document.body.appendChild(resultsModal);
}
