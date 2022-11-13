## Sécurité

## Protection CSRF

Dans le fichier config/packages/security.yaml, ajouter
```yaml
security:
    firewalls:
        secured_area:
            form_login:
                enable_csrf: true
```
Dans templates/login/index.html.twig, ajouter au dessus du bouton submit
```php
<input type="hidden" name="_csrf_token" value="{{ csrf_token('authenticate') }}">
```

## Limiter les tentatives de connexion
Pour éviter le bruteforcing par exemple, ajouter les lignes suivantes à config/packages/security.yaml (selon celles qui vous intéressent)
```yaml
security:
    firewalls:
        main:
            # by default, the feature allows 5 login attempts per minute
            login_throttling: null

            # configure the maximum login attempts (per minute)
            login_throttling:
                max_attempts: 3

            # configure the maximum login attempts in a custom period of time
            login_throttling:
                max_attempts: 3
                interval: '15 minutes'
```