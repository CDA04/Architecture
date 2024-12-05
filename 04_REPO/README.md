# Example d'architecture

## Clean Architecture exemple minimaliste

### Cloner le projet et testez le sur votre machine

### Installation du projet directement sans le coder

#### 1. Arborescence du projet

- Créez un dossier **create-user**
- Pour créez les dossiers et fichiers du projet tapez la ligne de code suivante, si vous êtes sous Windows voyez la remarque ci-après
```bash
cd create-user
mkdir -p src/domain/entities src/domain/usecases src/domain/interfaces src/domain/services src/adapters/database src/adapters/controllers src/infrastructure/database src/infrastructure/frameworks src/config && touch src/domain/entities/User.ts src/domain/usecases/CreateUserUseCase.ts src/domain/usecases/GetUserUseCase.ts src/domain/interfaces/UserRepository.ts src/domain/services/AuthService.ts src/adapters/database/UserRepositoryImpl.ts src/adapters/controllers/UserController.ts src/infrastructure/database/dbConnection.ts src/infrastructure/frameworks/ExpressApp.ts src/config/default.ts src/config/development.ts src/app.ts
```

- installez les dépendances

```bash
npm install express
npm install --save-dev @types/express typescript ts-node nodemon
```

Remarque : 

Travailler avec **WSL** (Windows Subsystem for Linux) sous Windows permet d'utiliser un environnement Linux directement dans Windows. Voici comment l'installer et l'utiliser efficacement pour travailler avec des outils de développement comme Docker, des scripts bash, etc.

### 1. **Installation de WSL sous Windows**

#### Étape 1 : Activer WSL

1. **Ouvrez PowerShell en tant qu'administrateur** :
   - Cherchez **PowerShell** dans le menu démarrer.
   - Faites un clic droit et sélectionnez **Exécuter en tant qu'administrateur**.

2. **Exécutez la commande suivante pour activer WSL** :
   ```bash
   wsl --install
   ```
   Cette commande installe WSL et la dernière version de Ubuntu.

### 2. **Utilisation de WSL**

Une fois que WSL est installé et configuré, vous pouvez l'utiliser pour exécuter des commandes Linux dans Windows.

- Ouvrez **Ubuntu** via le menu Démarrer ou en exécutant `wsl` dans PowerShell ou l'invite de commande.

- Vous pouvez maintenant travailler avec les commandes Linux comme `bash`, `ls`, `cd`, `mkdir`, etc. Vous avez accès à un environnement complet Linux.

#### Exemple de travail avec un projet :

Si vous avez des projets ou des scripts à exécuter, vous pouvez les créer directement dans votre système de fichiers WSL, ou accéder à vos fichiers Windows via le chemin `/mnt/c/` (pour le lecteur C:).

Par exemple, si vous avez un projet sur le disque C dans `C:\Users\YourName\project`, vous pouvez y accéder en WSL via :
```bash
cd /mnt/c/Users/YourName/project
```
a la version de Docker.

### 3. **Exécuter des scripts bash et des commandes dans WSL**

Dans WSL, vous pouvez exécuter tous vos scripts bash. Par exemple, vous pouvez exécuter le script pour créer des dossiers et des fichiers que j'ai mentionné plus tôt, en utilisant simplement :
```bash
bash script.sh
```
Ou directement la commande :

```bash
mkdir -p src/domain/entities src/domain/usecases src/domain/interfaces src/domain/services src/adapters/database src/adapters/controllers src/infrastructure/database src/infrastructure/frameworks src/config && touch src/domain/entities/User.ts src/domain/usecases/CreateUserUseCase.ts src/domain/usecases/GetUserUseCase.ts src/domain/interfaces/UserRepository.ts src/domain/services/AuthService.ts src/adapters/database/UserRepositoryImpl.ts src/adapters/controllers/UserController.ts src/infrastructure/database/dbConnection.ts src/infrastructure/frameworks/ExpressApp.ts src/config/default.ts src/config/development.ts src/app.ts
```


###  **Conseils supplémentaires**

- **WSL 2** est recommandé car il offre une meilleure compatibilité avec Docker et les autres outils Linux. Assurez-vous que WSL 2 est bien activé pour une meilleure expérience.
- Utilisez **VS Code avec l'extension Remote - WSL** pour éditer vos fichiers directement depuis un éditeur de texte intégré, en vous connectant à votre distribution Linux WSL.

#### 2. Installation des dépendances 

