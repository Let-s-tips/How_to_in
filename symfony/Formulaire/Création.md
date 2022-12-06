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
```php
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