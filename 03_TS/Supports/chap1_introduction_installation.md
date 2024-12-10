# Configuration et installation de TypeScript 

### Plan du cours général

[plan du cours](../../01_ORGA/00_plan.md)

### Installation et configuration

1. Utilisez la version de Node.js LTS, voir sur le site Node.js
1. Initialisez une structure pour faire les exercices ou projet
   - TypeScript est installé en tant que devDependencies !

## :rocket: Installation et configuration

1. Utilisez la version de Node.js LTS, voir sur le site Node.js

:shell:

```bash
# version LTS
nvm use 20.11.0
```

1. Intialisez la structure d'un dossier pour travailler ou faire un projet (le cours)

>[!NOTE]
>TypeScript est installé en tant que devDependencies
   
:shell:

```bash
mkdir exercices && cd exercices && npm init -y 

npm install typescript --save-dev
npm install nodemon ts-node --save-dev
```  

Créez un dossier src, puis initialisez le projet avec la commande `tsc --init`

:rocket:

> [!TIP]
> Le fichier tsconfig.json configure l'installation de TypeScript

```json
{
  "compilerOptions": {
    "target": "ESNext",                      // Utilisation des dernières fonctionnalités JS
    "module": "ESNext",                      // Utilisation du module ES (import/export)
    "moduleResolution": "node",              // Résolution des modules comme dans Node.js
    "outDir": "./dist",                      // Répertoire de sortie pour les fichiers compilés
    "esModuleInterop": true,                 // Permet d'interopérer avec des modules CommonJS
    "strict": true,                          // Activation des vérifications strictes
    "skipLibCheck": true                     // Ignore la vérification des fichiers de bibliothèque
  },
  "include": ["src/**/*.ts"],                 // Inclut tous les fichiers TypeScript dans "src"
  "exclude": ["node_modules"]                 // Exclut le dossier "node_modules"
}
```

Modifiez maintenant le fichier package.json, ajoutez la ligne suivante dans la partie script :

```json
"scripts": {
    "dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/app.ts"
  },
```

:shell:

```json
npm run dev
```

### Plan du cours général

[plan du cours](../../01_ORGA/00_plan.md)
