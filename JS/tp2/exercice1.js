// Déclaration d'une classe en JS
class Personne {
    constructor(n, a) {
        // affectation de valeur aux propriétés
        this.nom = n; 
        this.age = a;
    }
}

// Instanciation d'un objet de la classe Personne
// Création d'une instance de Personne
const personne1 = new Personne("Alice", 30);

// Affichage des propriétés de l'objet personne1
console.log("Nom : " + personne1.nom)
console.log("Age : " + personne1.age)
