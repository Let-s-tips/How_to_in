# Créer un formulaire

## créer un type

On peut uliser la commande
```
symfony console make:form
```

Ou à la main faire
```
SRC
 |->Form -> FormType.php
```
```
class CustomerType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('firstname', TextType::class)
            ->add('lastname', TextType::class)
            ->add('email', EmailType::class);
    }

    public function configurationOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Wilder::class,
        ]);
    }
}
```

## Afficher un formulaire

Pour afficher un formulaire via Twig, on intervient dans deux fichiers : un form et la page plus générale qui incluera ce dernier.

Dans customer/_form.html.twig
```
{{ form_start(form) }}
    {{ form_widget(form) }}
    <button class="btn">{{ button_label|default('Save') }}</button>
{{ form_end(form) }}
```
Dans customer/add.html.twig
```
{% extends 'base.html.twig' %}

{% block title %}New Customer{% endblock %}

{% block body %}
    <h1>Create a new customer</h1>
    {{ include('customer/_form.html.twig') }}
    <a href="{{ path('customer_index') }}">Back</a>
{% endblock %}
```