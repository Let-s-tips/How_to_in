# Les fonctions

## Les fonctions nommées

Une fonction nommée est une fonction où vous déclarez et appelez une fonction par son nom donné.

```ts
function ma_fonction() {
    console.log('Bonjour !')
}

ma_fonction(); //Sortie: Bonjour
```

Les fonctions en Typescript peuvent également inclure des types de paramètres et un type de retour.

```ts
function ma_fonction(name: string): string {
    console.log("Bonjour " + name);
}

ma_fonction(); //Sortie: Bonjour Toto
```

## Fonction anonyme

Une fonction anonyme est une fonction définie comme une expression. Cette expression est stockée dans une variable.
Ainsi, la fonction elle-même n’a pas de nom. Ces fonctions sont appelées à l’aide du nom de variable dans lequel la
fonction est stockée.

```ts
let fonction_anonyme = function () {
    console.log("Bonjour!");
};

fonction_anonyme(); //Sortie: Bonjour! 
```

Une fonction anonyme peut également inclure des types de paramètres et un type de retour.

## Paramètres de fonction

Les paramètres sont des valeurs ou des arguments passés à une fonction. Dans TypeScript, le compilateur s’attend à ce
qu’une fonction reçoive le nombre et le type exacts d’arguments définis dans la signature de la fonction. Si la fonction
attend trois paramètres, le compilateur vérifie que l’utilisateur a transmis des valeurs pour les trois paramètres,
c’est-à-dire qu’il vérifie les correspondances exactes.

```ts
function ma_fonction(greeting: string, name: string): string {
    return greeting + ' ' + name + '!';
}

ma_fonction('Bonjour', 'StackTrace');// Resultat : "Bonjour Stacktrace!"
ma_fonction('Bonjour'); // Erreur du compilateur : 2 arguments attendus, mais 1 obtenu.
ma_fonction('Bonjour', 'Stack', 'Trace'); //Erreur du compilateur : 2 arguments attendus, mais 3 obtenu.
```