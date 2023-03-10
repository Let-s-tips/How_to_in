## Utilisation basique

Le Serializer de Symfony est facile à utiliser pour sérialiser et désérialiser des données. Pour initialiser un
Serializer, il suffit de créer une instance de la classe Serializer et de lui passer les normalizers et les encoders
nécessaires.

Ensuite, pour sérialiser des données, il suffit d'appeler la méthode serialize() avec les données à sérialiser et le
format de sortie souhaité, tel que JSON. Pour désérialiser des données, il suffit d'appeler la méthode deserialize()
avec les données à désérialiser, le type d'objet natif souhaité et le format d'entrée.
