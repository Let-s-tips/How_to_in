# make:auth c'est bien le faire à la main c'est mieux

Avant tout lire la [doc](https://symfony.com/doc/current/security.html#form-login).

## Créer un utilisateur
 ```
 symfony console make:user
 ```
Et faire une migration
```
php bin/console make:migration
php bin/console doctrine:migrations:migrate
```

## Authentification

En premier nous devons créer le controllet
```
symfony console make:controller Login
```
copié collé le code ci-dessous
```php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class LoginController extends AbstractController
{
    #[Route('/login', name: 'app_login')]
    public function index(AuthenticationUtils $authenticationUtils): Response
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();

        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('login/index.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }
}
```
De même pour la vue login
```php
{% extends 'base.html.twig' %}

{% block body %}
    {% if error %}
        <div>{{ error.messageKey|trans(error.messageData, 'security') }}</div>
    {% endif %}

    <form action="{{ path('app_login') }}" method="post">
        <label for="username">Email:</label>
        <input type="text" id="username" name="_username" value="{{ last_username }}"/>

        <label for="password">Password:</label>
        <input type="password" id="password" name="_password"/>

        {# If you want to control the URL the user is redirected to on success
        <input type="hidden" name="_target_path" value="/account"/> #}

        <button type="submit">login</button>
    </form>
{% endblock %}
```
Dans le fichier config/packages/security.yaml, ajouter
```yaml
security:
    firewalls:
        main:
            form_login:
                login_path: app_login
                check_path: app_login
```
## Déconnexion

Aller dans config/packages/security.yaml et ajouter
```yaml
security:
    firewalls:
        main:
            logout:
                path: app_logout

                # where to redirect after logout
                # target: app_any_route
```
Créer une route spécifique dans LoginController.php
```php
namespace App\Controller;

// ...

class LoginController extends AbstractController
{
    // ...

    #[Route('/logout', name: 'app_logout', methods: ['GET'])]
    public function logout()
    {
        // controller can be blank: it will never be called!
        throw new \Exception('Don\'t forget to activate logout in security.yaml');
    }
}
```