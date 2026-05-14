const form = document.getElementById("form");

form.addEventListener('submit', (evt) => {
    // Désactive le comportement par défaut du formulaire (rechargement de la page)
    evt.preventDefault(); // Désactiver l'évenement par défaut du formulaire
    // console.log(evt);

    const nom = document.querySelector("#nom");
    const email = document.querySelector("#email");

    const errNom = document.querySelector("#errNom");
    const errEmail = document.querySelector("#errEmail");

    // Initialiser le contenu des element span à une chaine vide
    errNom.textContent = "";
    errEmail.textContent = "";

    //Condtion de validation
    if (nom.value.trim() === "") {
        errNom.textContent = "Le champs nom est requis!";
    }

    if (email.value === "" || !email.value.trim().includes("@")) {
        errEmail.textContent = "Le format d'email est invalide!";
    }
});