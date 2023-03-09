## La désérialisation

La désérialisation est le processus inverse de la sérialisation. Elle consiste à prendre un format ouvert tel que JSON
ou XML et à le convertir en un objet PHP.

Le Serializer de Symfony utilise deux phases pour la désérialisation : le decoding et la denormalization.

Le decoding consiste à prendre les données JSON ou XML et à les convertir en un tableau associatif. Pour cela, on
utilise un decodeur. Symfony fournit plusieurs decodeurs, dont JsonDecode, qui décode les données JSON en un tableau
associatif.

Après la phase de decoding, on utilise la denormalization pour transformer le tableau associatif en un objet PHP. Pour
cela, on utilise un denormalizer. Symfony fournit également plusieurs denormalizers, tels que PropertyDenormalizer, qui
transforme un tableau associatif en un objet PHP.

Voici un exemple de désérialisation de données JSON en un objet Crew :

```php
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\PropertyNormalizer;

class Crew {
    public $name;
}

$crew = new Crew();
$crew->name = 'PHP - Lyon';

$encoders = [new JsonEncoder()];
$normalizers = [new PropertyNormalizer()];

$serializer = new Serializer($normalizers, $encoders);

$jsonContent = $serializer->serialize($crew, 'json');

```

Ici, on utilise JsonEncoder pour encoder le tableau associatif en JSON, et PropertyNormalizer pour normaliser l'objet
PHP en un tableau associatif.

Ainsi, la sérialisation permet de convertir facilement des objets PHP en différents formats ouverts tels que JSON ou
XML, ce qui est utile pour la communication entre différents systèmes.