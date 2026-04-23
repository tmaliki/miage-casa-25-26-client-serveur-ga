// Récupérer l'element div par son id
const eltCard = document.querySelector("#card");
console.log(eltCard);

// Récupérer l'element button par son id
const eltBtn = document.querySelector("#mode");
console.log(eltBtn);

// Ecoutons l'évenement de click sur le bouton
eltBtn.addEventListener("click", () => {
    // console.log("J'ai cliqué")

    // eltCard.classList.add("dark"); // ajout la classe dark
    // eltCard.classList.remove("dark"); // supprime la classe dark

    // Ajout ou suppression de la classe "dark"
    eltCard.classList.toggle("dark");
})

