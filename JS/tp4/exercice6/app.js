// Récuperatin des élements
const input = document.querySelector("#input");
const btn = document.querySelector("#add");
const list = document.querySelector("#list");

// Evenement d'ajout d'une tâche
btn.addEventListener("click", addTask)
function addTask() {
    if (input.value !== "") {
        const li = document.createElement("li")
        li.innerHTML = `${input.value} <button class="done">Done</button> <button class="del">Del</button>`;
        list.appendChild(li);
        input.value = "";
    } else {
        alert("Veuillez saisir une tâche")
    }
}

// Evenement de gestion d'une tâche
list.addEventListener("click", manageTasks);
function manageTasks(evt) {
    // Complèter une tâche
    if (evt.target.classList.contains("done")) {
        evt.target.parentElement.classList.toggle("completed")
    }

    // Supprimer une tâche
    if (evt.target.classList.contains("del")) {
        evt.target.parentElement.remove();
    }
}
