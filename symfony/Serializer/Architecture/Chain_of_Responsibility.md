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
