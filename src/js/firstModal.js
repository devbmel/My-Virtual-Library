const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeBtn");
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
  modal.style.display = "none";
});
