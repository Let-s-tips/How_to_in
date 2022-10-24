Cette classe va contenir des actions, qui seront appelées via le mécanisme de routing.

Par convention, le nom de ces classes est suffixé par Controller, par exemple, ForumController. Tu en déduiras
facilement le nom du fichier : ForumController.php.
On doit aussi lui donner un namespace.

Nous devons créer notre controller dans le dossier Controller qui se trouve lui-même dans src:

```
src
 |-> Controller -> SomeController.php
```

```php
<?php
// src/Controller/SomeController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

#[Route('/some', name: 'some_')]
class SomeController extends AbstractController
{

    #[Route('', name: 'index')]
    public function index(): Response
    {
        return $this->render('some/index.html.twig', [
        'foo' => $foo
])
    }
}

```