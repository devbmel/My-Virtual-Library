const inscriptionForm = document.getElementById("inscriptionForm");

inscriptionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const usernameValue = document.getElementById("username").value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const passwordValue = document.getElementById("password").value.trim();
  const confirmpasswordValue = document
    .getElementById("confirmpassword")
    .value.trim();

  if (usernameValue.length < 6) {
    alert("Le nom d'utilisateur doit contenir au moins 6 caractères.");
    return;
  } else if (!emailRegex.test(emailValue)) {
    alert("Veuillez renseigner un email valide");
    return;
  } else if (passwordValue.length < 6) {
    alert("Le mot de passe doit contenir au moins 6 caractères.");
    return;
  } else if (passwordValue !== confirmpasswordValue) {
    alert("Les mots de passe ne sont pas identiques.");
    return;
  }

  window.location.href = "home-page-user.html";
});
