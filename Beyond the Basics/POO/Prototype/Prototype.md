## Prototype

Le Javascript est souvent décrit comme un langage basé sur des prototypes.

Si les autres propriétés (name, level, ...) diffèrent d'une instance à l'autre
(puisque différents objets auront des caractéristiques différentes),
mais si une fonction fait quant à elle strictement la même chose pour chacune des instances.
Cela n'a donc pas vraiment de sens de créer une nouvelle fonction à chaque fois.

Pour résoudre ce problème, nous pouvons utiliser ce que nous appelons le prototype.
Le prototype est la boîte à outils d'un objet.

Si on souhaite voir le prototype d'un objet, on utilise Object.getPrototypeOf(obj).

Ajoutons un prototype :

[Prototype](prototype.js)