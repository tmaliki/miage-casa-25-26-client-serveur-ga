const list = document.querySelector("#list");

list.addEventListener("click", (evt) => {
    if (evt.target.tagName = "BUTTON") {
        alert("Button cliqué dans : " + evt.target.parentElement.textContent)
    }
})