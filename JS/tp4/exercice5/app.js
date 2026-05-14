// Sélection des élements
const input = document.querySelector("input"); // par son nom
const btn = document.querySelector("#add"); // par son id
const list = document.querySelector("#list"); // par son id

// Création de l'évenement de click
btn.addEventListener("click", traitement)

// traitement : c'est une fonction callback
// fonction de traiment selon l'évenement
function traitement() {
    const tache = input.value.trim();

    // Vérifions que le champs input n'est pas vide
    if (tache !== "") {
        const li = document.createElement("li") // création d'un élement li enfant de ul

        li.textContent = tache; // on lui affecte le texte de l'input

        list.appendChild(li); // on ajoute le li à la liste

        input.value = ""; // on vide le champs input
    } else {
        alert("Veuillez saisir une tâche")
    }
}
