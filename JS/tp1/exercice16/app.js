// Déclaration d'un tableau vide
let languages = [];
console.log(languages); // tableau vide []

// Ajout d'éléments dans le tableau avec la méthode push
languages.push("HTML"); // poisition 0
languages.push("CSS"); // position 1
languages.push("JavaScript"); // position 2
console.log(languages); // Affichage du tableau après les ajouts
console.table(languages);

/**
 * Utilisation de la méthode splice
 * Elle permet de modifier le contenu d'un tableau 
 * en retirant, remplaçant ou ajoutant des éléments 
 * à des positions spécifiques.
 * 
 * Syntaxe : splice(index, howMany, item1, ..., itemN)
 * - index : position où commencer les modifications
 * - howMany (facultatif) : nombre d'éléments à supprimer à partir de l'index
 * - item1, ..., itemN (facultatif) : éléments à ajouter à partir de l'index
 */
// Suppression du deuxième élément du tableau
languages.splice(1, 1); // Supprime "CSS" à l'index 1
console.table(languages);