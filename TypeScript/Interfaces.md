# Interface

Une interface est une structure qui définit le contrat dans votre application. Il définit la syntaxe des classes à
suivre. Les classes dérivées d’une interface doivent suivre la structure fournie par leur interface.

Le compilateur TypeScript ne convertit pas l’interface en JavaScript. Il utilise une interface pour la vérification de
type. Ceci est également connu sous le nom de « typage de canard » ou « sous-typage structurel ».

## Déclaration d’une interface

Une interface est définie avec le mot-clé interface et elle peut inclure des propriétés et des déclarations de méthode à
l’aide d’une fonction ou d’une fonction flèche .

```ts
//Exemple D'une interface 
interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (number) => number;
}
```

Dans l’exemple ci-dessus, l’interface IEmployee comprend deux propriétés empCode et empName. Il comprend également une
déclaration de méthode getSalaray qui comprend un paramètre numérique et un type de retour numérique. Cela signifie que
tout objet de type IEmployee doit définir ces deux propriétés et la méthode getSalary.

## Implémentation d’une interface

Les interfaces dans TypeScript peuvent être implémentées avec une classe avec le mot clé implements.

```ts
class Employee implements IEmployee {
    empCode: number;
    name: string;

    constructor(code: number, name: string) {
        this.empCode = code;
        this.name = name;
    }

    getSalary(empCode: number): number {
        return 60000;
    }
}

let my_emp = new Employee(102, "StackTrace");
```

## Extension des interfaces

Une interface aussi peut étendre d’une autre interface.

```ts
interface IPerson {
    name: string;
}

interface IEmployee extends IPerson {
    empCode: number;
}

let my_emp: IEmployee = {
    empCode: 109,
    name: "StackTrace",
}
```

## Interface comme type de variable

TypeScript utilise une interface comme type de variable pour assurer la bonne structure d’un objet. Voici l’exemple
ci-dessous pour mieux comprendre l’utilité de ce type d’interface.

```ts
interface KeyValue {
    key: number;
    value: string;
}

let kv1: KeyValue = {key: 1, value: "BMW"}; // OK

let kv2: KeyValue = {key: 1, val: "BMW"}; // Compiler Error: 'val' doesn't exist in type 'KeyValue '

let kv3: KeyValue = {key: 1, value: 657}; // Compiler Error: 
```

## Interface comme type de fonction

L’interface TypeScript est également utilisée pour définir un type de fonction. Cela garantit la signature de la
fonction.

```ts
interface Processor {
    (key: number, value: string): void;
};

function add(key: number, value: string): void {
    console.log('Ajouter : key = ' + key + ', value = ' + value)
};

function

delete (key
:
number
):
void {
    console.log('Clé supprimé.')
};


let ex1: Processor = add;
ex1(21, 'StackTrace'); //Résultat: Ajouter: key = 1, value = StackTrace 

ex2 = delete;
ex2(21); //Erreur
```

## Interface pour le type de tableau

Une interface peut également définir le type d’un tableau où vous pouvez définir le type d’index ainsi que des valeurs.

```ts
interface INumList {
    [index: number]: number
}

let numArr: NumList = [1, 2, 3];
numArr[0];
numArr[1];
```

## Propriété facultative

Parfois, nous pouvons déclarer une interface avec des propriétés en excès mais ne pouvons pas nous attendre à ce que
tous les objets définissent toutes les propriétés d’interface données. Nous pouvons avoir des propriétés facultatives,
marquées d’un “?”. Dans de tels cas, les objets de l’interface peuvent ou non définir ces propriétés.

```ts
interface IEmployee {
    empCode: number;
    empName: string;
    empDept?: string;
}

let emp1: IEmployee = {   // OK
    empCode: 19,
    empName: "Stack"
}

let emp2: IEmployee = {    // OK
    empCode: 91,
    empName: "StackTrace",
    empDept: "IT"
}
```