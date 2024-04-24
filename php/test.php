<?php
// Établir la connexion à la base de données
$servername = "localhost"; // Adresse du serveur MySQL
$username = "username"; // Nom d'utilisateur MySQL
$password = "password"; // Mot de passe MySQL
$database = "nom_de_votre_base_de_donnees"; // Nom de la base de données

// Créer une connexion
$conn = new mysqli($servername, $username, $password, $database);

// Vérifier la connexion
if ($conn->connect_error) {
    die("La connexion à la base de données a échoué : " . $conn->connect_error);
}

// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les valeurs du formulaire
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Hasher le mot de passe pour le stocker en toute sécurité
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Préparer et exécuter la requête SQL pour insérer l'utilisateur dans la base de données
    $sql = "INSERT INTO users (username, password) VALUES ('$username', '$hashed_password')";

    if ($conn->query($sql) === TRUE) {
        echo "Utilisateur enregistré avec succès.";
    } else {
        echo "Erreur : " . $sql . "<br>" . $conn->error;
    }
}

// Fermer la connexion à la base de données
$conn->close();
?>
