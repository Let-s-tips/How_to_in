# Passage de props et propriété children

## passage de props le long de plusieurs composant

Quand on souhaite passer l'ensemble des props plus bas dans l'arbre des composants:

```
Parent -> Enfant -> Petit enfant
```

l'exemple au dessus est le passage de props ( props forwarding) et on utilise pour cela l'opérateur spread.

```jsx
function enfant(props) {
    return (
        <div className="container">
            <PetitEnfant {...props} />
        </div>
    );
}
```

Ceci nous permets de ne pas avoir à copié l'ensemble des props.

## Passer du jsx avec la propriété children

Il est possible d'imbriquer du JSX à l'interieur des balises d'un composant.

```jsx
<composant>
    <button>Cliquez</button>
</composant>
```

Dans ce cas, le composant pourra accéder et afficher au contenu JSX passé grâce à la propriété children:
```jsx
export function composant({children}) {
    return (
        <>
            <h1>Hello world</h1>
            {children}
        </>
    );
}
```

il est possible de passer toute expression JSX y compris un composant.
```jsx
<Composant>
    <AutreComposant />
</Composant>
```