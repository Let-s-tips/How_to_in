## Présentation du composant Serializer et de ses fonctions

Le composant Serializer de Symfony est un outil puissant permettant de transformer des données en différents formats. Il
permet de sérialiser et désérialiser des données de manière efficace et flexible, en utilisant différents types de
normalizers pour gérer des cas particuliers.

Le Serializer est conçu pour transformer des structures de données natives du langage en formats spécifiques, tels que
JSON. Pour la sérialisation, le Serializer utilise deux phases : la normalization, qui transforme un objet PHP en un
tableau associatif, et l'encoding, qui encode le tableau associatif dans le format désiré. Pour la désérialisation, le
processus est inverse : le Serializer utilise le decoding pour transformer le format en tableau associatif, puis la
denormalization pour transformer le tableau associatif en objet PHP.

Le Serializer utilise le pattern Chain of Responsibility pour enregistrer et utiliser différents normalizers et
decoders. Chaque normalizer et decoder implémente une interface qui contient une méthode supports(), qui permet de
vérifier si le normalizer est capable de gérer les données à traiter. Si le normalizer ne peut pas traiter les données,
le Serializer appelle le normalizer suivant dans la chaîne, jusqu'à trouver celui qui peut gérer les données.
