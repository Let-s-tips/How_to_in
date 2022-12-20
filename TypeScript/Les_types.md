# Les types

## Le typage c'est quoi ?

Le système de types représente les différents types de valeurs pris en charge par le langage. Ce système de types
vérifie la validité des valeurs fournies, avant qu'elles ne soient stockées ou manipulées par le programme. TypeScript
prend en charge différents types de valeurs.

## Le type any.

C'est le "super type". Il est utilisé pour représenter n'importe quelle valeur. Si une variable ne peut être représentée
dans aucuns types de données de base, elle peut être déclarée en utilisant le type "any". cela permet d'ignorer la
vérification de type lors de la compilation.

```ts
let nom_variable: any = valeur;  
```

## Les types primitifs.

Les types primitifs ou prédéfini sont des types déjà implanté dans un langage de programmation, avec TS on a 6 types
primitifs.

## 1. Numérique

Utilisé pour représenter à la fois des entiers et des réels.

```ts
let nom_variable: number = valeur;  
```

## 2. Chaine de caractère

Utilisé pour représenter le texte

```ts
let nom_variable: string = valeur;
```

## 3. Booléen

Ne peut avoir que deux valeurs «true» et «false».

```ts
let nom_variable: boolean = valeur;
```

## 4. Néant

C’est un type de retour des fonctions qui ne renvoient aucun type de valeur. Il est utilisé là où aucun type de données
n’est disponible.

```ts
let nom_variable: Void;
```

## 5. Nulle

Représente une variable dont la valeur n’est pas définie. La valeur Null accepte une seule valeur «null».

```ts
let nom_variable: Null;
```

## 6. Indéfini

Désigne toutes les variables non initialisées. Il n’a qu’une seule valeur «undefined».

```ts
let nom_variable: undefined;
```

Les types de données null et non définis sont souvent une source de confusion. Les valeurs null et undefined ne peuvent
pas être utilisées pour référencer le type de données d’une variable. Ils ne peuvent être attribués que comme valeurs à
une variable.

Cependant, nul et indéfini ne sont pas les mêmes. Une variable initialisée avec undefined signifie que la variable n’a
aucune valeur ou aucun objet qui lui est assigné tandis que null signifie que la variable a été définie sur un objet
dont la valeur n’est pas définie.

## Les types personnalisés

## 1. Array

Un tableau est une collection d’éléments du même type de données. Comme JavaScript, TypeScript nous permet également de
travailler avec des tableaux de valeurs. Un tableau peut être écrit de deux manières:

```ts
var my_array: number[] = [1, 20, 3];
var may_array: Array<number> = [1, 20, 3];
```

## 2. Tuple

Le type Tuple comprend deux ensembles de valeurs de différents types de données. Cela nous permet d’exprimer un tableau
où le type d’un nombre fixe d’éléments est connu, mais ils ne sont pas les mêmes.

```ts
// Declarer un tuple  
var my_tuple: [string, number];

// Initialiser notre tuple  
my_tuple = ["stack", 1, "trace", 3];
```

## 3. Enum

Les énumérations définissent un ensemble de constantes nommées. TypeScript fournit des énumérations basées sur des
chaînes et des nombres.

```ts
enum my_enum {
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Livre = "LIVRE"
}

// Accès à notre enum 
my_enum.Livre; //retourne LIVRE
my_enum['Magazine'];//returns MAGAZINE
```

## 4. Function

Une fonction est constituée des blocs logiques de code pour organiser le programme. Comme JavaScript, TypeScript peut
également être utilisé pour créer des fonctions sous forme de fonction nommée ou de fonction anonyme.

```ts
//le type de retour de notre fonction est Number 
function my_function(a: number, b: number): number {
    return a + b;
} 
```

## 5. Class

Les classes sont utilisées pour créer des composants réutilisables et servent de modèle pour la création d’objets. C’est
une entité logique qui stocke des variables et des fonctions pour effectuer des opérations.

```ts
class my_class {
    name: string;

    constructor(name: string) {
        this.name = name;
        ;
    }

    my_function(): string {
        return "Bonjour " + this.name;
    }
}
```

## 6. Interface

Une Interface est une structure qui agit comme un contrat dans notre application. Il définit la syntaxe des classes à
suivre, signifie qu’une classe qui implémente une interface est obligée d’implémenter tous ses membres.

```ts
interface my_interface {
    name:string,
    my_function: ()=>string
}

var my_object:my_interface = {
    name:"StackTrace",

    my_function: ():string =>{return "Bonjour à tous "}
} 
```