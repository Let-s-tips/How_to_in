## Initialisation d'un Serializer

Pour initialiser un Serializer, on peut utiliser les composants fournis par Symfony en exécutant la commande composer
require symfony/serializer.

Ensuite, on crée une instance de la classe Serializer en lui passant deux paramètres : une liste de normalizers et une
liste d'encodeurs.

La liste de normalizers est une collection d'objets qui implémentent l'interface NormalizerInterface. Chaque normalizer
détermine s'il peut ou non transformer un objet en un tableau associatif. Si un normalizer peut transformer un objet en
un tableau associatif, sa méthode supports renvoie true. Si elle renvoie false, le normalizer suivant dans la chaîne est
appelé.

Il est possible d'enregistrer un nombre indéfini de normalizers et de dénormalizers. Si plusieurs normalizers peuvent
transformer le même objet, c'est le premier qui renvoie true qui est utilisé.

La liste d'encodeurs est une collection d'objets qui implémentent l'interface EncoderInterface. Chaque encodeur est
responsable de la conversion d'un format spécifique, comme JSON ou XML. Le Serializer utilise l'encodeur qui correspond
au format spécifié lors de la sérialisation.

Voici un exemple d'initialisation d'un Serializer utilisant JsonEncoder et PropertyNormalizer :

```php
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\PropertyNormalizer;

$encoders = [new JsonEncoder()];
$normalizers = [new PropertyNormalizer()];

$serializer = new Serializer($normalizers, $encoders);
```

Maintenant que le Serializer est initialisé, on peut utiliser ses méthodes pour sérialiser et désérialiser des objets
dans différents formats