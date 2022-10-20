# Index

1. [Fonction Anonyme](#Les-fonctions-anonymes)
2. [Fonctions_de_rappel_et_fonctions_d'ordre_supérieur](#Fonctions-de-rappel-et-fonctions-d'ordre-supérieur)

---

## Les fonctions anonymes

On peut créer des fonctions sans aucun label.

On peut les lancer instantanément :
```
(function() {
console.log("I'm a self-invoking anonymous function");
})();
```

Ou nous pouvons la stocker dans une variable :
```
const helloWorld = function() {
console.log("Hello, world);
};

helloWorld();
```
---

## Fonctions de rappel et fonctions d'ordre supérieur

Une fonction d'ordre supérieur est une fonction qui accepte une autre fonction en argument ou qui retourne elle-même
une fonction.

Une fonction de rappel ou callback est une fonction passée en paramètre d'une autre fonction.

Voici un exemple ou la fonction askUserName aura callback en argument. Elle pourra accepter une autre fonction en argument(
en tant que fonction de rappel)

```
function sayHello(userName) {
    console.log(`hello, ${userName}.`);
}

function sayWelcome(username) {
    console.log(`Welcome, ${userName}.`);
}

function askUserName(callback) {
    const name = prompt("What's ur name ?");
    callbak(name);
}

console.log(askUserName(sayHello);
console.log(askUserName(sayWelcome);
```

askUserName accepte aussi des fonctions en argument, on peut écrire des fonctions anonymes directement à la place de l'argument.
```
function askUserName(callback) {
    const name = prompt("What's ur name ?")
    callback(name);
}

askUserName(function(userName) {
    console.log("Hello, ${userName}.");
}
```

On peut retourner aussi une fonction
```
function getIdGenerator() {
  let id = 0; // <-- variable privée
  return function() {
    id = id + 1;
    return id; 
  }
}

// le seul moyen d'y accéder est via la fonction renvoyée par "getIdGenerator"
const generateUniqueId = getIdGenerator()
console.log(generateUniqueId()) 
console.log(generateUniqueId())
console.log(generateUniqueId())
```
