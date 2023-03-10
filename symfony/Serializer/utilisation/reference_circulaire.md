## Les références circulaires

On a un Wilder qui est lié à un Crew qui est lié au Wilder qui est lié au Crew qui est lié au Wilder qui est lié au
Crew. Symfony détecte une erreur qui lui lance une exception en disant : attention, il y a une référence circulaire, je
ne peux pas normalizer ça. C'est un objet Doctrine. Si tu rencontres ça, tu vas l'enregistrer et juste mettre l'id de
cet objet et, quand la référence circulaire sera détectée, le handler prendra la main et c'est le retour du handler qui
sera injecté. On peut changer la limite de l'arbre circulaire.

```php
$objectNormalizer->setCircularReferenceLimit(3);

```

## Les arbres

Cela marche pareil. On a un menu qui a différents niveaux. On utilise une annotation où l'on veut en serializer que 2
maximum.

```php
use Symfony\Component\Serializer\Annotation\MaxDepth;
class_exists(MaxDepth::class);

class MenuEntry
{
    public $name;
    /**
     * @var self
     *
     * @MaxDepth(2)
     */
    public $child;
}

$menu0 = new MenuEntry();
$menu0->name = 'Root Level';

$menu1 = new MenuEntry();
$menu1->name = 'level1';
$menu0->child = $menu1;

$menu2 = new MenuEntry();
$menu2->name = 'level2';
$menu1->child = $menu2;

$menu3 = new MenuEntry();
$menu3->name = 'level3';
$menu2->child = $menu3;

```

Nous devons l'activer via le contexte.

```php
$serializer->normalize($menu0, 'json', ['enable_max_depth' => true]);

```

On a aussi un handler qui permet, au lieu de ne pas le serializer, de le serializer et on va lui mettre un retour qui va
nous alerter qu'il a skipper car on ne veut pas des arbres géants.

```php
$objectNormalizer->setMaxDepthHandler(function (object $object) {
    return 'More levels available, skipped...';
});

```