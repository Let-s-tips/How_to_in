# Comment démarrer un nouveau projet ?

En premier, on initialise le projet dans notre répertoire.
```
symfony new --webapp NomDuProjet
```
Ensuite, nous créons un fichier.env. local qui va contenir notre environnement de dev.
```
DATABASE_URL="mysql://USER:PASSWORD@127.0.0.1:3306/DBNAME?serverVersion=8&charset=utf8mb4"
```
Créer la BDD
```
symfony console doctrine:database:create
```
Nous allons avoir besoin de Webpack Encore et de SassLoader
```
composer require symfony/webpack-encore-bundle
yarn add sass-loader@^12.0.0 sass --dev
```
Il faut absolument décommenter la ligne 59 dans webpack.config.js
```
//.enableSassLoader()
```
Et modifier dans app.js 'app.css' en 'app.scss'

Installons bootstrap
```
yarn add bootstrap --dev
```
Ajouter dans app.scss
```
@import "~bootstrap/scss/bootstrap";
```
Installer le js de bootstrap
```
yarn add @popperjs/core --dev
```
Et dans app.js rajouter
```
require('bootstrap');
```
Pour charger les images nous devons ajouter le code suivant dans webpack.config.js
```
.copyFiles({
    from: './assets/images',

    // optional target path, relative to the output dir
    to: 'images/[path][name].[ext]',

    // if versioning is enabled, add the file hash too
    //to: 'images/[path][name].[hash:8].[ext]',

    // only copy files matching this pattern
    //pattern: /\.(png|jpg|jpeg)$/
})
```
Enfin pour finir installer le file loader
```
yarn add file-loader@^6.0.0 --dev
```
