# Index

1. [Gestionnaires d'événements](#Gestionnaires d'événements)
2. [AddEventListener](#AddEventListener)
3. [Travailler avec un form](#Travailler avec un form)
4. [Changer une classe](#Changer une classe)
5. [Obtenir des informations sur l'événement event](#Obtenir des informations sur l'événement event)

---

## Gestionnaires d'événements

Pour la gestion des clics, tu peux modifier la propriété onclick en y affectant une fonction.

```
someDiv.onclick = function () {
  someDiv.style.backgroundColor = "red";
};
```

---

## AddEventListener

addEventListener est une méthode qui accepte comme premier paramètre le type d'événement, et le second est une fonction
de rappel(callback function)

```
someDiv.addEventListener('click', function() {
    someDiv.style.backgroundColor = "red";
});
```

addEventListener peut être utilisé pour écouter un grand nombre d'événements différents, tels que:

    click
    mousedown
    mouseup
    mousemove
    mouseover
    mouseleave

---

## Travailler avec un form

Nous pouvons ajouter une fonction qui sera exécutée lorsqu'un formulaire est envoyé, en utlisant la propriété onsubmit
sur l'élément form.

```
const form = document.queryselector('#form');

form.onsbumit = function () {
    console.log("Hello world");
```

Le problème avec cette approche est que lorsque l'on appelle onsubmit, la page se rafraîchit (un comportement par défaut
des navigateurs).

Pour empêcher la page de se rafraîchir, nous pouvons utiliser une méthode que nous obtenons dans l'objet event appelée
preventDefault.
preventDefault empêchera la page de se recharger.

```
const form = document.querySelector("#form");

form.onsubmit = function (event) {
  event.preventDefault();
  console.log("Hello, world!");
};
```

De plus, nous pourrions obtenir la valeur de l'input afin de pouvoir afficher le nom que l'utilisateur a tapé.

```
const form = document.querySelector("#form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");

form.onsubmit = function (event) {
  event.preventDefault();
  console.log(`Hello, ${firstName.value} ${lastName.value}`);
};
```

---

## Changer une classe

L'utilisation de la méthode classList.toggle sur un élément ajoutera la classe si la classe n'est pas là, si la classe
est déjà présente alors elle la supprimera.
C'est utile, par exemple, dans le cas où tu veux créer un menu déroulant. Lorsque l'utilisateur clique dessus, cela
supprime ou ajoute la classe visible.

```
element.classList.toggle("mystyle");
```

---

## Obtenir des informations sur l'événement event

Comme tu l'as vu tout à l'heure, la fonction de rappel que tu donnes à un addEventListener peut accepter un paramètre;
ce paramètre est l'objet event.

L'objet event contient beaucoup de propriétés et de méthodes concernant l'événement qui vient de se produire.

```
const title = document.querySelector(".title");

title.addEventListener("click", function (event) {
  console.log(event);
  title.style.color = "red";
});

document.body.addEventListener("mousemove", function (event) {
  console.log(event);
});
```