# Index
1. [Paramètre par défaut](#Paramètre-par-défaut)
2. [Fonctions fléchées](#Fonctions-fléchées)
---
## Paramètre par défaut

On peut définir une valeur par défaut pour les paramètres d'une fonction. Si aucun argument n'est
donné, une valeur par défaut sera utilisée.

```
function sayHello(name = "World") {
  console.log(`Hello, ${name}!`);
}

sayHello();
// Hello, World!

sayHello("Bob");
// Hello, Bob!
```
Nous pouvons aussi initialiser un tableau vide en paramètre pour éviter de planter le code si aucun tableau n'est passé.
```
function logArray(array = []){
     for(let i = 0; i < array.length; i++){
          console.log(array[i]);
     }
}
logArray();
```
Ici le code ne plantera pas.

## Fonctions fléchées

Les fonctions fléchées sont une autre façon de créer des fonctions.

```
const sayHello = (name) => {
  return `Hello, ${name}`;
}
console.log(sayHello('bob'));
```

Si on n'utilises pas les accolades après la flèche, alors ce qui sera après la flèche sera la valeur de retour (return) de la fonction.
```
function sum(a + b) {
return a + b
}

const sum = (a, b) => {return a + b};

const sum = (a, b) => a + b;
```

## Résumé

Tu peux assigner une valeur par défaut à un paramètre si aucun argument n'est passé

La fonction fléchée est un moyen plus court d'écrire des fonctions

