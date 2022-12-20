# Les opérateurs

## Les opérateurs arithmétiques

    Addition ->         a + b   Somme de a et b
    Soustraction ->     a – b   Différence de a et b
    Multiplication ->   a * b   Produit de a et b
    Division ->         a / b   Quotient de a et b.
    Modulo ->           a % b   Reste de a divisé par b.
    Incrémentation ->   a++     Incrémenter la valeur a de 1
    Décrémentation ->   a—      Décimenter la valeur a de 1

## Les opérateurs de comparaison

    ==	a == b  Vérifie si a et b sont égaux ou non.
    ===	a === b Vérifie si le type et la valeur des deux élements a et b sont égaux ou non.
    !=	a != b  Vérifie si a et b ne sont pas égaux .
    !==	a !== b Vérifie que le type et la valeur des deux éléments a et b ne sont pas égaux .
    >	a > b   Vérifie si la valeur des opérandes de gauche (a) est supérieure à la valeur de l’opérande de droite (b).
    >=	a >= b  Vérifie si la valeur des opérandes de gauche (a) est supérieure où égale à la valeur de l’opérande de droite (b).
    <	a < b   Vérifie si la valeur des opérandes de gauche (a) est inférieur à la valeur de l’opérande de droite (b).
    <=	a <= b  Vérifie si la valeur des opérandes de gauche (a) est inférieur où égale à la valeur de l’opérande de droite (b).

## Les opérateurs logiques

    &&	a && b	Renvoie true (Vrai ) si les deux opérandes a et b sont vrai, sinon renvoie false ( Faux).
    ||	a || b	Renvoie true (Vrai ) si l’une des deux opérandes a et b sont vrai, sinon renvoie false ( Faux).
    !	!a	Renvoie le résultat inverse d’un opérande a, Si a égale à false (faux) le résultat sera true sinon il seras false (Faux) .

## Les opérateurs d'affectation

    = a = b     Attribue la valeur de b à notre variable a .
    += a += b   Attribue la valeur de b plus la valeur de a à la variable a (De même : a = a + b)
    -= a -= b   Attribue la valeur de a moins la valeur b à la variable a (De même : a = a – b)
    *= a *= b   Attribue la valeur de a multiplié par b à la variable a (De même : a = a * b)
    /= a /= b   Attribue la valeur de a divisé par b à la variable a (De même : a = a / b)
    %= a%=b     Attribue le reste de la division de a par b à la variable a (De même : a = a % b)

## Opérateur de concaténation

```ts
let message = "Bienvenue à " + "StackTrace";
console.log(message);

// Affichage : Bienvenue à StackTrace 
```