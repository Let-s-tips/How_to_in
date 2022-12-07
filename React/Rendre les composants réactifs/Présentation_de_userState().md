# Présentation de useState()

## L'état d'un composant

Les composants ont souvent besoin de changer ce qu'ils affichent en fonction d'un interaction d"un utilisateur et de
sauvegarder des données comme la valeur courante d'un champ, un panier etc...

La mémoire d'un composant est appelé état(state) en REACT.

l'état d'un composant ne peut pas être sauvegardé dans des variables locales car elles ne sont pas sauvegardées entre
les rendus d'un composant et le changement de la valeur d'une variable local ne déclanchera aucun nouveau rendu du
composant.

Pour cette raison, nous utilisons des varibales spéciales appelées variable d'état et une fonction set associée qui
permet de mettre à jour cette varibale et de déclencher un nouveau rendu.

## Le hook d'état useState()

Les hooks sont des fonctions qui permettent d'interagir avec la gestion d'état local et de cycle de vie de REACT depuis
des composants.

Les hooks sont fournis par REACT et vous pouvez également en créer des personnalisés. Ils commencent par use car ils
permettent d'utiliser une fonctionnalité de REACT.

Le premier hook est un hook d'état qui permet de gérer un état local du composant.

C'est-à-dire qu'il permet de conserver une valeur, de la modifier et de déclencher un nouveau rendu du composant lorsqu"
elle est modifiée.

Il s'importe depuis REACT:

```jsx
import {useState} from 'react';
```

Il prend un unique argument qui est la valeur initiale de l'état local et retourne un tableau contenant à l'index 0 la
variable d'état et à l'index 1 une fonction liée à la variable et qui permet de modifier la valeur de la variable et de
déclencher un nouveau rendu du composant par React, cette fonction est appelée setter :

```jsx
const [state, setState] = useState(valeurInitiale);
```

La convention pour le nom du setter est d'utiliser le préfixe set suivi du nom d ela variable en camelCase.

Uun composant peut utiliser autant de variable d'état que nécesaire:

```jsx
function Composant() {
    const [age, setAge] = useState(42);
    const [prenom, setPrenom] = useState('Jean');
    const [todos, setTodos] = useState([{text: 'Apprendre React'}]);
    // ...
}
```

Il est important que les hooks soient déclarés au premier niveau du composant et ne soient pas imbriquées.

Voici un exemple minimaliste :

```jsx
import React, {useState} from 'react';

function Composant() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Vous avez cliqué {count} fois</p>
            <button onClick={() => setCount(count + 1)}>
                Cliquez ici
            </button>
        </div>
    );
}
```

## Fonctionnement interne du hook d'état

Les hooks ne sont pas magiques, REACT ajoute simplement des tableaux aux composants lors de l'exécution en se basant sur
l'ordre de déclaration des hooks sur le composant.

Comme les hooks sont déclarés au premier niveau du composant, ils sont toujours exécutrés dans le même ordre.

Voici une version simplifiée du fontcionnement:

```jsx
const hooksDuComposant = [];
let indexDuHookCourant = 0;

// Version simplifiée de useState() :
function useState(valeurInitiale) {
    const paire = hooksDuComposant[indexDuHookCourant];
    if (paire) {
        // C'est que ce n'est pas le premier rendu
        // et que la paire d'état existe
        indexDuHookCourant++;
        return paire;
    }

    // Sinon c'est que c'est le premier rendu
    // donc nous créons la paire
    paire = [valeurInitiale, setState];

    function setState(nouvelleValeur) {
        // Mise à jour de la valeur et du DOM
        paire[0] = nouvelleValeur;
        updateDOM();
    }

    // Stockage de la paire pour les prochains rendus
    hooksDuComposant[indexDuHookCourant] = paire;
    indexDuHookCourant++;
    return paire;
}
```

## Les règles pour structurer l'état des coposants

Voici les recommandations de React pour structurer l'état:

Grouper les états reliés: Si on met à jour systématiquement deux ou plus variables d'état en même temps, fusionnez les
dans une seule variable d'état.

Eviter les contradictions dans l'état: si plusieurs variables d'état entrent en contradiction suivant l'état de
l'application, modifiez l'état.

Eviter les redondances: Si vous pouvez calculer une information en utlisant plusieurs props ou plusieurs variables
d'état ne pas créer une varibale d'état pour cette information.

Eviter les duplications dans l'état : si les mêmes informations sont à plusieurs endroits de l'état, par exemple
imbriquées dans plusieurs objets, cela devient difficile à maintenir.

Eviter les imbrications profondes : évitez au maximum de créer des états qui comportent trop de niveaux d'imbrication d'
objets / tableaux. Cela devient difficile pour les mises à jour.