# SERENE SPARK

Application Web de Vente de Bijoux

---

## Description du projet

Serene Spark est une application web e-commerce développée dans le cadre d’un projet de gestion web.
Le site permet aux utilisateurs de consulter des produits, créer un compte, ajouter des articles au panier et passer des commandes.

L’application possède également une interface administrateur permettant de gérer les produits et les commandes.

---

## Technologies utilisées

### Frontend

* React JS
* React Router DOM
* Tailwind CSS
* Context API
* Axios / Fetch API
* Vite

### Backend

* Laravel
* API REST
* Laravel Sanctum

### Base de données

* MySQL
* phpMyAdmin

---

## Fonctionnalités principales

### Partie utilisateur

* Inscription et connexion
* Consultation des produits
* Affichage des détails d’un produit
* Ajout au panier
* Modification des quantités
* Validation des commandes
* Historique des commandes
* Protection des routes utilisateur

### Partie administrateur

* Tableau de bord administrateur
* Gestion des produits

  * Ajouter un produit
  * Modifier un produit
  * Supprimer un produit
* Gestion des commandes
* Protection des routes administrateur

---

## Architecture du projet

Le projet est séparé en deux parties :

### Frontend (React)

Organisation du code :

* components
* pages
* layouts
* context
* services
* routes
* styles

Le frontend communique avec le backend Laravel via une API REST.

### Backend (Laravel)

Le backend contient :

* Controllers
* Models
* Routes API
* Migrations
* Gestion de l’authentification
* Gestion des commandes et produits

---

## Gestion des rôles

Le projet contient deux rôles :

### User

Peut :

* consulter les produits
* ajouter au panier
* passer des commandes

### Admin

Peut :

* accéder au dashboard
* gérer les produits
* gérer les commandes

---

## Installation du projet

### 1. Cloner le projet

bash
git clone https://github.com/blidihajar07-sys/JEWEL.git


---

## Installation du frontend

bash
cd frontend
npm install
npm run dev


Le frontend fonctionne sur :


http://localhost:5173


---

## Installation du backend

bash
cd backend
composer install
php artisan migrate
php artisan serve


Le backend fonctionne sur :


http://localhost:8000
(http://127.0.0.1:8000)

---

## Configuration de la base de données

1. Créer une base de données MySQL
2. Importer le fichier SQL fourni (Lien Drive)
3. Modifier le fichier '.env'



.env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=jewelry_shop
DB_USERNAME=root
DB_PASSWORD=


---

## Comptes de test

### Administrateur

txt
Email : hajarAdmin@test.com
Mot de passe : ahh27//oGH:nxve33


### Utilisateur (Créer un nouveau utilisateur ou utiliser celui ci)

txt
Email : user@test.com
Mot de passe : 12345666


---

## Remarques

* Les images des produits se trouvent dans le dossier 'public/images'
* Les données du panier sont sauvegardées dans le localStorage
* Les routes sont protégées selon le rôle de l’utilisateur

---

## Auteur

Projet réalisé par :
BLIDI Hajar
