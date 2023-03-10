## Updating object

On veut mettre à jour un objet existant. On récupère un objet dans notre BDD et notre utilisateur nous fournit juste un
nom à mettre à jour. On a une clé object_to_populate où ici on va pouvoir passer un objet. Il ne va pas créer un objet
mais mettre à jour l'existant.

```php
$crew = new Crew();
$crew->id = 1;
$crew->name = "PHP - mars 22";

$result = $serializer->deserialize(
    '{"name": "PHP LYON - mars22"}', 
    Crew::class, 
    'json', 
    ['object_to_populate' => $crew]
);

```



PDD

On peut aussi, si l'utilisateur ne nous a pas fourni d'id, mais je souhaite une valeur par défaut, elle sera utilisée.