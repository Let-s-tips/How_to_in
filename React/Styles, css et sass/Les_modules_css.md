# Les modules

## Un module CSS c'est quoi ?

Un module css c'est un fichier dont toutes les classes et animations sont isolées localement par défaut.

Le css est normalement global par défaut. Les modules permettent de résoudre le probléme.

Ce n'est pas une spécification css ou des navigateurs, il s'agit d'une étape de build qui vont changer les nom des
classes pour permettre l'isolation.

## React et module css

create-react-app permet d'utiliser automatiquement les modules css par défaut.

Il suffit de respecter certaines conventions de nommage pour respecter la configuration de webpack. ils doivent avoir
comme nom :
```jsx
nomDuModule.module.css || nomDuModule.module.scss
```

exemple de style d'un module message.module.css:
```css
.theme {
    color: green;
}

.message {
    composes: theme;
    font-size: 20px;
}
```

Attention composes permet de fusionner des classes entre elle grâce au module css.

Pour l'utiliser dans des composants il faut l'importer :
```jsx
import styles from './message.module.css';

<li className={styles.message}>{message}</li>
```

On a juste à l'importer et lui donner le nom que l'on souhaite.

## Utilisation de plusieurs classes sur un élément

```jsx
<div className={`${style.class1} ${style.class2}`}></div>
```