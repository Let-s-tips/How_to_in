# Introduction à la gestion d'état et aux communications des composants

## Les relations entre composants

Parent -> Enfant: on peut simplement utiliser des props.

Enfant -> Parent: Dans ce cas, il faut également utiliser des props. Le composent parent passe une fonction en props au
composant enfant qui permet de modifier l'état du composant parent. Le composant enfant n'a qu'à exécuter la fonction
lorsqu'il a besoin de modifier l'état du composant parent.

Composant fréres (de même niveau, siblings): Dans ce cas, il faut remonter l'état dans un composant ancêtre commun des
composants frères. Cet ancêtre commun pourra passer des données en props aux composants frères et les composants frères
pourront modifier l'état en exécutant des fonctions passées en prop par l'ancêtre commun.

Composant éloigné dans l'arbre : comment passer des donées entre un composant parent et un composant très en dessous dans
l'arbre des composants ? Une solution est de passer en prop tout le long de l'arbre les données et les fonctions de
modifications. Cette solution est trés répétitive et souvent illisible si elle est multipliée pour de nombreuses props.
On pourra utiliser createContext() et useContext() pour répondre à cette problématique.

Etat complexe : Souvent lorsque l'application devient un peu plus importante les composants en haut de l'arbre ont des
états complexes et des modifications plus avancées des états locaux interviennent. Un hook permet de répondre à cette
problématique: useReducer().