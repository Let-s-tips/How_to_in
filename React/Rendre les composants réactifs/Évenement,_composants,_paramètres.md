# Évenement, composants, paramètres

## Accéder aux props dans les gestionnaires d'événement

comme les gestionnaires d'évènement sont déclarés dans les composants on peut accéder aux props du composant.

```jsx
function Composant({message, children}) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}
```

Le composant reçoit en props une propriété message et la propriété spécial children.

Le gestionnaire d'évènement onClick peut acéder sans problème à la propriété message passée en prop au composant.

## Passer des gestionnaires d'événement comme prop

Trés souvent, on veut qu'un composant parent passe au composant enfant un gestionnaire d'événement diffèrent suivant le
contexte.

Par exemple, pour un composant Bouton, on voudrait que l'action soit différente lors d'un clic suivant le composant
parent qui l'utilise.

En effet, on à vue que tout type de valeur pouvait être passé en prop et donc une référence vers une fonction aussi.

```jsx
function Bouton({handler, children}) {
    return (
        <button onClick={handler}>
            {children}
        </button>
    );
}
```

Ici par exemple, notre composant reçoit en prop un gestionnaire d'événement handler, qu'il peut ensuite utiliser et lier
à l'événement onClick.

Le nom de la prop est totalement libre. Ce qui imposte c'est que l'attribut sur le composant enfant ait bien le nom de
l'événement précédé par on.

Ici on utilise handler comme nom de prop mais cela pourrait être n'importe quel autre nom.

```jsx
function Parent() {
    return (
        <Bouton handler={() => alert('Téléversement...')}>
            Téléversement
        </Bouton>
    );
}
```

Ici le composant parent passe au composant enfant un gestionnaire d'événement en prop.