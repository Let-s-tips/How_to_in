# Les classes

TypeScript est du JavaScript orienté objet. Il prend en charge les fonctionnalités de programmation orientées objet
telles que les classes, les interfaces, etc.

Une classe en termes de Programmation orienté objet est un modèle pour la création d’objets. Une classe encapsule les
données de l’objet. Typescript fournit un support intégré pour ce concept appelé classe. JavaScript ES5 ou une version
antérieure ne prenait pas en charge les classes. Typescript obtient cette fonctionnalité de ES6.

## Créer une classe Typescript

Pour déclarer une classe en TypeScript vous devez utiliser le mot clé class.

```ts
class ma_classe {
    //traitement
}
```

Une définition de classe peut inclure les éléments suivants:

Champs – Un champ est une variable déclarée dans une classe. Les champs représentent les données relatives aux objets

Constructeurs – Responsable de l’allocation de mémoire pour les objets de la classe

Fonctions – Les fonctions représentent les actions qu’un objet peut effectuer. Ils sont aussi parfois appelés méthodes

```ts
class Voiture {
    //Champs
    marque: string;

    //constructor 
    constructor(marque: string) {
        this.marque = marque
    }

    //fonction 
    marque_voiture(): void {
        console.log('Marque : ' + this.marque);
    }
}
```

L’exemple déclare une classe Voiture. La classe a un champ nommé marque. Le mot-clé var n’est pas utilisé lors de la
déclaration d’un champ. L’exemple ci-dessus déclare un constructeur pour la classe.

Un constructeur est une fonction spéciale de la classe qui est responsable de l’initialisation des variables de la
classe. TypeScript définit un constructeur à l’aide du mot-clé constructeur. Un constructeur est une fonction et peut
donc être paramétré.

Le mot clé this fait référence à l’instance actuelle de la classe. Ici, le nom du paramètre et le nom du champ de la
classe sont les mêmes. Par conséquent, pour éviter toute ambiguïté, le champ de la classe est préfixé par le mot clé
this.

## Créer un objet d’Instance

Pour créer une instance de la classe, nous allons utiliser le mot clé new suivi du nom de la class.

```ts
var object_name = new class_name([arguments])
//Exemple
var voiture = new Voiture("BMW");
```