## Hydrater à partir des constructeurs

On a une propriété privée ou publique, il faut l'instancier au moment où on crée l'objet. Rien à faire, Symfony le gère
automatiquement pour nous.

```php
class User
{
    private $id;
    private $name;
    
    public function __construct($id, $name)
    {
        $this->id = $id;
        $this->name = $name;
    }
    
    // Getters and setters...
}

$data = '{"name": "John Doe"}';

$serializer = new Serializer([new ObjectNormalizer()], [new JsonEncoder()]);
$user = $serializer->deserialize($data, User::class, 'json', ['constructor_arguments' => ['id' => 1]]);

```