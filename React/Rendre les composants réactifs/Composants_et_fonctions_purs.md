# Composants et fonctions purs

## Les fonctions pures et React

Les fonctions pures sont des fonctions dont le résultat ne dépend que des arguments passés et qui n’ont
pas d’effets extérieurs (appelés effets de bord). Chaque sortie d'une fonction ne dépend ainsi que de son
entrée.

Pour React, tous vos composants sont des fonctions pures. Cela signifie que vos composants doivent
toujours retourner le même JSX s'ils reçoivent les mêmes entrées.

Les entrées d'un composant en React proviennent des props, du contexte ou de l'état (state). Nous
verrons bientôt le contexte et l'état.

Avec le Strict Mode que nous activons pendant le développement, React s'assure que les composants sont
purs en les affichant deux fois.

S'il n'est donc pas possible de modifier des variables préexistantes d'un composant, car ils doivent être purs,
il est possible de modifier des variables et des objets qui sont créés par le composant pendant le rendu.

Ainsi, s'il est interdit avec React de faire :

```jsx
let uneVar = 0;

function Composant() {
    uneVar = uneVar + 1;
    return <h2>{uneVar}</h2>;
}
```

Car ici le composant a un effet de bord en modifiant une variable externe au composant.

On peut tout à fait modifier des variables ou objets défini dans le composant :

```jsx
function Composant() {
    let uneVar = [];
    for (let i = 1; i <= 12; i++) {
        uneVar.push(<AutreComposant key={i} uneProp={i}/>);
    }
    return uneVar;
}
```

## Utiliser des effets de bord

Dans une application il est nécessaire d'effectuer des changements externes aux composants : par exemple
pour déclencher des animations, charger des données etc.

En React, ces effets doivent être déclenchés dans les gestionnaires d'événement. Les gestionnaires
d'événements sont des fonctions exécutées par React lorsque l'utilisateur effectue une action, par exemple un
clic sur un bouton.

Les gestionnaires d'événements n'ont pas à être purs car ils ne sont pas exécutés pendant le rendu des
composants.

## Pourquoi les composants doivent-ils être purs avec React ?

1. Pour que les composants puissent être rendus dans différents environnement. Puisqu'ils
   retournent le même résultat pour les mêmes entrées, un composant peut être utilisé dans différents
   environnements.
2. Pour que les composants puissent être mis en cache. React peut améliorer les performances en
   sautant le rendu des composants donc les entrées n'ont pas changé.
3. Pour que les rendus puissent être interrompus lors dr nouveaux événements. Si des entrées
   changent suite par exemple à une interaction utilisateur, React peut stopper le rendu en cours sans perte
   de temps et demander un nouveau rendu immédiatement avec les nouvelles entrées?

## Les étapes du rendu de l'UI avec React

Avant que les composants soient affichés sur l'écran, ils doivent être rendus par React. Les étapes de ce
rendu sont les suivantes :

1. Déclenchement (triggering) du rendu
2. Rendu (rendering) du composant
3. Affichage (committing) sur le DOM

### 1 - Déclenchement du rendu

   Il y a deux raisons pour laquelle un rendu est déclenché : le rendu initial et le rendu lorsque l'état d'un
   composant change.
   Le rendu initial est simplement déclenché par :
   ReactDOM.render()

   Lorsqu'un composant a été rendu initialement, les rendus suivants sont déclenchés par la mise à jour de
   son état avec les fonctions set. Nous verrons cela au cours du chapitre.
   La mise à jour de l'état d'un composant va automatiquement déclencher une mise en attende d'un nouveau
   rendu.


###   2 - Le rendu du composant (rendering)
   
Après le déclenchement d'un rendu, React exécute le composant pour savoir quoi afficher sur l'écran.
   C'est ce qu'on appelle le rendering.

   Pour le rendu initial, React appelle le composant racine, qui va appeler à son tour tout l'arbre des
   composants.

   Pour les rendus suivants, React appelle le composant dont l'état a été mis à jour et qui a déclenché la
   demande de rendu. Si le composant retourne d'autres composants, et que ces autres composants retournent
   eux-mêmes d'autres composants React va rendre tous ces composants.

###   3 - Affichage sur le DOM
   Après la phase de rendering, et que tous les composants dont l'état a été modifié et leurs enfants aient été
   appelés, React va modifier le DOM.

   Pour le rendu initial, React va utiliser la méthode appendChild() pour ajouter tous les nœuds du DOM qu'il a
   créé.

   Pour les rendus suivants, React va effectuer uniquement les modifications minimales nécessaires qui ont
   été calculées pendant la phase de rendu (rendering).

   Cela signifie que React ne modifie les nœuds du DOM uniquement dans le cas où il y a une différence entre
   les différents rendus.