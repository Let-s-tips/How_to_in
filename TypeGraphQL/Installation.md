Avant de commencer avec TypeGraphQL, nous devons installer certaines dépendances supplémentaires et configurer
correctement la configuration TypeScript pour notre projet.

Prérequis
Avant de commencer, nous devons nous assurer que notre environnement de développement comprend Node.js et npm.

Installation des packages
Tout d'abord, nous devons installer le paquet principal, ainsi que graphql-js et class-validator qui sont des
dépendances peer de TypeGraphQL :

```shell
npm i graphql class-validator type-graphql

```

De plus, le shim reflect-metadata est requis pour que la réflexion de type fonctionne :

```shell
npm i reflect-metadata

```

Nous devons nous assurer qu'il est importé en haut de notre fichier d'entrée (avant d'utiliser/importer type-graphql ou
nos résolveurs) :

```shell
import "reflect-metadata";

```

Configuration TypeScript
Il est important de définir ces options dans le fichier tsconfig.json de notre projet :

```shell
{
"emitDecoratorMetadata": true,
"experimentalDecorators": true
}
```

TypeGraphQL est conçu pour fonctionner avec Node.js LTS (10.3+, 12+) et les dernières versions stables. Il utilise des
fonctionnalités de ES2018, il faut donc configurer notre fichier tsconfig.json en conséquence :

```shell
{
"target": "es2018" // ou plus récent si votre version de node.js le prend en charge
}
```

En raison de l'utilisation de la dépendance graphql-subscription qui dépend d'un AsyncIterator, nous devrons également
fournir esnext.asynciterable à l'option lib :

```shell
{
"lib": ["es2018", "esnext.asynciterable"]
}
```

En fin de compte, l'exemple minimal de fichier tsconfig.json ressemble à ceci :

```shell
{
"compilerOptions": {
"target": "es2018",
"module": "commonjs",
"lib": ["es2018", "esnext.asynciterable"],
"experimentalDecorators": true,
"emitDecoratorMetadata": true
}
}
```
