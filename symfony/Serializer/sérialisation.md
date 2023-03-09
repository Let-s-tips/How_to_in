## La sérialisation

La sérialisation est le processus de conversion d'un objet PHP en un format ouvert tel que JSON ou XML.

Le Serializer de Symfony utilise deux phases pour la sérialisation : la normalization et l'encoding.

La normalization consiste à prendre l'objet PHP que l'on souhaite sérialiser et à le transformer en un tableau
associatif. Pour cela, on utilise un normalizer. Symfony fournit plusieurs normalizers, dont PropertyNormalizer, qui
transforme les propriétés publiques d'un objet en un tableau associatif.

Après la phase de normalization, on utilise l'encoding pour convertir le tableau associatif en un format spécifique tel
que JSON ou XML. Pour cela, on utilise un encodeur. Symfony fournit également plusieurs encodeurs, tels que JsonEncoder,
qui convertit le tableau associatif en JSON.

Voici un exemple de sérialisation d'un objet Crew en JSON :

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