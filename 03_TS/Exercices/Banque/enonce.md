## **Simulation bancaire en TypeScript**

### **Objectif**
Créer une application en TypeScript pour simuler le fonctionnement d’une banque, en mettant en pratique des concepts de programmation orientée objet (POO), de gestion des collections et de génération aléatoire.

---

### **Contexte**
Vous êtes chargé de développer une simulation d'une banque qui gère des clients, leurs comptes et leurs cartes bancaires. L'application doit permettre d'effectuer des opérations courantes de gestion bancaire tout en respectant les spécifications suivantes.

---

### **Spécifications**

#### **1. La banque**
- Une banque possède :
  - Un **nom** donné au moment de sa création.
  - Une **liste de clients**.
- La banque doit permettre :
  1. **Ajouter un client** : Lors de l'ajout, un compte bancaire est automatiquement créé pour ce client avec un solde initial précisé.
  2. **Supprimer un client**.
  3. **Afficher la liste des clients** avec leurs informations personnelles.
  4. **Afficher le solde total** cumulé de tous ses clients.
  5. **Faire une demande de carte bancaire** pour un client existant (carte liée à son compte).

---

#### **2. Un client**
- Un client possède :
  - **Nom**, **prénom**, **âge**, **ville**, **profession**, et **salaire**.
- Un client peut :
  1. **Consulter** les informations de son compte.
  2. **Déposer** de l’argent sur son compte.
  3. **Retirer** de l’argent de son compte.
  4. **Demander une carte bancaire**.

---

#### **3. Le compte bancaire**
- Un compte est créé automatiquement lorsqu’un client est ajouté à la banque.
- Il possède :
  - Un **solde** (initialisé par le client lors de la création).
  - Un **numéro de compte unique**, généré aléatoirement.
- Un compte permet :
  1. **Afficher le solde**.
  2. **Faire des dépôts**.
  3. **Faire des retraits**.

---

#### **4. La carte bancaire**
- Une carte bancaire est liée à un compte et possède :
  - Un **numéro unique**, généré aléatoirement (16 chiffres).
  - Une **date d’expiration** : 5 ans après la création de la carte, au format `MM/AA`.
  - Un **code de sécurité (CCV)** : 3 chiffres générés aléatoirement.
- Une carte peut être créée :
  - Par la banque pour un client.
  - Par le client lui-même.
- Lors de l’affichage, la carte doit être formatée comme suit :  
  ```
  XXXX XXXX XXXX XXXX - MM/AA - CCC
  ```

---

### **Contraintes techniques**
1. Utiliser **TypeScript** pour structurer le code.
2. Implémenter les fonctionnalités en respectant les principes de **POO** :
   - Créez des classes pour représenter la banque, les clients, les comptes et les cartes bancaires.
   - Utilisez des méthodes pour les interactions entre ces entités.
3. Générer les numéros de compte et de carte aléatoirement tout en garantissant leur unicité.
4. Respecter le formatage demandé pour l’affichage des cartes bancaires.

---

### **Exemple de scénario**
1. Créez une banque appelée "Bankio".
2. Ajoutez trois clients : Alice, Bob, et Charlie, avec leurs informations respectives.
3. Associez des comptes à chaque client avec des soldes initiaux.
4. Affichez la liste des clients et le solde total de la banque.
5. Effectuez des opérations :
   - Alice dépose 500 euros sur son compte.
   - Bob retire 200 euros.
   - Charlie demande une carte bancaire.
6. Affichez les informations de la carte de Charlie, y compris le numéro, la date d’expiration et le CCV.

---

### **Livrables**
- Un fichier TypeScript contenant le code complet du projet.
- Des tests ou exemples démontrant le bon fonctionnement des fonctionnalités demandées.

---
