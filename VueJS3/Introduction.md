# Introduction

Un formulaire est composé de balises `form` et `select`. Lorsque l’utilisateur a fini, nous devons récupérer l’objet envoyé, le valider et le traiter côté serveur. Nous allons aborder plusieurs aspects : UX/UI, validation des champs synchrones et asynchrones, formulaires dynamiques, gestion de la soumission du formulaire (SPA et application serveur), gestion des erreurs, gestion d’état, structure et stockage, et gestion des événements.

Deux librairies vont être utilisées : `vee-validate` pour la gestion globale du formulaire, et `zod` pour la validation des types TypeScript. Voici la commande pour installer les deux librairies et permettre leur liaison :

```bash
npm i vee-validate zod @vee-validate/zod
```