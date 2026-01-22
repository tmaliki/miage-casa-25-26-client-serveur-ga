// Déclaration d'une classe en JS
class Personne {
    #age; // l'attribut age est privé

    constructor(n, a) {
        this.nom = n;
        this.#age = a;
    }

    // Méthode pour obtenir l'âge
    getAge() {
        return this.#age;  // retourne la valeur de l'attribut age
    }

    // Modifier ou définit l'âge
    setAge(newAge) {
        if (newAge > 0) {
            this.#age = newAge;
        } else {
            console.log("Veuillez entrer un âge valide.");
        }
    }

    afficherDetails() {
        console.log(`Nom: ${this.nom}, Age: ${this.getAge()}`);
    }
}

// Test
const alice = new Personne("Alice", 30);
alice.afficherDetails();

// Définir un nouvel âge
alice.setAge(35);
alice.afficherDetails();

// Test avec un age invalide
alice.setAge(-5);