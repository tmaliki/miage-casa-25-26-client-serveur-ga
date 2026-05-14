const express = require('express');
const app = express();
app.use(express.json()); // formattage des données venant du body au format JSON

// JSON : est un format de données structuré sous format de clé-valeur (comme un objet)

let products = [];

// Route racine (url principale)
app.get("/", (req, res) => {
    res.json({ message : "Bienvenue sur l'API de Gestion des produits" });
});

// Route pour lister tous les produits
app.get("/products", (req, res) => {
    res.status(200).json(products);
});

// Route pour créer/ajouter un produit
app.post("/products", (req, res) => {
    // { id: 1, name: "prod1", description: "prod1", price: 10.50 }
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json({
        message: "Produit ajouté avec succès",
        resultat: newProduct
    });
});

// Erreur 404 (URL not found)
app.use((req, res) => {
    res.status(404).json({ error: "URL non trouvée" });
});

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Le serveur tourne sur : http://localhost:${PORT}`);
});
