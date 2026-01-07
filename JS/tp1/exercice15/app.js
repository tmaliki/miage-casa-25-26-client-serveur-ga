const fruits = ["Orange", "Pomme", "Banane", "Mango", "Fraise"];
const taille = fruits.length; // taille du tableau

// Utilisation de la Boucle for
console.log("** Affichage des fruits avec une boucle for **");
for (let i = 0; i < taille; i++) {
    console.log(fruits[i]);
}
console.log("******************************************")

// Utilisation de la Boucle while
console.log("** Boucle while **");
let j = 0; // initialisation
while (j < taille) { // condition
    console.log(fruits[j]);
    j++; // incrémentation
}
console.log("********************");

/**
 * Utilisation de la Boucle do...while
 * Le bloc de code s'exécute au moins une fois 
 * avant de vérifier la condition
 */
let k = 0; // initialisation
console.log("** Boucle do...while **");
do {
    console.log(fruits[k]);
    k++; // incrémentation
} while (k < taille); // condition
console.log("***********************");

/**
 * Utilisation de la Boucle for...of
 * Sert à parcourir les élments d'un tableau ou d'une chaîne
 */
console.log("** Boucle for...of **");
for (const element of fruits) {
    console.log(element);
}
console.log("***********************");