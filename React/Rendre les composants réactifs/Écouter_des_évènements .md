# Écouter des évènements

## Ajouter de l'interactivité

Le gestionnaire d'événement est une fonction qui est exécutée lorsqu'un événement précis se produit sur l'élément cible.

Pour définit un gestionnaire d'événement il faut passer la fonction comme un prop avec comme nom, le nom d'un événement
précédé par on.

```jsx
export default function Button() {
    function handleClick() {
        alert('Clic !');
    }

    return (
        <button onClick={handleClick}>
            Cliquez
        </button>
    );
}
```

Par convention, les noms des gestionnaires d'événement doivent être précédés par handle et suivi du nom de l"événement.

Ol est possible de directement définir la fonction dans le JSW mais c'est trés rare. Car cela nuit à la lisibilité du
composant. il faut que le coprs du gestionnaire soit trés court.

```jsx
<button onClick={() => {
    alert('Clic !');
}}>
```

## Erreur commune : exécution des gestionnaires d'événements

Il faut faire attention: lorsque l'on execute le gestionnaires d'événement au lieu de passer leurs références.

Au lieu de faire:

```jsx
<button onClick={handleClick}>
```

On fait:

```jsx
<button onClick={handleClick()}>
```

Or si dans le premier cas on passe la référence de la fonction, pour qu'elle soit exécutée plus tard lorsque l'événement
clic survient, dans le second cas on exécute directment le focntion et on passe undefined en gestionnaire d"événement.

Dans la continuité, une erreur commune et d'exécuter directement un gestionnaire d'événement qui prend un ou plusieurs
arguments :

```jsx
<button onClick={alert('CLIC !')}>
```

au lieu de retourner une fonction qui retournera le gestionnaire d'événement:

```jsx
<button onClick={() => alert('CLIC !')}>
```

Dans le premier cas, l'alerte est immédiatement affichée car le gestionnaire est immédiatement exécuté.

Dans le second cas, la fonction anonyme crée une fonction gestionnaire, qui sera exécutée lors du clic.

## Propagation des événements

Tous les événements se propagent avec reaxt sauf onScroll

Pour stopper la propagation, ce qui est assez courant, il suffit d'appeler la méthode stopPropagation() sur l"événement
reçu par le gestionnaire d'événement:

```jsx
function handleClick(e) {
    e.stopPropagation();
    console.log('CLIC', e);
}
```

## Empêcher le comportement par défaut

Certains événements ont des comportements associés par defaut sur les navigateurs.

Le plus connu est le fait de rafraîchir le page lorsqu'un événement submit est émis dans un formulaire.

Pour empêcher ce comportement par défaut, qui est trés souvent ce que nous voulons avec un SPA, il suffit d'appeler la
méthode preventDefault() sur l'événement reçu par le gestionnaire d'événement:
```jsx
export default function Composant() {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert('Envoyé !');
    }}>
      <input />
      <button>Envoyer</button>
    </form>
  );
}
```