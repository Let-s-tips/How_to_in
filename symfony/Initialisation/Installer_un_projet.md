## Installer un projet récupéré de git

Quand on Git clone un projet nous devons installer celui-ci sur notre machine

Installer les dépendances composer et yarn
```
composer install
yarn install
```
Modifier le fichier .env ou .env.local
```
DATABASE_URL="mysql://USER:PASSWORD@127.0.0.1:3306/DBNAME?serverVersion=8&charset=utf8mb4"
```
Créer la BDD
```
symfony console doctrine:database:create
```
Effectuer les migrations
```
symfony console doctrine:migrations:migrate
```
