// Récupération de l'élément h1 par son id
const h1_exemple1 = document.getElementById('titre');
const h1_exemple2 = document.querySelector('#titre');
console.log(h1_exemple1);
console.log(h1_exemple2);

// Récupération de l'élement button par son nom
const btn = document.querySelector('button');
console.log(btn);

// Changement du texte de l'element h1 au clic sur le bouton
btn.addEventListener('click', () => {
    h1_exemple1.textContent = "Titre modifié";
})