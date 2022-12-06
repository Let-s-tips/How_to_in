# Afficher un formulaire

Pour afficher un formulaire via Twig, on intervient dans deux fichiers : un form et la page plus générale qui incluera ce dernier.

Dans customer/_form.html.twig
```php
{{ form_start(form) }}
    {{ form_widget(form) }}
    <button class="btn">{{ button_label|default('Save') }}</button>
{{ form_end(form) }}
```
Dans customer/add.html.twig
```php
{% extends 'base.html.twig' %}

{% block title %}New Customer{% endblock %}

{% block body %}
    <h1>Create a new customer</h1>
    {{ include('customer/_form.html.twig') }}
    <a href="{{ path('customer_index') }}">Back</a>
{% endblock %}
```