### Enoncé : Créer une application qui gère un utilisateur

**Objectif** : Implémenter une petite application en utilisant la Clean Architecture avec une gestion minimale d'un utilisateur.

---

### Structure des dossiers :

```
src/
│
├── entities/
│   └── User.ts
│
├── useCases/
│   └── CreateUser.ts
│
└── interfaces/
    └── UserRepository.ts
```

### 1. Créez l'entité `User` dans `entities/User.ts` :

### 2. Créez l'interface `UserRepository` dans `interfaces/UserRepository.ts` :

### 3. Créez le cas d'utilisation `CreateUser` dans `useCases/CreateUser.ts` :

### 4. Implémentez un `UserRepository` dans `main.ts` pour stocker un utilisateur en mémoire (en tant que simple exemple) :

### Explication :

1. **`User` (Entité)** : C'est une simple classe qui représente l'entité utilisateur avec un identifiant et un nom.
2. **`UserRepository` (Interface)** : Cette interface définit les méthodes `save` pour enregistrer un utilisateur et `findById` pour récupérer un utilisateur par son identifiant.
3. **`CreateUser` (Cas d'utilisation)** : Ce cas d'utilisation permet de créer un utilisateur en appelant la méthode `save` du `UserRepository`. Il est indépendant de l'implémentation du stockage des utilisateurs.
4. **`InMemoryUserRepository` (Implémentation du repository)** : Cette classe implémente `UserRepository` et gère les utilisateurs en mémoire pour simplifier l'exemple.
