## Sélection d'attributs spécifiques

On peut dire dynamiquement au moment de la serialization et de la désérialization qu'on va passer un tableau qui a une
clé attributs. Ensuite, on dit que l'on veut l'attribut 'name', l'attribut 'wilder' et on veut en plus son id. On peut
imbriquer autant de relations que l'on veut. Le normalizer obéit à ce qu'on lui dit et va nous fournir ce qu'on lui a
demandé.

```php
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

$normalizer = new ObjectNormalizer();

$data = [
    'id' => 1,
    'name' => 'John Doe',
    'age' => 30,
    'address' => [
        'street' => '123 Main St',
        'city' => 'Anytown',
        'state' => 'CA',
        'zip' => '12345'
    ]
];

$context = [
    'attributes' => ['name', 'address' => ['city', 'state']]
];

$result = $normalizer->normalize($data, null, $context);

// Output: ['name' => 'John Doe', 'address' => ['city' => 'Anytown', 'state' => 'CA']]
```