// Déclaration d'une classe en JS
class Personne {

    // this : fait réference à la classe Personne
    
    constructor(n, a) {
        // affectation de valeur aux propriétés
        this.nom = n;
        this.age = a;
    }

    // Ajout d'une méthode à la classe
    afficherDetails() {
        console.log(`Nom: ${this.nom}, Age: ${this.age}`);
    }
}

// Instancions la classe Personne
const alice = new Personne("Alice", 30);

// Appel de la méthode afficherDetails
alice.afficherDetails();
