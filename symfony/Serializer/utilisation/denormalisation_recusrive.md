## La dénormalization récursive

Pour la serialization, on a un objet Crew lié à des objets Wilder. Les types sont connus par PHP, mais dans le JSON, on
n'a aucune notion de types, donc on ne peut pas savoir ce qui est lié avec les wilders. C'est de type Wilder. En PHP, on
ne peut pas donner de type à la propriété. On va installer PropertyInfo qui va nous permettre de récupérer des données
sur les types de propriété. Il va être capable d'extraire ces données de plusieurs sources de métadonnées. Soit avec des
getter/setter/adder/remover/constructeur lié à cette propriété, il va trouver le type dans le getter ou le setter ou le
return type et du coup, il va faire la déduction. Sinon, il va aller dans la PHPDoc ou, s'il y a Doctrine, il va aller
trouver le mapping Doctrine et il va trouver le type PHP qui correspond au mapping du schéma de la base de données. Une
fois que l'on a ça, il faut aider le serializer grâce à ses sources de métadonnées à quelle est le type de cette
propriété. Là, on dit que c'est DateTimeInterface et SplFileObject.

```php
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\DataUriNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\PropertyInfo\Extractor\PhpDocExtractor;

class Crew 
{
    public $id;
    public $name;
    
    /**
     * @var \DateTimeInterface
     */
    public $date;

    /**
     * @var \SplFileObject
     */
    public $logo;
}

$objectNormalizer = new ObjectNormalizer(null, null, null, new PhpDocExtractor());
$serializer = new Serializer(
    [new DateTimeNormalizer(), new DataUriNormalizer(), $objectNormalizer], 
    [new JsonEncoder()]
);

```

À partir de Symfony, le serializer va lire le type de propriété et va indiquer au serializer que, quand il fait la
dénormalization récursive, il va indiquer que dans la propriété date, il faut utiliser le DateTimeNormalizer car il est
de ce type, il faut créer un objet et pas un string. Et dans le logo, on veut un objet de type SplFileObject et ça va
être créé dynamiquement. Grâce à ce composant, on va pouvoir régler un problème de sécurité en PHP connu et difficile.
Grâce au PropertyInfo, Symfony va lui-même vérifier le type au moment de la désérialization et va nous fournir une
erreur de type.