C'est quoi ?

Le rendu conditionnel permets d'afficher ou non plusieurs éléments si une ou plusieurs conditions sont remplies.

React et le rendu conditionnel.

Avec React le rendu conditionnel est trés simple grâce à JSX.

En effet on peut utiliser des conditions javascript on peut utiliser:

if, else, else if, && et ? :

Le rendu conditionnel avec l’opérateur ternaire ? :

Lorsque l'on veut afficher un élément si une condition est respectée et un autre élément si elle ne l'est pas on peut
utiliser l'opérateur ternaire.

```
condition ? expr1 : expr2;
```

Dans un composant on peut retourner du markup différent suivant une condition grâce à JSX:

```tsx
function Todo({text, isDone}) {
    return (
        <li>
            {isDone ? (
                <del>
                    {text + ' ✔'}
                </del>
            ) : (
                text
            )}
        </li>
    );
}
```

Ici nour renvoyons soit le text de la tâche barré et avec une checkmark si elle est terminée donc si 'isDone' vaut true
sinon on renvoie juste le texte.

Le rendu conditionnel avec l’opérateur logique &&

```
expr1 && expr2;
```

Si expr1 est falsy (c'est-à-dire que l'expression est convertie implicitement en false) alors cette expression retourne
false.

dans le cas contraire on retourne expr2.

```jsx
function Todo({text, isDone}) {
    return (
        {text}
    {
        isDone && '✔'
    }
)
    ;
}
```

Ici nous ajoutons la checkmark uniquement si isDone est true.
