# Affichage avec les if et les variables
 
## L’utilisation de variables

Grâce au JSX on peut stocker des éléements différents dans des variables facilement suivant une ou plusieurs conditions.

si on reprend l'exemple :
```jsx
function Todo({ text, isDone }) {
  let content = text;
  if (isDone) {
    content = text + " ✔";
  }
  return (
    <li>
      {content}
    </li>
  );
}
```

On peut assigner du markup sur plusieurs lignes grâce aux parenthèses :
```jsx
function Todo({ text, isDone }) {
  let content = text;
  if (isDone) {
    content = (
      <del>
        {text + " ✔"}
      </del>
    );
  }
  return (
    <li>
      {content}
    </li>
  );
}
```

## L’utilisation de composants

Il est aussi bien sûr possible de rendre conditionnellement un composant ou rien avec && :
```jsx
{condition && <Composant />}
```

ou avec un ternaire:
```jsx
{condition ? <Composant /> : null}
```

ou encore d'afficher un composant différent en suivant une condition

```jsx
{condition ? <Composant1 /> : <Composant2 />}
```