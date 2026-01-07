const jour = parseInt(prompt("Entrez un jour de la semaine (1-7) :"));

switch (jour) {
    case 1:
        console.log("Lundi");
        break;

    case 2:
        console.log("Mardi");
        break;
    
    case 3:
        console.log("Mercredi");
        break;

    case 4:
        console.log("Jeudi");
        break;

    case 5:
        console.log("Vendredi");
        break;

    case 6:
        console.log("Samedi");
        break;

    case 7:
        console.log("Dimanche");
        break;

    default:
        console.log("Numéro de jour invalide. Veuillez entrer un nombre entre 1 et 7.");
        break;
}
