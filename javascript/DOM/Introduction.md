# Index

1. [La méthode querySelector](#La-méthode-querySelector)
2. [La méthode InnerHTML](#La-méthode-InnerHTML)

---

## La méthode querySelector

Celle-ci fonctionne de la même manière qu'un sélecteur CSS. Entre parenthèses, il suffit d'écrire le sélecteur souhaité.

```
const someDivClass = document.querySelector('.my-div');
const someImg = document.querySelector('.my-img');
const someDivId = document.querySelector('#another-div');
const someH1 = document.querySelector('.my-div h1');
```

Exemple:

```
<img
  src="https://placekitten.com/200/287"
  alt="Happy cat"
  class="img-cat"
/>
```

On cible la class

```
const imgCat = document.querySelector('.img-cat');
```

Et on change l'image

```
imgCat.src = "https://placekitten.com/200/286";
```

---

## La méthode InnerHTML

La méthode InnerHTML est utilisé pour modifier le contenu d'une balise HTML.

```
<h1 class="title">Hello, World!</h1>

const userName = prompt("What's your name");
const title = document.querySelector('.title');
title.innerHTML = `Hello, ${userName}`;
```

---

## Les autres méthodes de sélection

On peut également utiliser document.getElementById ou document.getElementByTagName pour sélectionner des éléments HTML,
ils sont également pris en charge par les anciens navigateurs tels qu'Internet Explorer 6 - 7 (ce qui n'est pas le cas
de querySelector).

```
const title = document.getElementById('title');
const heading = document.getElementsByTagName('h1');
```

Exemple:

```
<img src="https://placebear.com/800/500" alt="Bear Image" id="bear-img" />

const bearImg = document.getElementById("bear-img");
bearImg.width = "500";
bearImg.alt = "A cute wild bear";
```

S'il y a plus d'un élément avec le même sélecteur dans le document (ex multiple h1), celui sélectionné par défaut sera
la première occurrence.
Si tu veux obtenir un tableau avec plusieurs éléments tu peux utiliser document.querySelectorAll.
```
const bearsPictures = [
  "https://placebear.com/500/279",
  "https://placebear.com/500/280",
  "https://placebear.com/500/300",
  "https://placebear.com/500/302",
  "https://placebear.com/500/305",
];

const images = document.querySelectorAll('img');

for (let i = 0; i < images.length; i++) {
  images[i].src = bearsPictures[i];
}
```
---
