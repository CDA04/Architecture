# QCM (Questions à Choix Multiples)

**Qu'est-ce qu'un objet en programmation orientée objet?**

- [ ] A. Un plan ou un modèle pour créer des classes.
- [X] B. Une instance d'une classe.
- [ ] C. Une fonction générique.

**Quelle est la principale motivation de la programmation orientée objet?**

- [X] A. Réutilisation du code et de spécialisation.
*Les classes métiers, les modèles*
- [ ] B. Compression de code.
- [ ] C. Minimisation de la complexité.

**Que signifie l'encapsulation en POO?**

- [X] A. Regrouper les données et les méthodes dans une seule unité.
*Permet d'avoir des méthodes modificateurs des propriétés*
- [ ] B. Créer des objets indépendants.
- [ ] C. Hacher les méthodes privées.

**Comment déclare-t-on une classe abstraite en TypeScript?**

- [ ] A. Avec le mot-clé class.
- [X] B. Avec le mot-clé abstract class.
*Attention on ne peut pas faire d'instance d'une classe abstraite, elle permet de définir des méthodes concrètes et des contrats*
- [ ] C. Avec le mot-clé interface.

**Quel est le rôle des getter et setter dans l'encapsulation?**

- [ ] A. Ils sont facultatifs.
- [X] B. Ils permettent de lire et modifier des propriétés privées.
- [ ] C. Ils définissent des nouvelles propriétés.

**Qu'est-ce que l'héritage en programmation orientée objet?**

- [ ] A. Un moyen de regrouper des objets similaires.
- [X] B. Une spécialisation où une classe hérite des caractéristiques d'une autre.
*Il faut appliquer le principe suivant pour savoir si on fait de l'héritage "la sous-classe est un ou une sorte de" de la classe mère*
- [ ] C. Une méthode de regroupement de méthodes.

**Comment se manifeste le polymorphisme en TypeScript?**

- [ ] A. Par l'utilisation d'interfaces uniquement.
- [X] B. Par l'utilisation d'interfaces et d'héritage.
*Avec l'héritage on peut redéfinir une méthode dans la sous-classe (attention à ne pas modifier le nombre de paramètres de vos méthodes re-définit dans ce cas), une interface définit un comportement général abstrait, les méthodes implémentées définissent le code métier dans la classe concrète qui implémente l'interface.*
- [ ] C. Par l'utilisation de classes abstraites uniquement.

**Qu'est-ce qu'une interface en TypeScript?**

- [ ] A. Un ensemble de méthodes concrètes.
- [ ] B. Un modèle pour créer des classes.
- [X] C. Un contrat définissant des méthodes à implémenter.
*L'interface définit des comportements à implémenter dans la classe, ces comportements implémentent la logique métier dans les classes*.

**Que signifie le principe de ségrégation d'interface (ISP)?** 

*Voir les principes SOLID*

- [X] A. Une classe ne doit pas dépendre d'interfaces qu'elle n'utilise pas.
- [ ] B. Une classe doit dépendre de toutes les interfaces disponibles.
- [ ] C. Les interfaces ne doivent pas être utilisées dans une classe.

**Comment déclare-t-on une méthode abstraite dans une classe abstraite?**

- [X] A. Avec le mot-clé abstract devant la méthode.
*La méthode n'a pas de logique métier (pas de corps de méthodes), elle définit un contrat pour les sous-classes.*
- [ ] B. Avec le mot-clé interface devant la méthode.
- [ ] C. Avec le mot-clé concrete devant la méthode.

**Quel est l'avantage de l'encapsulation?**

- [ ] A. Augmente la complexité du code.
- [X] B. Facilite la manipulation des propriétés privées.
*Permet de contrôler la modification et l'accès des propriétés privées pour ne pas avoir des valeurs abérentes*
- [ ] C. Rend les méthodes publiques par défaut.

**Quel est le but de l'héritage?**

- [ ] A. Créer des classes indépendantes.
- [X] B. Regrouper des classes similaires.
*Attention le couplage est fort, et évidemment les classes sont similaires (médecin -> généraliste, chirurgien ...)*
- [ ] C. Cacher des propriétés.

**Comment un objet peut-il être une instance d'une classe abstraite?**

- [X] A. Il ne peut pas.
- [ ] B. En utilisant le mot-clé instanceof.
- [ ] C. En ignorant les méthodes abstraites.

**Quelle est la différence entre une classe abstraite et une interface?**

- [ ] A. Une classe abstraite peut être instanciée, une interface ne le peut pas.
- [ ] B. Une interface peut avoir des propriétés, une classe abstraite ne le peut pas.
- [ ] C. Elles sont équivalentes, sans différence majeure.
*La différence c'est qu'on peut avoir dans la classe abstraite des méthodes concrètes*
