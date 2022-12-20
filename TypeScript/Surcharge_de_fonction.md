# Surcharge de fonction

La surcharge de fonction est un mécanisme qui permet de créer plusieurs méthodes avec le même nom mais différents types
de paramètres et types de retour. Cependant, ils doivent avoir le même nombre de paramètres.

TS fournit le concept de surcharge de fonction. Ce qui permet d'avoir plusieurs fonctions avec le même nom.

```ts
function my_function(a: string, b: string): string;

function my_function(a: number, b: number): number;

function my_function(a: any, b: any): any {
    return a + b;
}

my_function("Bonjour ", "Stacktrace"); //  "Bonjour Stacktrace" 
my_function(30, 20); // 50
```

Dans l’exemple ci-dessus, nous avons la même fonction avec deux déclarations de fonction et une implémentation de
fonction. La première signature a deux paramètres de type chaîne, tandis que la deuxième signature a deux paramètres de
type numéro.

La dernière fonction doit avoir l’implémentation de la fonction. Étant donné que le type de retour peut être une chaîne
ou un nombre selon les deux premières déclarations de fonction, nous devons utiliser des paramètres compatibles et un
type de retour comme n’importe lequel dans la définition de fonction.

Par contre la surcharge de fonction avec un nombre différent de paramètres et de types portant le même nom n’est pas
prise en charge.

```ts
function ma_fonction_2(a: string, b: string): void //Compiler Error: Duplicate function implementation
{
    console.log(a + b);
}

function ma_fonction_2(a: number): void //Compiler Error: Duplicate function implementation
{
    console.log(a);
}
```

## Avantage de la surcharge de fonction

Economiser l’espace mémoire afin que l’exécution du programme devienne rapide.

Réutiliser le code, ce qui permet d’économiser du temps et des efforts.
