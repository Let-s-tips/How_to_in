# Index

1. [Phases de la sérialisation](#Phases de la sérialisation
   )
2. [Phase de la désérialisation](#Phases de la désérialisation)]
3. [Pattern Chain of Responsibility](#Pattern Chain of Responsibility
   )
4. [Utilisation basique du Serializer](#Utilisation basique du Serializer)

---

## Phases de la sérialisation

La sérialisation se compose de deux phases : la normalization et l'encodage.

La première phase, la normalization, consiste à prendre un objet et à le transformer en un tableau associatif. Ensuite,
la phase d'encodage permet de le convertir en un autre format, comme le JSON ou le XML.

Pour la phase de normalization, il existe un normalizer sur Symfony appelé PropertyNormalizer. Il prend un objet PHP et
utilise ses propriétés publiques pour créer un tableau associatif. Cependant, il n'utilise que les propriétés publiques.

Le serializer de Symfony implémente lui-même l'interface NormalizerInterface, il est donc également un normalizer. On
peut donc appeler la méthode serialize->normalize, qui va déléguer au premier normalizer enregistré qui renvoie true
pour supports.

Pour la phase d'encodage, on utilise un encodeur. Par exemple, pour encoder un objet en JSON, on peut utiliser
l'encodeur JsonEncoder. Le serializer implémente également l'interface EncoderInterface, donc il est également un
encodeur. On peut donc lui passer une liste d'encodeurs en deuxième paramètre lors de l'initialisation.

Ainsi, la sérialisation consiste en l'utilisation combinée de ces deux phases, où l'objet est d'abord normalisé puis
encodé dans le format spécifié.

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

## Pattern Chain of Responsibility

Le Serializer de Symfony utilise le pattern Chain of Responsibility pour enregistrer et utiliser différents normalizers
et decoders. Ce modèle permet d'ajouter facilement de nouveaux normalizers et decoders au Serializer et de gérer des cas
particuliers.

On peut enregistrer un nombre indéfini de serializers et deserializers que l'on veut. Chacune de ces classes va
implémenter une interface normalizerInterface ou decoderInterface qui va avoir une méthode supports. Chaque normalizer
va dire "OK, moi, je sais transformer cet objet dans un tableau associatif" ou "non, je ne sais pas". Cette méthode
renvoie true ou false. Si elle renvoie false, le normalizer suivant est appelé dans la chaîne.

Il faut retenir que c'est toujours la première implémentation qui renvoie true qui a la main. Si on a deux
implémentations de normalizer qui sont capables de serializer un même objet, c'est le premier qui sera appelé et aura la
main.

## Utilisation basique du Serializer

Le Serializer de Symfony est facile à utiliser pour sérialiser et désérialiser des données. Pour initialiser un
Serializer, il suffit de créer une instance de la classe Serializer et de lui passer les normalizers et les encoders
nécessaires.

Ensuite, pour sérialiser des données, il suffit d'appeler la méthode serialize() avec les données à sérialiser et le
format de sortie souhaité, tel que JSON. Pour désérialiser des données, il suffit d'appeler la méthode deserialize()
avec les données à désérialiser, le type d'objet natif souhaité et le format d'entrée.
