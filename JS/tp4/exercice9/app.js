const input = document.getElementById('input');
const btn = document.querySelector('#add');
const list = document.querySelector('#list');

// Pour la sauvegarde des données
function save() {
    localStorage.setItem("tasksData", list.innerHTML);
}

// Pour le chargement des données
function load() {
    list.innerHTML = localStorage.getItem("tasksData") || "";
}

btn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
    save();
})

load();
