Array Denormalization

On a un denormalizer spécifique qui permet de dénormaliser des tableaux d'objets ce qui n'est pas simple. On a un
document qui contient des objets

```php
use Symfony\Component\Serializer\Normalizer\ArrayDenormalizer;

$serializer = new Serializer(
    [new ArrayDenormalizer(), new ObjectNormalizer()], 
    [new JsonEncoder()]
);

$result = $serializer->deserialize(
    'JSON', 
    '[
        {
            {"id": 1, "name": "PHP - mars 22"}
        },
        {
            {"id": 2, "name": "TOTO"}
        }
    ]', 
    sprintf('%s[]', Crew::class), 
    'json'
);

```