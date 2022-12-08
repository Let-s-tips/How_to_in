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

Ici on crée un nouvel objet littéral qui n'a donc pas la même référence que l'objet contenu dans la variable d'état position et nous le passons à la fonction setter.

## Mettre à jour des objets avec la syntaxe spread (...)

