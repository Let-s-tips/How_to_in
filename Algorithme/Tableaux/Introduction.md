## Les tableaux

Un tableau est une structure de données séquentielle/linéaire qui contient une séquence finie d'éléments auxquels on peut accéder efficacement par leur position, ou indice.

Dans les langages à typage statique, tous les éléments du tableau doivent être du même type. Dans les langages dynamiques, ce n'est pas le cas.

Dans la plupart des langages, la position ou l'indice du premier élément est 0.

### Performance des opérations

Le temps d'accès à un élément par son indice est constant (O(1)), quel que soit l'élément. En effet, les éléments d'un tableau sont contigus dans l'espace mémoire.

Le processeur peut facilement calculer l'emplacement de l'élément à partir de l'adresse du début du tableau et de la position de l'élément. Il peut donc le récupérer directement sans avoir à parcourir le tableau.

Les opérations d'insertion et de suppression d'éléments sont complexes sans recréer un nouveau tableau, car il faut réallouer un espace contigu dans la mémoire. Ces opérations sont donc de complexité O(n), car il faut parcourir tout le tableau pour décaler les éléments ou ajouter un élément.

## Utilisation mémoire

L'utilisation mémoire est exactement proportionnelle au nombre d'éléments dans le tableau. Il n'y a pas d'espace non utilisé comme dans d'autres structures.

Photo à venir.