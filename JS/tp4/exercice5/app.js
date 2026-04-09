// Récuperatin des élements
const input = document.querySelector("#input");
const btn = document.querySelector("#add");
const list = document.querySelector("#list");

// Création de l'évenement de click
btn.addEventListener("click", traitement)

// traitement : c'est une fonction callback
// fonction de traiment selon l'évenement
function traitement() {
    // création d'un élement li enfant de ul
    const li = document.createElement("li")
    if (input.value !== "") {
        // Ajout du contenu dans l'élement
        li.textContent = input.value;

        // Insertion de l'élement li dans ul
        list.appendChild(li);

        // Vider le champ input
        input.value = "";
    } else {
        alert("Veuillez saisir une tâche")
    }
}
