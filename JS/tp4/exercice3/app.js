const msg = document.getElementById("msg");
const btn = document.querySelector("#btn");
const para = document.querySelector("#para");
const input = document.querySelector("#input");
const scrollBox = document.querySelector("#scrollBox");

// Clic (click)
btn.addEventListener("click", () => {
    msg.textContent = "Bouton cliqué"
})

// Double clic (dblclick)
btn.addEventListener("dblclick", () => {
    msg.textContent = "Double clic détecté"
})

// Survol (mouseover)
para.addEventListener("mouseover", () => {
    msg.textContent = "Survol détecté"
})

// Saisie clavier (input)
input.addEventListener("input", () => {
    msg.textContent = input.value
})

// Scroll (défelement)
scrollBox.addEventListener("scroll", () => {
    msg.textContent = "Scroll en cours ..."
})