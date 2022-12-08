# useState, batch et fonctions de mise à jour

## Mettre à jour l'état déclenche un rendu

Il est important de comprendre qu'avec REACT, ce n'est pas un événement, par exemple un clic qui va d"clancher une mise
à jour du DOM.

C'est la mise à jour de l'état avec une fonction setter qui déclenche un nouveau rendu.

React va ensuite ré-exécuter le composant avec la ou les nouvelles valeurs de l'état et aboutir à un rendu calculé qui
est le nouveau JSX à afficher c'est-à-dire à un nouvel état du DOM virtuel.

React va enfin effectuer comparer le nouvel état du DOM virtuel avec l'ancien état du DOM virtuel et va calculer les
modifications minimales à apporter sur le DOM du navigateur pour qu'il corresponde au nouvel état demandé.

Voici un exemple ou l'on doit utiliser plusieurs fois une fonction setter dans un gestionnaire d"événement:

```jsx
import {useState} from 'react';

export default function Compteur() {
    const [compteur, setCompteur] = useState(0);

    return (
        <>
            <h1>{compteur}</h1>
            <button onClick={() => {
                setCompteur(compteur + 1);
                setCompteur(compteur + 1);
                setCompteur(compteur + 1);
            }}>+3 ?
            </button>
        </>
    )
}
```

Ici au lieu de la valeur 3 attendue on obtient 1 aprés un clic sur le bouton.

La raison est que la fonction setter ne défini la nouvelle valeur de la variable d'état que pour le prochain rendu.

Lors du cloc nous avons à chaque fois la même instruction:

```jsx
setCompteur(compteur + 1);
```

Comme la valeur de compteur pour ce rendu est de 0 car nous avons passé 0 en valeur d'état initial à useState(), on
demande simplement 3 fois à REACT de définir pour le prochain rendu la valeur de compteur à 0 + 1 donc 1.

Cela revient en fait exactement à faire, pour le secon rendu:

```jsx
<button onClick={() => {
    setCompteur(compteur + 1);
    setTimeout(() => {
        setCompteur(compteur + 1);
    }, 3000);
}}>+3 ?</button>
```

## Mises à jour successives d'un état pendant le même rendu

React attend que tous les gestionnaires d'événements aient été exécutes avant de réaliser les mises à jour des variables
d'état demandées.

Cela permet de mettre à jour plusieurs variables d'état sans déclancher trop de rendus.

Ce fonctionnement est appelé le traitement par lots ou batching.

om est possible de mettre à jour plusieurs fois la même variable d'état juste avant le même rendu, même si c'est trés
rarement nécessaire, en passant une fonction à la fonction setter:

```jsx
<button onClick={() => {
    setCompteur(n => n + 1);
    setCompteur(n => n + 1);
    setCompteur(n => n + 1);
}}>+3 ?</button>
```

Ici n => n + 1 est appelée fonction de mise à jour.

Les fonctions de mise à jour doivent être pures et retourner la nouvelle valeur de la variable d'état.

React va mettre en attente toutes ces fonctions de mise à jour dans une queue le temps que tous les gestionnaires
d'événement aient été exécutés.

Ensuite au début du prochain rendu, React va les exécuter une par une pour déterminer la nouvelle valeur de la variable
d'état pour le nouveau rendu.

Nous aurons donc bien la valeur 3 lors d'un clic aprés le rendu initial.
