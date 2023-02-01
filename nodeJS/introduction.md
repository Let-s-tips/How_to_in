En premier on initialise le dossier avec node ensuite on choisit notre framework backend les plus en vogues sont:

NestJS: un framework progressif pour développer des applications Node.js modernes.

Koa: un framework minimaliste pour Node.js qui offre une API conviviale et cohérente.

Hapi: un framework solide et éprouvé pour la création d'applications web hautes performances.

Meteor: un framework full-stack pour développer des applications web et mobiles en un seul code.

AdonisJS: un framework MVC élégant pour développer des applications web rapides et robustes.

ExpressJS: un framework simplifie la création d'applications Web telles que des API RESTful, des sites Web dynamiques,
des applications de chat, etc.

Apollo server: un framework pour développer des API GraphQL pour les applications web.

```
npm init
npm install express
```

on met en place nodemon qui est un outil qui aide à développer des applications basées sur Node.js en redémarrant
automatiquement l'application Node lorsque des modifications de fichiers dans le répertoire sont détectées.

Nodemon ne nécessite aucun changement supplémentaire à votre code ou à votre méthode de développement. Nodemon est un
enveloppe de remplacement pour node. Pour utiliser nodemon, remplacez le mot node sur la ligne de commande lors de
l'exécution de votre script. Il faut rajouter la commande plus bas dans le package.json

```
npm install --save-dev nodemon

"scripts": {
  "start": "nodemon index.js"
}
```

Nous pouvons créer un fichier index.js et lancer notre server avec ceci:

```javascript
const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World");
});
//Start Server
app.listen(3000, () => console.log("Server started on 3000"));
```

Importation de la bibliothèque Express: La première ligne importe la bibliothèque Express en utilisant la fonction "
require".

Initialisation de l'application: La deuxième ligne crée une instance d'application en appelant la fonction "express".

Définition de la route "/": La méthode "get" définit une route pour la requête GET à l'URL "/". La fonction anonyme (
req, res) gère la requête et la réponse pour cette route. Dans ce cas, la méthode "send" de l'objet "res" envoie une
réponse "Hello World" au client.

Démarrage du serveur: La dernière partie démarre le serveur en appelant la méthode "listen" de l'application sur le port

3000. Lorsque le serveur est prêt, un message "Server started on 3000" est affiché sur la console.

Ce code crée une application simple qui envoie une réponse "Hello World" pour la route "/". Le serveur écoutera les
requêtes sur le port 3000.

Nous pouvons importer un moteur de base de données

```
npm install sqlite3
```

et Un ORM (Object-Relational Mapping) qui est un ensemble de techniques pour accéder à des bases de données en utilisant
un modèle objet plutôt qu'une interface basée sur des requêtes SQL.

```
npm install typeorm
```

On organise les fichiers:

création d'un dossier src; déplacement de l'index.js et maj du script npm start

on importe notre orm et on se connecte à la base de données

```javascript
const express = require("express");
const typeorm = require("typeorm");

const app = express();

const datasource = new typeorm.DataSource({
    type: "sqlite",
    database: "./gameLibrarydb.sqlite",
    synchronize: true
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

const start = async () => {
    await datasource.initialize();
    app.listen(3000, () => console.log("Server started on 3000"));
}

//Start Server
start();
```

Cette fonction définit une fonction asynchrone nommée "start".

Initialisation de la source de données: La première ligne appelle la méthode "initialize" sur un objet "datasource".
Cette méthode est appelée en utilisant l'instruction "await", ce qui signifie que le code suivant ne sera pas exécuté
avant que cette tâche asynchrone ne soit terminée. Cette étape peut prendre un certain temps pour se terminer, comme la
connexion à une base de données ou le chargement de données à partir d'une API externe.

Démarrage du serveur: La deuxième ligne appelle la méthode "listen" sur un objet "app" sur le port 3000. Lorsque le
serveur est prêt à accepter les requêtes, un message "Server started on 3000" est affiché sur la console.

Cette fonction définit un point de démarrage pour l'application en initialisant d'abord la source de données, puis en
démarrant le serveur. L'utilisation de l'instruction "await" garantit que la source de données soit prête à être
utilisée avant le démarrage du serveur.

## Création de la premiere entitée

dans notre dossier src on va créer un autre dossier nommé entity qui va contenir toutes nos entités

```javascript
const Entity = require('typeorm').EntitySchema;

module.exports = new EntitySchema({
    name: "Game",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "text",
        },
    },
});
```

et on rajoute la ligne:

```javascript
    entities: [require("./entity/Game")],
```

dans notre datasource sous le synchronize

et pour finir on enregistre notre premier jeu

```javascript
const start = async () => {
    await datasource.initialize();
    await datasource.getRepository('Game').save({name: 'Duke Nukem'})
    app.listen(3000, () => console.log("Server started on 3000"));
}
```