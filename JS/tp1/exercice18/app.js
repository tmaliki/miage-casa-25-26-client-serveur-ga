// Déclaration d'un objet
const personne = {
    nom: "TCHEROU",
    prenom: "Maliki",
    age: 30,

    // Ajout d'une méthode pour afficher les informations de la personne
    message: function() {
        console.log(`Bonjor je m'appelle ${this.nom} ${this.prenom} et j'ai ${this.age} ans`)
    },

    message2: () => {
        console.log(`Bonjor je m'appelle ${this.nom} ${this.prenom} et j'ai ${this.age} ans`)
    }
}

// Appel de la méthode pour afficher les informations
personne.message();