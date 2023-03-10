## PDD

On peut aussi, si l'utilisateur ne nous a pas fourni d'id, mais je souhaite une valeur par défaut, elle sera utilisée.

```php
$result = $serializer->deserialize(
    '{"name": "PHP - mars 22"}', 
    Crew::class, 
    'json', 
    ['default_constructor_arguments' => ['id' => 1]]
);

```