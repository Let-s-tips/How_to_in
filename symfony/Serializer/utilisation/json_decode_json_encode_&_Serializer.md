# Différence entre json_encode/json_decode et Serializer

Il est important de comprendre la différence entre json_encode/json_decode et le Serializer de Symfony.

json_encode et json_decode sont des fonctions PHP qui permettent de transformer des données PHP en format JSON et vice
versa. Ces fonctions sont très utiles pour la sérialisation et la désérialisation de données simples. Cependant, elles
ne sont pas adaptées pour traiter des objets complexes ou des relations entre objets.

Le Serializer de Symfony est un composant plus avancé et plus flexible pour la sérialisation et la désérialisation de
données. Il utilise des normalizers et des encodeurs pour transformer des objets PHP en différents formats ouverts tels
que JSON, XML ou CSV, et inversement.

Le Serializer de Symfony est plus puissant que les fonctions json_encode/json_decode car il permet de traiter des objets
complexes, de gérer les relations entre objets et de personnaliser la façon dont les données sont transformées. Par
exemple, il est possible de définir des normalizers et des encodeurs personnalisés pour des types de données
spécifiques.

Voici un exemple de sérialisation et de désérialisation d'un objet Conference avec le Serializer de Symfony :

```php
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\PropertyNormalizer;

class Crew {
    public $name;
}

$crew = new Crew();
$crew->name = 'PHP - mars 22';

$encoders = [new JsonEncoder()];
$normalizers = [new PropertyNormalizer()];

$serializer = new Serializer($normalizers, $encoders);

$jsonContent = $serializer->serialize($crew, 'json');

$crewDeserialize = $serializer->deserialize($jsonContent, Crew::class, 'json');

```

Ici, on utilise le Serializer de Symfony pour sérialiser l'objet Crew en JSON, puis le désérialiser en un nouvel
objet Crew.

En conclusion, le Serializer de Symfony est un composant plus avancé et plus flexible que les fonctions
json_encode/json_decode pour la sérialisation et la désérialisation de données. Il permet de gérer des objets complexes
et des relations entre objets, et offre des options de personnalisation pour la transformation de données.