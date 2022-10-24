# Création d'une app réact

Attention npm install des librairie javascript et npx exécute des librairies js

Pour créer, une app react on doit faire npx create-react-app nomdelapp. Avec cette commande, on a installé 3 librairies
React, react-dom et react-scripts

react: c'est le cœur du framework ceci va nous permettre de créer des composants que l'on va ensuite pouvoir utiliser
dans notre application.
react-dom: librairie qui va être complémentaire récupérée les composant pour les afficher sur un dom
react-scripts: ensemble de script qui va nous permettre de lancer un serv de dev, build .....

Toutes les librairies vont être installées dans nodes_modules que l'on add dans le .gitignore. Package est un fichier
qui récence toutes les librairies indispensables pour faire tourner notre application. Dedans aussi, on retrouve le nom
de l'app, la version.

dependencis: librairie utilisée

scripts: permet d'exécuter des scripts prés configurés

start permet de lancer l'app

build permet de construire pour la prod

test pour les test unitaires

eslint programme qui permet d'analyser notre code quand on l'écrit.

browserlist: permet de savoir si notre app fonctionne sur un certain type de navigateur

Pour re download nos dépendance npm install

npm start pour lancer le server
npm run build ceci permet de construire l'application pour l'envoyer en prod un dossier build sera crée avec notre css,
js et html.
npm run test permet de lancer un server de test il va charger tous les fichiers de test dans le src