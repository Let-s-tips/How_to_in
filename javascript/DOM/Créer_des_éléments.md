# Index

1. [Créer un nouvel élément HTML](#Créer-un-nouvel-élément-HTML)

---

## Créer un nouvel élément HTML

Pour créer un élément, on utilise la méthode createElement:

```
const newCatImage = document.createElement('img');
```

Dans ce cas, parce que nous voulons créer une image, nous devons donner une source à cette nouvelle image:

```
newCatImage.src = "https://placekitten.com/408/287";
```

Enfin, pour l'ajouter au DOM, nous pouvons utiliser la méthode appendChild.
La méthode appendChild va ajouter l'élément passé à la fin de l'élément sur lequel tu utilises la méthode.
Dans cet exemple, ceci ajoutera newCatImage à la fin de document.body:

```
document.body.appendChild(newCatImage);
```

Cette méthode est également disponible sur d'autres noeuds HTML, par exemple, tu peux l'utiliser pour ajouter un élément
à une <div>.

```
const myDiv = document.querySelector('.myDiv');
myDiv.appendChild(myElement);
```

Exemple :
code HTML

```
<div class="first-card">
  <h1 class="card-title">First cat:</h1>
  <img src="https://placekitten.com/200/400" class="card-img" />
</div>
<div class="second-card">
  <h1 class="card-title">second cat:</h1>
</div>
```

code JS

```
const newCatImage = document.createElement('img');
const secondCard = document.querySelector('.second-card');

newCatImage.src = "https://placekitten.com/200/400";

secondCard.appendChild(newCatImage);
```

---

# Changer la position d'un Élément

```
<div id="first-div">
  <h1>Move the cat here:</h1>
  <img src="https://placekitten.com/200/139" id="first-cat-img" />
</div>
<div id="second-div">
  <h1>Move this cat up:</h1>
  <img src="https://placekitten.com/200/135" id="second-cat-img" />
</div>

const secondCat = document.querySelector('#second-cat-img');
const firstDiv = document.querySelector('#first-div');

firstDiv.appendChild(secondCat);
```

---

# Supprimer un Élément

On peut supprimer un élément du DOM en utilisant la propriété remove.

```
<h1>Delete all the Dogs or sCats!</h1>
    <img src="https://placedog.net/300/200" class="img-dog" />
    <img src="https://placekitten.com/408/286" class="img-cat" />
    <img src="https://placedog.net/320/200" class="img-dog" />
    <img src="https://placekitten.com/408/287" class="img-cat" />
    <img src="https://placedog.net/350/200" class="img-dog" />
    <img src="https://placedog.net/340/200" class="img-dog" />
    <img src="https://placekitten.com/409/287" class="img-cat" />

const dogs = document.querySelectorAll(".img-dog");

for (let i = 0; i < dogs.length; i++) {  
  dogs[i].remove();
}
```

---

# Changer le style

Il est possible de changer le style d'un élément HTML en utilisant la propriété style.
Le nom de la propriété doit être écrit en utilisant le camel case (nous ne pouvons pas utiliser de - lors du nommage en
Javascript).

```
someDiv.style.backgroundColor = "lightblue";
someText.style.fontSize = "20px";
```

---

# Ajouter/Supprimer une classe

Il est aussi possible d'ajouter/supprimer une classe sur un élément.

```
element.classList.add('myClass');
element.classList.remove('myClass');
```

Avec classList l'élément est spécifié, nous n'avons pas besoins d'utiliser . avant le nom de la class.