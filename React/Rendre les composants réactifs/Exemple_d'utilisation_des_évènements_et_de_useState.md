# Exemple d'utilisation des évènements et de useState

## Mettre à jour des objets dans l'état

En react il ne faut pas modifier un certain nombres d'objets directement: les props dans les composants enfants et une
varibale d'état( sans utiliser la fonction setter).

En JS, comme les objets sont passés par référence et non par valeur, il ne faut jamais modifier un obket contenu dans
une variable d'état directement.

Il faut d'abord copier l'objet et ensuite modifier cette copie et mettre à jour la variable d'état en utilisant la
fonction setter.

exemple:

```jsx
const [position, setPosition] = useState({x: 0, y: 0});
```

que se passe t-il si nous faisons:

 ```jsx
position.x = 42;
setPosition(position);
```

On modifie l'objet position pendant le rendu et la valeur de la porpriété X devient 42 pendant le rendu en cours.

Or, il faut traiter tout ce qui est mis dans l'état comme étant en lecture seule pendant le rendu, sinon l'état est
décorrélé de ce qui est affiché. Seule les fonctions setter peuvent déclencher un nouveau rendu.

Autrement dit, si vous modifiez un objet contenu dans une variable d'état directement, la valeur sera modifiée pendant
le rendu courant mais aucune MAJ de l'affichage ne sera déclenchée.

Même si dans certains cas, cela peut fonctionner suivant votre code c'est une mauvaise pratique de modifier l'état sans
déclencher de MAJ et pendant l'état courant.

Il faut retenir deux choses:

1 Ne jamais modifier directement un objet contenu dans une variable d'état et toujours utiliser une fonction set pour
modifier une variable d'état.

il faut donc faire:

```jsx
setPosition({
    x: 42,
    y: 0
});
```

Ici on crée un nouvel objet littéral qui n'a donc pas la même référence que l'objet contenu dans la variable d'état
position et nous le passons à la fonction setter.

## Mettre à jour des objets avec la syntaxe spread (...)

Le plus souvent, les objets contenus dans vos variables d'état n'auront pas simplement deux propriétés.

Il serait donc trop long de re-dèclarer l'ensemble des propriétés pour modifier une ou deux sur l'objet.

Il faut utiliser la syntaxe spread pour copier les propriétés de l'objet contenu dans la variable d'état, puis modifier
les propriétés souhaitées:

```jsx
setPersonne({
    ...personne,
    prenom: 'Jean'
});
```

ici:

{} crée un nouvel objet littéral

...personne copie toute les porpriétés de l'objet contenu dans la varibale d'état personne.

prenom: 'jean' écrase la valeur de la propriété prenom avec la nouvelle valeur 'jean'.

Si on a des objets avec des propriétés contenant des objets (y compris des tableaux ou des fonctions qui sont des
objets) il faudra penser à copier ces propriétés imbriquées, en effet l'utilisation de l'opérateur spread effectue une
copie superficielle des propriétés d'un objet:

```jsx
setPersonne({
    ...personne,
    adresse: {
        ...person.adresse,
        ville: 'Lyon'
    }
});
```

## Mettre à jour des tableaux dans l'état

Les tableaux étant des objets particuliers en JS, les mêmes règles s'appliquent.

Il faut toujours traiter l'état local d'un composant comme en lecture seule et ne jamais le modifier sans passer par une
fonction setter.

Il faut toujours créer une copie d'un tableau avant de modifier cette copie et de l'utiliser avec la fonction setter
pour mettre à jour l'état lors du prochain rendu.

En conséquence, il ne faut utiliser aucune méthode modifiant le tableau sur lequel elles sont appliquées: push, unshift,
pop, shift, splice, arr[i] = ..., reverse, sort etc...., sur une variable d'état contenant un tableau.

Il faut créer un nouveau tableau en utilisant les méthodes de programmations fonctionnelles: filter, map, slice et la
syntaxe spread(...)

### Ajouter un élément à un tableau contenu dans l'état

Il ne faut jamais faire:

```jsx
const [personnes, setPersonnes] = useState([]);

personnes.push({prenom: 'Jean', nom: 'Dupont'});

setPersonnes(personnes);
```

Il faut toujours faire :

```jsx
const [personnes, setPersonnes] = useState([]);

setPersonnes(
    [
        ...personnes,
        {prenom: 'Jean', nom: 'Dupont'}
    ]
);
```

Si vous voulez ajouter un élément au début et non à la fin, il faudra faire:

```jsx
const [personnes, setPersonnes] = useState([]);

setPersonnes(
    [
        {prenom: 'Jean', nom: 'Dupont'},
        ...personnes,
    ]
);
```

### Supprimer un élément d'un tableau contenu dans l'état

Pour enlever un élément d'un tableau, on peut utiliser filter() car cette méthode crée un nouveau tableau sans modifier
le tableau sur lequel elle est appliquée:

```jsx
const personneASupprimer = {
    id: 42,
    prenom: 'Jean',
    nom: 'Dupont',
};

setPersonnes(
    personnes.filter(p => p.id !== personneASupprimer.id)
);
```

### Transformer un tableau contenu dans l'état

Pour transformer un tableau par exemple pour modifier un élément ou tous les éléments d'un tableau, il faut utiliser
map():

```jsx
const nextCounters = counters.map((c, i) => {
    if (i === index) {
        return c + 1;
    } else {
        return c;
    }
});
setCounters(nextCounters);
```

### Ajouter un élément à un index spécifique dans un tableau contenu dans l'état

Pour ajouter un élément à un index spécifique dans un tableau contenu dans l'état il faut utiliser la méthode slice et
l'opérateur spread()

```jsx
const [tableau, setTableau] = useState([]);

setTableau(
    [
        ...tableau.slice(0, indexInsertion),
        42,
        ...tableau.slice(indexInsertion),
    ]
);
```

### Trier un tableau contenu dans l'état

Pour trier un tableau contenu dans l'état il faut créer une copie du tableau avec l'opérateur spread et ensuite utiliser
par exemple sort() ou reverse() sur cette copie:

```jsx
const nouveauTableau = [...tableau];
tableau.reverse();
setTableau(nouveauTableau);
```

### Modifier un tableau contenant des objets

On a pas le droit de faire :

```jsx
const copie = [...personnes];
const personneAMaj = copie.find(p => p.id === personne.id);
personneAMaj.prenom = 'Julie';
setPersonnes(copie);
```

Le spread réalise une copie partielle de personnes et le nouveau tableau contient donc les références des objets
précédents.

En modifiant une personne du nouveau tabeleau on modifie donc en fait la personne de l'ancien tableau car c'est le même
objet.

Il faut faire:

```jsx
setTableau(
    personnes.map(personne => {
        if (personne.id === personneId) {
            return {...personne, prenom: 'Julie'};
        } else {
            return personne;
        }
    })
);
```

On a créé un nouvel objet littéral avec la propriété modifié avant de la retournér.