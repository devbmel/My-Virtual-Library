btnAddBook.addEventListener("click", async () => {
  const inputAddTitle = document.getElementById("addTitle");
  const valueInput = inputAddTitle.value.trim();

  if (valueInput === "") {
    alert("Veuillez entrer un titre de livre");
    return;
  }

  const data = await getBookDataByTitle(valueInput);

  let booksList = data.slice(0, 10).map((book) => ({
    title: book.title,
    author: book.author_name,
    cover: book.cover_i,
    cover_img_url: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
  }));

  displayResultsModal(booksList);
});
