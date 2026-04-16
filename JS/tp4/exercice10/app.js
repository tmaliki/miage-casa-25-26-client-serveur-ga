const mode = document.querySelector("#mode");
const input = document.querySelector("#input");
const add = document.querySelector("#add");
const list = document.querySelector("#list");

mode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

add.addEventListener("click", () => {
    const li = document.createElement("li");
    li.innerHTML = `${input.value} <button class="done">Done</button><button class="del">Del</button>`;
    list.appendChild(li);
    input.value = "";
    save();
});

list.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        e.target.parentElement.remove();
    }

    if (e.target.classList.contains("done")) {
        e.target.parentElement.classList.toggle("completed");
    }
    save();
});

function save() {
    localStorage.setItem("data", list.innerHTML);
}

function load() {
    list.innerHTML = localStorage.getItem("data") || "";
}

load();