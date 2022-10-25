# Attribut style

## Les doubles moustaches pour un style en ligne

Avec JSX et React il est obligatoire d'avoir un objet dns l'attribut style.

Comme pour passer des objets dans les props nous devons utiliser les accolades pour le style.

```jsx
<p style={{backgroundColor: "red", color: "black"}}>Je suis un texte</p>
```

## Utilisation du camelCase

Comme tout est tranformé en objet JavaScript avec JSX , on ne peut pas utiliser des underscore ou tiret dans les noms
des propriétés css. le camelCase est obligatoire. Si cette régle n'est pas respecté on aura une erreur.