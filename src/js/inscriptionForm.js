const inscriptionForm = document.getElementById("inscriptionForm");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

document.getElementById("username").value = "";
document.getElementById("email").value = "";
document.getElementById("password").value = "";

inscriptionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmpassword = document
    .getElementById("confirmpassword")
    .value.trim();

  if (email === "" || password === "" || username === "") {
    alert("Tous les champs doivent être remplis.");
    return;
  } else if (username.length < 6) {
    alert("Le nom d'utilisateur doit contenir au moins 6 caractères.");
    return;
  } else if (!emailRegex.test(email)) {
    alert("Veuillez renseigner un email valide");
    return;
  } else if (password.length < 6) {
    alert("Le mot de passe doit contenir au moins 6 caractères.");
    return;
  } else if (password !== confirmpassword) {
    alert("Les mots de passe ne sont pas identiques.");
    return;
  }

  window.location.href = "home-page-user.html";
});
