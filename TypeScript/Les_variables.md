# Les variables

Une variable est l’emplacement de stockage, qui est utilisé pour stocker une valeur à référencer et à utiliser par les
programmes. Il agit comme un conteneur pour la valeur dans le code et doit être déclaré avant l’utilisation. Avec
TypeScript, les variables suivent les règles suivantes:

Le nom de la variable doit être un alphabet ou des chiffres numériques.

Le nom de la variable ne peut pas commencer par des chiffres.

Le nom de la variable ne peut pas contenir d’espaces ni de caractère spécial, à l’exception du trait de soulignement (_)
et du signe dollar ($)

Ce qui concerne la déclaration, TypeScript suit les mêmes règles que JavaScript. Les variables peuvent être déclarées en
utilisant: let et const.

## Déclaration avec Let

Pour résoudre les problèmes liés aux déclarations var, ES6 a introduit un nouveau type de déclaration de variables en
JavaScript, en utilisant les mots-clés let. Les déclarations let suivent la même syntaxe que les déclarations var.

```ts
//Déclaration du type et de la valeur dans la même ligne
let nom_variable: type_variable = valeur;

//Déclaration sans initialisation de valeur
let nom_variable: type_variable;

//Déclaration sans identification de type
let nom_variable = valeur;

//Déclaration sans type ni valeur
let nom_variable;

```

Lorsque la variable est déclarée à l’aide du mot clé let, elle utilise la portée de bloc ou la portée lexicale.
Contrairement à la variable déclarée à l’aide du mot-clé var dont les portées s’échappent vers leur fonction conteneur,
une variable à portée de bloc ne peut pas être visible en dehors de son bloc conteneur.

```ts
function my_function(input: boolean) {
    let x = 100;
    if (input) {
        let y = x + 1;
        return y;
    }
    // Error: "y" n'existe pas 
    return y;
}
```

Ici, nous avons deux variables locales x et y. La portée de x est limitée au corps de la fonction my_function() tandis
que la portée de y est limitée au bloc d’instructions contenant if.

## Déclaration avec CONST

La déclaration const est utilisée pour déclarer une valeur permanente, qui ne peut pas être modifiée ultérieurement. La
déclaration const suit les mêmes règles de portée que la déclaration let, mais nous ne pouvons pas lui réaffecter de
nouvelle valeur.

```ts
function my_function() {
    const MYCONST = "StackTrace";
    console.log("Bienvenue à " + MYCONST);
}

my_function(); // Affichage : Bienvenue à StackTrace
```

Si vous essayez de réassigner la variable const existante dans un code, le code générera une erreur.