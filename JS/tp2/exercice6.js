// Déclaration d'une classe en JS
class Personne {
    constructor(n, a) {
        this.nom = n;
        this.age = a;
    }

    afficherDetails() {
        console.log(`Nom: ${this.nom}, Age: ${this.age}`);
    }

    /**
     * Une méthode/attribut statique ne peut être 
     * accèdée par une instance de la classe.
     * 
     * On accède à une méthode/attribut statique via 
     * la classe elle-même.
     * 
     * data = {nom: "Alice", age: 30}
     */
    static creerPersonne(data) {
        // return new Personne(data.nom, data.age);
        return new this(data.nom, data.age);
    }
}

// Utilisation de la méthode statique
const data = {nom: "Maliki", age: 34};
const pers = Personne.creerPersonne(data);
pers.afficherDetails();

// exemple 2
const pers2 = Personne.creerPersonne({nom: "TCHEROU", age: 10})
pers2.afficherDetails();
