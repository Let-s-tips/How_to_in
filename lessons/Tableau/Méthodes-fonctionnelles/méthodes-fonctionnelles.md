# Index

1. [Méthodes map](Méthodes-map)
2. [Méthodes foreach](Méthodes-foreach)
3. [Méthodes filter](Méthodes-filter)

---
## Méthodes map

map est une méthode qu'on peut utiliser pour créer un nouveau tableau en allant transformer chaque élément grâce
à une fonction de rappel (callback).

map retourne un nouveau tableau qui a exactement la même taille que le tableau original, mais où les éléments auront été transformés.
La fonction de rappel donnée en argument de map est appelée avec chaque élément du tableau original l'un après l'autre et
la valeur de retour de ce callback sera la valeur de l'élément dans le nouveau tableau.

```
const animals = [
  { name: "Hector", species: "Beaver" },
  { name: "Edouard", species: "Duck" },
  { name: "José", species: "Boar" },
  { name: "Charlotte", species: "Groundhog" },
  { name: "Mireille", species: "Bee" },
  { name: "Leon", species: "Hornet" },
  { name: "Fedor", species: "Pig" }
];

const sentences = animals.map(function (animal) {
  return `${animal.name} the ${animal.species}`;
});

const sentences = animals.map((animal, index) => `${animal.name} the ${animal.species}, the number ${index}`); 

console.log(sentences);
```
On peut utiliser plusieurs paramètres donnés à la fonction de rappel. Le premier est l'élément en cours,
le deuxième est l'index de l'élément dans le tableau original.
L'index est similaire à l'index ou l'itérateur que nous utilisons avec une boucle for.

C'est un nombre qui augmentera à chaque itération de la boucle, en partant de zéro.

---

## Méthodes foreach

forEach effectuera une action pour chaque élément du tableau.

---

## Méthodes filter

---