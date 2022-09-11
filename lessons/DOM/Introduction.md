# Index

1. [La méthode querySelector](#La-méthode-querySelector)

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

imgCat.src = "https://placekitten.com/200/286";
```

