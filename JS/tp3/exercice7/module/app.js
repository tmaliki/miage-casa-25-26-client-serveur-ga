import { geometrie } from "./formules.js";

try {
    console.log(`Aire du carré de côté 5 : ${geometrie.aireCarre(5)}`);
    console.log(`Périmètre du carré de côté 5 : ${geometrie.perimetreCarre(5)}`);
} catch (error) {
    console.error("Erreur détectée : ", error.message);
} finally {
    console.log("Fin des tests.");
}