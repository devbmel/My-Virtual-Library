const connexionForm = document.getElementById("connexionForm");

connexionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("Tous les champs doivent être remplis.");
    return;
  }

  if (username.length < 8) {
    alert("Le nom d'utilisateur doit contenir au moins 8 caractères.");
    return;
  }

  window.location.href = "home-page-user.html";
});
