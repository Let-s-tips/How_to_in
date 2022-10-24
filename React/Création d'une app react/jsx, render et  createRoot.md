# JSX, Render et creatRoot

## Introduction

Les éléments React sont des objets qui décrivent ce que vous voulez afficher à l'écran. React utilise ces objets pour
construire le DOM et le mettre à jour.

Pour créer un élément React, il suffit d'utiliser la méthode prévue.

```jsx
React.createElement(
    type,
    [props],
    [...children]
)
```

Le type peut être un élément html, mais aussi un composant le fragment React On peut lui passer des propriété comme par
exemple une classe en deuxièmement paramètre. On peut lu passer aussi des enfants qui peuvent être une chaîne de
caractère ou d'autres éléments React.

## Le langage JSX

React recommande l'utilisation de JSX

Jsx est une extensrion syntaxique à JavaScript qui permet d'utiliser du html amélioré dans du JavaScript.

```jsx
import React from "react";
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById('root'));
const element = <h1>Bonjour </h1>

root.render(element);
```