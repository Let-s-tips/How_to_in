# Introduction

## Un composant c'est quoi ?

Un composant est une brique réutilisable et isolée. Les composants sont les briques fonctionnelles sur lesquelles repose
votre application.

Un composant React est une fonction qui peut optionnellement recevoir en parcmètres des propriétés et qui retourne un
élément React. Cet élément React peut par exemple être du markup JSX.

Un composant est responsable d'une portion de l'interface utilisateur et décrit comment elle doit apparaître.

Voici un composant qui affiche un bouton :

```jsx
function MonBouton() {
    return (
        <button>Cliquez moi</button>
    );
}
```

Le nom d'un composant doit obligatoirement commencer par UNE LETTRE MAJUSCULE. Il est possible ensuite de l'afficher
avec render():

```jsx
root.render(<MonBouton/>);
```