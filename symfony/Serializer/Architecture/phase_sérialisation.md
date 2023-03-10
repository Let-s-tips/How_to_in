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
