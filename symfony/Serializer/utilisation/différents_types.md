Le Serializer de Symfony propose plusieurs types de normalizers pour gérer des cas particuliers :

Nativement, il y a trois classes pour la sérialisation :

PropertyNormalizer : qui accède aux propriétés publiques.

GetSetMethodNormalizer : similaire au précédent, mais utilise des méthodes "get", "set", "is" et "has" plutôt que des
propriétés publiques.

ObjectNormalizer : possède les capacités des deux premiers et peut également accéder aux collections et tableaux en
relation avec notre objet. Il utilise les méthodes "add" et "remove" pour les tableaux et peut activer les options
magiques "call" et "get". Il est capable d'utiliser tout type d'objet en installant le composant "composer require
symfony/property-access".

Si un objet a une structure un peu particulière, comme un ID privé accessible uniquement en lecture via un getter et une
propriété publique pour le nom, "GetSetNormalizer" et "PropertyNormalizer" peuvent tous deux travailler avec cet objet.

Il y a également des normalizers pour des types d'objets spécifiques :

DataUriNormalizer : qui gère les classes SplFileInfo, SplFileObject et HttpFoundation. Il transforme ces classes qui
représentent des fichiers en Data URI, un format standard en base 64 commençant par "data:".

DateIntervalNormalizer et DateTimeNormalizer : pour les classes DateInterval et DateTimeInterface, qui permettent de
transformer des dates en format standard ISO et inversement.

ConstraintViolationListNormalizer : ne fait que de la normalization pour renvoyer les erreurs standardisées du composant
Symfony.

JsonSerializableNormalizer : pour spécifier les propriétés de la classe à normaliser lors de l'utilisation de "
json_encode".

Exemple d'utilisation :

```php
class Crew {
    public $id;
    public $name;
    public $date;
    public $logo;
}

$crew = new Crew();
$crew->id = 1;
$crew->name = 'PHP - mars 22';
$crew->date = new \DateTimeImmutable('2022/01/01');
$crew->logo = new \SplFileObject('crew-logo.png');
```

Pour enregistrer de nouveaux normalizers, il faut prendre en compte leur priorité : ObjectNormalizer peut tout faire,
mais les DateTime et DateTimeUri doivent être enregistrés avant.

Il y a également un denormalizer spécifique, ArrayDenormalizer, qui permet de désérialiser un tableau d'objets.

Exemple d'utilisation :

```php
$result = $serializer->deserialize('JSON'
[
    {
        'id': 1, 'name': 'PHP - mars éé'
    },
    {
        'id': 2, 'name': 'JS - mars 22'
    }
]
JSON
    , sprintf('%s[]', Crew::class), 'json');

var_dump($result);
array(2) {
  [0]=>
  object(Crew)#2 (4) {
    ["id"]=>
    int(1)
    ["name"]=>
    string(5) "PHP - mars 22"
    ["date"]=>
    NULL
    ["logo"]=>
    NULL
  }
  [1]=>
  object(Crew)#3 (4) {
    ["id"]=>
    int(1)
    ["name"]=>
    string(5) "JS - mars 22"
    ["date"]=>
    NULL
    ["logo"]=>
    NULL
  }
}
```


