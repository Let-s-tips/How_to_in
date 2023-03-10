## Créer un normalizer custom

Les normalizers de Symfony (DataUri...) implémentent le NormalizerInterface, mais je veux une sortie custom pour mon
objet. On a juste une interface à implémenter en disant ce que l'on supporte.

```php
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class CrewNormalizer implements NormalizerInterface
{
    public function normalize($object,format = null, array $context = [])
{
return [
'@type' => 'http://thiscrew.com/crew',
'name' => $object->name,
];
}

 public function supportsNormalization($data, $format = null) : bool
{
    return is_object($data) && $data instanceof Crew;
}
}

```