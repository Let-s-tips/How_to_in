# Introduction

TypeGraphQL est une bibliothèque qui rend ce processus agréable en définissant le schéma en utilisant uniquement des
classes et un peu de magie de décorateur.
"Il dispose également d'un ensemble de fonctionnalités utiles, comme la validation, l'autorisation et l'injection de
dépendances, qui permettent de développer rapidement et facilement des API GraphQL.

Comme mentionné, le développement d'une API GraphQL en Node.js avec TypeScript peut parfois être un peu pénible.
Pourquoi ? Voyons les étapes que nous devons généralement suivre.

Tout d'abord, nous créons tous les types de schéma en SDL. Nous créons également nos modèles de données en utilisant des
classes ORM, qui représentent nos entités de base de données. Ensuite, nous commençons à écrire des résolveurs pour nos
requêtes, mutations et champs. Cependant, cela nous oblige à commencer par créer des interfaces TypeScript pour tous les
arguments et entrées et/ou types d'objets. Après cela, nous pouvons effectivement implémenter les résolveurs en
utilisant des signatures génériques.

Le plus gros problème est la redondance de code qui rend difficile de maintenir tout en synchronisation. Pour ajouter un
nouveau champ à notre entité, nous devons parcourir tous les fichiers : modifier la classe d'entité, puis modifier le
schéma, et enfin mettre à jour l'interface. Cela vaut également pour les entrées ou arguments : il est facile d'oublier
de mettre à jour l'un d'entre eux ou de faire une erreur avec un type. De plus, que se passe-t-il si nous avons fait une
erreur de frappe dans un nom de champ ? La fonction de renommage (F2) ne fonctionnera pas correctement.

TypeGraphQL vient pour résoudre ces problèmes, en s'appuyant sur l'expérience de plusieurs années de développement d'API
GraphQL en TypeScript. L'idée principale est d'avoir une seule source de vérité en définissant le schéma en utilisant
des classes et un peu d'aide de décorateur. Des fonctionnalités supplémentaires comme l'injection de dépendances, la
validation et les gardes d'authentification aident à réaliser des tâches courantes qui devraient normalement être gérées
par nous-mêmes