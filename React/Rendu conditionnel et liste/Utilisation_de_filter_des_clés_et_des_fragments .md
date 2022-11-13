# Utilisation de filter, des clés et des fragments

## Les clés (keys)

Si l"on ouvre la console et que l'on a:

"Warning: Each child in a list should have a unique “key” prop."

Cela signifie que chaque élément d'une liste devrait avoir une prop key unique.

Les clés permettent à REACT de savoir à quel élément d'un tableau un élément de liste correspond. c'est important si les
éléments d'un tableau peuvent être modifiés, par exemple leur index ou s'ils sont supprimés ou insérés.

En effet, dans ces cas, il est nécessaire de mettre a jour le dom et react doit savoir quelles mises à jour sont
nécessaires. Pour ce faire, il utilise la clé unique correspondant à chaque élément.

Le plus souvent, la clé est un id:

```jsx
function Articles({}) {
    const articles = [
        {title: 'Un titre 1', content: 'Contenu 1', id: 1},
        {title: 'Un titre 2', content: 'Contenu 2', id: 2},
        {title: 'Un titre 3', content: 'Contenu 3', id: 3},
    ];

    return (
        <div style={{width: '700px'}}>
            <h1 className="mb-20">Liste des articles</h1>
            {articles.map((article) => (
                <Article
                    key={article.id}
                    content={article.content}
                    title={article.title}
                />
            ))}
        </div>
    );
}
```

## Afficher plusieurs éléments sur le DOM pour chaque élément du tableau

Comme dans notre exemple, le plus souvent vous voudrez afficher plusieurs éléments sur le dom pour un meme élément du
tableau qui sera objet.

Dans ce cas on peut utiliser un fragment sur lequel on utilisera la prop key unique.

Pour pouvoir utiliser la prop il faut utiliser la syntaxe <fragement> et na la syntaxe raccourcie <> que nous avions
vue:

```jsx
import { Fragment } from 'react';

function Articles({}) {
  const articles = [
    { title: 'Un titre 1', content: 'Contenu 1', id: 1 },
    { title: 'Un titre 2', content: 'Contenu 2', id: 2 },
    { title: 'Un titre 3', content: 'Contenu 3', id: 3 },
  ];

  return (
    <div style={{ width: '700px' }}>
      <h1 className="mb-20">Liste des articles</h1>
      {articles.map((article) => (
        <Fragment key={article.id}>
          <div className="card p-20 mb-20">
            <h2 className="mb-10">
              <h2>{article.title}</h2>
            </h2>
            <p>{article.content}</p>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default Articles;
```