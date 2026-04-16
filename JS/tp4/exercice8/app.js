const listItems = document.querySelectorAll("li");
console.table(listItems);

let cumul = 0;

listItems.forEach((item, key) => {
    item.addEventListener("click", () => {
        const price = Number(item.dataset.price);
        document.querySelector("#price").textContent = price + " MAD";

        cumul += price;
        document.querySelector("#cumul").textContent = cumul + " MAD"
    });
});