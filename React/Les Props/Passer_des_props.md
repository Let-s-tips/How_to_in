# Passer des props aux composants

## À quoi servent les props ?

Nous avons vu que l'objectif des composants React est d'être réutilisable.

Pour que ce soit possible il faut pouvoir passer des propriétés afin de qu'ils puissent les utiliser pour retourner des
éléments jsx différents en fonction de celle-ci. Ces propriétés s'appellent les PROPS.

Il s'agit du moyen de React pour rendre les composants dynamiques en leur passant des données, d'un composant parent
vers un composant enfant.

Le flux de données est unidirectionnel comme on peut voir, c'est à dire qu'il va toujours dans le sens composant parent
vers composant enfant.

Un composant parent est un composant qui contient un ou plusieurs composant appelé enfant.

## Passer des props depuis des composants parents

PROPS est un objet passé à un composant lors de son utilisation.

```jsx
<composant prenom="paul"/>
```

Nous avons un composant et on lui passe la propriété prénom.

Les props sont modifiables dans un composant parent mais immutable dans un composant enfant. Les parents seronts le
moules et les enfants un receptacle.

## Passer des props qui ne sont pas des chaines de caractére

il faut utiliser des accolades simples:
```jsx
<composant name="jean" age={12} />
```

Pour passer des objets on met des accolades doubles
```jsx
<composant name="jean" age={12} adresse={{ville: 'Paris', cp: '75017'}} />
```

## Lire les props dans un enfant

Pour lire les PROPS on peut utiliser l'objet props en argument.

```jsx
export function Composant(props) {
    return (
        <h2>
            hello {props.name} ! Tu as {props.age} ans.
        </h2>
    );
}
```
Le plus souvent on utlise la décomposition
```jsx
export function Composant({name, age}) {
    return (
        <h2>
            hello {name} ! Tu as {age} ans.
        </h2>
    );
}
```
On peut utiliser des valeurs par défautsœ
```jsx
export function Composant({name = 'jean', age = 42}) {
    return (
        <h2>
            hello {name} ! Tu as {age} ans.
        </h2>
    );
}
```