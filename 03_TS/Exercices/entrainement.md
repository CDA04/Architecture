
### **Exercice 1 : Manipuler des types de base** ☕
Créez une fonction appelée `calculateRectangleArea` qui prend deux paramètres `width` et `height` de type `number` et retourne l'aire d'un rectangle.  
Ensuite, utilisez cette fonction pour calculer l'aire d'un rectangle de largeur 5 et de hauteur 10.

---

### **Exercice 2 : Utiliser une interface** ☕
Créez une interface appelée `Person` avec les propriétés suivantes :  
- `name` : `string`  
- `age` : `number`  
- `isStudent` : `boolean`

Créez ensuite une fonction `describePerson` qui prend un objet de type `Person` en paramètre et retourne une description de la personne sous forme de chaîne de caractères.

**Exemple d'utilisation** :  
Si vous appelez `describePerson({ name: "Alice", age: 25, isStudent: true })`, cela retourne :  
`"Alice is 25 years old and is a student."`

---

### **Exercice 3 : Définir un type** ☕
Créez un type `Color` qui peut être une des valeurs suivantes : `"red"`, `"green"`, ou `"blue"`.  
Ensuite, créez une fonction `getColorHex` qui prend un paramètre de type `Color` et retourne le code hexadécimal correspondant (exemple : `"#FF0000"` pour `"red"`).

---

### **Exercice 4 : Utiliser une classe abstraite** ☕ ☕
Créez une classe abstraite `Shape` avec :  
- Une méthode abstraite `getArea` qui retourne un `number`.  
- Une méthode concrète `describe` qui retourne une chaîne de caractères disant :  
  `"This shape has an area of X"` où `X` est le résultat de `getArea`.

Ensuite, créez deux classes qui héritent de `Shape` :  
1. `Circle` avec une propriété `radius`.  
2. `Rectangle` avec des propriétés `width` et `height`.

Créez des instances des deux classes et appelez leur méthode `describe`.

---

### **Exercice 5 : Utiliser un type générique** ☕ ☕ ☕
Créez une fonction générique `reverseArray` qui prend un tableau d'un type quelconque `T` et retourne un nouveau tableau avec les éléments dans l'ordre inverse.

**Exemple d'utilisation** :  
Si vous appelez `reverseArray([1, 2, 3])`, cela retourne `[3, 2, 1]`.  
Si vous appelez `reverseArray(["a", "b", "c"])`, cela retourne `["c", "b", "a"]`.

---
