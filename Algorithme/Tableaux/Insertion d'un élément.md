# Insertion d'un élément.

Ce document fournit une documentation détaillée pour la classe `StaticArray` en JavaScript, conçue pour démontrer les techniques de manipulation de base d'un tableau, y compris l'insertion au début, à la fin et à une position spécifique au sein d'un tableau à taille fixe.

## Table des Matières

- [Introduction](#introduction)
- [Fonctionnalités](#fonctionnalités)
    - [Insertion au Début](#insertion-au-début)
    - [Insertion à la Fin](#insertion-à-la-fin)
    - [Insertion à une Position Spécifique](#insertion-à-une-position-spécifique)
- [Utilisation](#utilisation)

---

## Introduction

La classe `StaticArray` est une implémentation simplifiée d'un tableau en JavaScript qui ne se redimensionne pas automatiquement comme les tableaux JavaScript typiques. Cette implémentation fournit des méthodes pour insérer des éléments au début, à la fin et à n'importe quelle position donnée du tableau, ce qui en fait un outil pédagogique utile pour comprendre la manipulation des tableaux et les implications d'un dimensionnement statique.

---

## Fonctionnalités

### Insertion au Début

Pour insérer un élément au début du tableau, la classe crée un nouveau tableau avec un emplacement supplémentaire, place le nouvel élément à l'index 0, puis copie tous les éléments du tableau original dans le nouveau tableau, à partir de l'index 1.

```javascript
insertAtBeginning(item) {
  const newArray = new Array(this.value.length + 1);
  newArray[0] = item;
  for (let i = 0; i < this.value.length; i++) {
    newArray[i + 1] = this.value[i];
  }
  this.value = newArray;
}
```

### Insertion à la Fin

L'insertion d'un élément à la fin suit un principe similaire à l'insertion au début. Un nouveau tableau avec un emplacement supplémentaire est créé, les éléments existants sont copiés, et le nouvel élément est placé dans la dernière position.

```javascript
insertAtEnd(item) {
  const newArray = new Array(this.value.length + 1);
  for (let i = 0; i < this.value.length; i++) {
    newArray[i] = this.value[i];
  }
  newArray[this.value.length] = item;
  this.value = newArray;
}
```

### Insertion à une Position Spécifique

L'insertion d'un élément à une position spécifique est plus complexe. La méthode vérifie d'abord si la position donnée est valide (ni inférieure à 0 ni supérieure à la longueur du tableau). Un nouveau tableau avec un emplacement supplémentaire est ensuite créé, et les éléments sont copiés de l'ancien tableau au nouveau, avec le nouvel élément inséré à la position spécifiée.

```javascript
insertAtPosition(item, position) {
  if (position < 0 || position > this.value.length) {
    throw new Error('Position invalide');
  }
  const newArray = new Array(this.value.length + 1);
  for (let i = 0; i < newArray.length; i++) {
    if (i === position) {
      newArray[i] = item;
    } else if (i < position) {
      newArray[i] = this.value[i];
    } else {
      newArray[i] = this.value[i - 1];
    }
  }
  this.value = newArray;
}
```

---

## Utilisation

Pour utiliser la classe `StaticArray`, instanciez un nouvel objet `StaticArray` et utilisez les méthodes `insertAtBeginning`, `insertAtEnd` ou `insertAtPosition` pour ajouter des éléments au tableau.