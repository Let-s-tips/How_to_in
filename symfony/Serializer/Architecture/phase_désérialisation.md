## Phases de la désérialisation

La désérialisation se compose également de deux phases : le décodage et la denormalization.

La première phase, le décodage, consiste à prendre une donnée encodée dans un format tel que JSON et à la décoder en un
tableau associatif. Ensuite, la phase de denormalization permet de transformer le tableau associatif en un objet PHP.

Pour la phase de décodage, on utilise un decodeur. Par exemple, pour décoder un objet JSON, on peut utiliser le décodeur
JsonDecoder. Le serializer de Symfony implémente également l'interface DecoderInterface, donc il est également un
decodeur. On peut donc lui passer une liste de décodeurs en deuxième paramètre lors de l'initialisation.

Pour la phase de denormalization, on utilise également un normalizer. Le normalizer ObjectNormalizer est capable
d'utiliser toutes les propriétés et les méthodes d'un objet. En outre, il peut accéder au contenu des collections et des
tableaux liés à l'objet. Il peut également activer des options magiques telles que call et get. Toutefois, pour
l'utiliser, il faut installer le composant symfony/property-access.

Ainsi, la désérialisation consiste également en l'utilisation combinée de ces deux phases, où les données encodées sont
d'abord décodées en un tableau associatif, puis le tableau est denormalisé pour créer un objet PHP.
