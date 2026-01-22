// Déclaration d'une classe en JS
class Personne {
    constructor(n, a) {
        this.nom = n;
        this.age = a;
    }

    afficherDetails() {
        console.log(`Nom: ${this.nom}, Age: ${this.age}`);
    }
}

// Etudiant hérite de Personne
class Etudiant extends Personne {
    constructor(nom, age, niveau) {
        super(nom, age) // Appel du constructeur Parent
        this.niveau = niveau;
    }

    // Polymorphyisme : surcharge de la méthode afficherDetails()
    afficherDetails() {
        console.log(`Nom: ${this.nom}, Age: ${this.age}, Niveau: ${this.niveau}`);
    }
}

// Test
const etu = new Etudiant("Alice", 22, "Licence");
etu.afficherDetails();