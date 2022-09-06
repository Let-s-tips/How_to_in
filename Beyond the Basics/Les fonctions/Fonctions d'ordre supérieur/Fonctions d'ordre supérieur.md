# Index

1. [Fonction Anonyme](#Les-fonctions-anonymes)

---

## Les fonctions anonymes

On peut créer des fonctions sans aucuns label.

On peut les lancer instantanément :
```
(function() {
console.log("I'm a self-invoking anonymous function");
})();
```

Ou nous pouvons la stocker dans une variables :
```
const helloWorld = function() {
console.log("Hello, world);
};

helloWorld();
```