## Partie 2

Une refacto s'impose on va creer un fichier utils.js dans notre dossier src. Le fichier utils.js peut servir à regrouper
différentes fonctions
utilitaires ou des méthodes communes utilisées dans plusieurs parties d'un projet Node.js. Cela peut inclure des
fonctions pour la validation de données, la formattage de chaînes, la conversion de données, etc. L'objectif est de
centraliser le code réutilisable et de faciliter la maintenance du projet en évitant la duplication de code.

ici on transfert notre connection a la bdd

```javascript
const typeorm = require("typeorm");

module.exports = {
    datasource: new typeorm.DataSource({
        type: "sqlite",
        database: "./gameLibrarydb.sqlite",
        synchronize: true,
        entities: [require('./entity/Game')],
    }),
}
```

on va require notre datasource dans notre app pour pouvoir l'utiliser.

```javascript
const datasource = require("./utils").datasource;
```

Nous allons créer un controller qui va gérer notre CRUD:

OPERATION ---> HTTP ---> SQL

CREATE ---> POST ---> INSERT

READ ---> GET ---> SELECT

UPDATE ---> PUT ---> UPDATE

DELETE ---> DELETE ---> DELETE

Dans notre dossier SRC on crée un dossier controller et un controller que l'on nomme "gameController" en rapport avec
notre premiere table Game.

```javascript
module.exports = {
    create: (req, res) => {
        console.log(req.body);
        res.send("hello from game controller");
    }
}
```

Cette méthode est exportée en tant que module dans un fichier de contrôleur pour un projet Node.js qui utilise
l'architecture MVC (Modèle-Vue-Contrôleur). "Module.exports" est une variable de niveau module qui permet d'exporter des
données ou des fonctions depuis ce fichier de
contrôleur pour être utilisées dans d'autres parties du projet.

Dans ce cas, un objet est assigné à module.exports qui contient une seule méthode appelée create. Cette méthode prend en
entrée deux paramètres: req et res.

req représente la requête HTTP reçue par le serveur et res représente la réponse qui sera envoyée au client.

La méthode create utilise la propriété body de l'objet req pour afficher les données envoyées avec la requête dans la
console. Puis, il envoie une chaîne "hello from game controller" en tant que réponse au client en utilisant la méthode
send de l'objet res.

Ce contrôleur est censé gérer la logique de l'application pour une requête HTTP associée à la création d'un jeu, mais
dans ce cas précis, il ne fait que renvoyer une réponse simple pour tester la configuration.

Dans notre fichier index.js nous devons cahnger deux trois choses et rajouter la methode post. La méthode app.post
définit une route pour la requête HTTP POST pour "/api/game". Lorsqu'une requête POST est reçue pour "/api/game", la
méthode create du contrôleur de jeu sera appelée pour gérer la logique de l'application pour cette requête. Le
contrôleur de jeu est importé en utilisant gameController.create à partir du fichier de contrôleur de jeu associé.

```javascript
const express = require("express");
const datasource = require("./utils").datasource;
const gameController = require("./controller/gameController")

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/api/game", gameController.create);

const start = async () => {
    await datasource.initialize();
    app.listen(3000, () => console.log("Server started on 3000"));
}

//Start Server
start();
```

Ensuite nous modifions notre controller pour qu'il puisse agir avec notre repository afin de créer une nouvelle entrée
dans la bdd.
Création de la connection avec la bdd, on recupere le repository de notre entitée, on sauvegarde le corps de notre body
et si ceci est ok il nous renvoie un code 201 avec un message sinon on catch l'erreur et il nous renvoie un code 500
avec un message.

```javascript
const dataSource = require("../utils").dataSource;
const Game = require("../entity/Game");

module.exports = {
    create: (req, res) => {
        dataSource
            .getRepository(Game)
            .save(req.body)
            .then(() => {
                res.status(201).send("Success create a new game");
            })
            .catch(() => {
                res.status(500).send("Error while create a new game");
            });
    },
};
```

Pour ajouter une route :

Je crée la methode dans le controller, je relie cette méthode à une route en utilisant le bon verbe http et je test avec
rest client et un plugin celle-ci.

Ensuite on crée le read, update et delete



