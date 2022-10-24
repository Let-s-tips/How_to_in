# Exporter et importer des composants

## Export par défaut d'un composant

Les applications React sont découpées en un très grand nombre de composants qui sont répartis logiquement dans des
fichiers.

Pour exporter un composant depuis un fichier, vous pouvez l'exporter par défaut.

Dans ce cas, créez un fichier en UpperCamelCase acec le nom du composant par exemple MonSuperComposant et utilisez
l'extension .js ou .jsx.

```jsx
export default function MyApp() {
    return (
        <h1>Hello !</h1>
    );
}
```

On a l'utilisation du mot-clé défaut.

On peut ensuite l'importer dans un autre fichier:

```jsx
import App from './App';
```

Un fichier ne peut avoir qu'un seul export par défaut.

## Export nommé d'un composant

On peut également exporter un composant de manière nommé, sans utilisation de défaut.

```jsx
export function MyApp() {
    return (
        <h1>Hello !</h1>
    );
}
```

Dans ce cas, il faut utiliser des accolades lors de l'import et on doit obligatoirement utiliser le même nom que le nom
de la fonction exportée.

```jsx
import {App} from './App';
```

Avec React, le plus souvent, on utilise un export par défaut lorsqu'un fichier exporte un seul composant et on utilise
les exports nommés lorsqu'un fichier exporte plusieurs composants et/ou valeurs.
