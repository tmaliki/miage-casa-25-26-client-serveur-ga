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

// classe Etudiant qui hérite de Personne
class Etudiant extends Personne {
    constructor(n, a, niv) {
        super(n, a); // Appel du constructeur de la classe parente
        this.niveau = niv;
    }

    afficherNiveau() {
        console.log(`Niveau: ${this.niveau}`);
    }
}

// Création de l'objet Etudiant
const salma = new Etudiant("Salma", 22, "TS2-DI 3");
salma.afficherDetails();
salma.afficherNiveau();
