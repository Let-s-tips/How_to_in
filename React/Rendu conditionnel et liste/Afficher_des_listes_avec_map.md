# Afficher des listes avec map

## Rappels sur la méthode map()

celle-ci permets de créer un nouveau tableau en appliquand une fonction sur chaque élément du tableau sur lequel elle
est utilisée.

```js
const arr = [1, 2, 3];
const mapArr = arr.map(el => el * 2); // [2, 4, 6]
```

## React et les listes

Pour afficher des listes ave React nous avons deux moyens

Le premier est d'assigner à une variable un nouveau tableau contenant les éléments à afficher:
```jsx
const nombres = [1, 2, 3];
const elements = nombres.map(n => <li>{n}</li>);

function Composant() {
  return (
    <div>
      <ul>{elements}</ul>
    </div>
  );
}
```

Le second est directement d'utiliser map () dans l'expression jsc retournée:

```jsx
const nombres = [1, 2, 3];

function Composant() {
  return (
    <div>
      <ul>
        {nombres.map(n => (
          <li> {n * 2}</li>
        ))}
      </ul>
    </div>
  );
}
```