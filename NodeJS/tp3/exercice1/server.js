// importation du module http de node.js
const http = require("http");

/**
 * Création du serveur
 * request : pour les demandes vers le serveur
 * response : pour la réponse retournée par le serveur
 */
const server = http.createServer((request, response) => {
    // Ecire la réponse a afficher au demandeur (client)
    response.writeHead(200, { "Content-Type" : "text/plain" });
    response.end("Bonjour tout monde !\n");
});

// Démarrage du serveur qui va écouter sur un port donnée
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
