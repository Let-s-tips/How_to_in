# Utilisation de css & React

## Ajouter des classes aux éléments JSX

Il faut obligatoirement utiliser l'attribut classname:

```jsx
<p className="menu navigation-menu">Menu</p>
```

On peut utiliser aussi des variables pour modifier les classes suivant des conditions :

```jsx
import {render} from "react-dom";

render()
{
    let className = "menu"
    if (condition) {
        className += 'menu-active';
    }
    return <p className={className}>Menu</p>
}
```

## Importer du css grâce à webpack

Avec webpack on peut créer directement un fichier css et l'importer dans le composant.js. En production tout le css est
mis dans un seul fichier par webpack.

Attention lorsque l'on construit l'application avec npm run build le style n'est pas isolée celui sera compilé dans le
même fichier. Cette méthode est conseillée uniquement pour le style global de l'application.

Pour le reste, nous devons isoler le CSS.