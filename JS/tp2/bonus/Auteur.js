// Importer le module Personne (classe)
import { Personne } from "./Personne.js";

// La classe Auteur hérite de la classe Personne
export class Auteur extends Personne {
    constructor(matricule, nom, prenom, dateNaiss, nationnalite) {
        super(matricule, nom, prenom, dateNaiss);
        this.nationnalite = nationnalite;
    }

    // Polymorphisme (surcharge de la classe fille)
    afficherInfo() {
        console.log("****************Infos Auteur****************")
        console.log("Matricule :", this.matricule)
        console.log("Nom :", this.nom)
        console.log("Prénom :", this.prenom)
        console.log("Date naissance :", this.dateNaiss)
        console.log("Nationalité :", this.nationnalite)
        console.log("**********************************************")
    }

    listeLivresEcrites(bibliotheque) {
        // à complèter
    }
}

// test
const a = new Auteur("A001", "Hugo", "Victor", "26/02/1802", "Française");
a.afficherInfo();