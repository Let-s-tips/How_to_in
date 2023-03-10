## Les groupes de serialization

Imaginons que l'on souhaite des représentations partielles de nos objets. On a notre objet Crew et pour chaque crew j'ai
une liste de wilders. Quand je clique sur un crew, j'ai une liste de wilders et je veux que sur la page de liste des
crew il y ait juste le nom des crews. Par contre, quand je clique sur un crew, je veux le nom, la date et la liste des
wilders. Je ne veux pas son id, mais son nom. J'assigne mes groupes à toutes les propriétés sauf à l'id. Mais attention,
il faudra reconstruire cet objet.

J'ai une annotation @Groups et je peux assigner des groupes à chaque propriété. Il faut voir cela comme un filtre
transitoire qui va s'intercaler entre la construction de l'objet à serializer et la requête SQL.

```php
use Symfony\Component\Serializer\Annotation\Groups;

class Crew 
{
    /**
     * @Groups({"crew:list", "crew:student"})
     */
    public $name;
    
    /**
     * @Groups("crew:student")
     */
    public $date;
    
    /**
     * @Groups("crew:student")
     */
    public $wilders;
}

class Wilder 
{
    /**
     * @Groups("crew:student")
     */
    public $id;
    
    /**
     * @Groups("crew:student")
     */
    public $name;
    
    /**
     * @Groups("crew:student")
     */
    public $city;
}

```

Le ClassMetadataFactory permet d'extraire les métadonnées liées à la classe que l'on va encoder avec AnnotationLoader et
Reader de Doctrine pour pouvoir lire le tout.

```php
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Component\Serializer\Mapping\loader\AnnotationLoader;

$classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));
$objectNormalizer = new ObjectNormalizer($classMetadataFactory);
$serializer = new Serializer(
    [new DateTimeNormalizer(), $objectNormalizer], 
    [new JsonEncoder()]
);

```

On a un paramètre context qui permet de passer des options à nos normalizer et encoder groups qui passe un tableau des
groupes.