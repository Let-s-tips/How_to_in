# Communication d'un composant enfant vers un composant parent

## Modification de App.js

Dans le composant racine, nous aurons la liste des tâches dans l'état local car c'est le composant qui est le premier
ancêtre commun des composants AddTodo et TodoList.

Or, ces composants ont besoin de modifier / afficher la liste des tâches.

```jsx
import {useState} from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
    const [todoList, setTodoList] = useState([]);

    function addTodo(content) {
        const todo = {id: crypto.randomUUID(), done: false, edit: false, content};
        console.log(todo);
        setTodoList([...todoList, todo]);
    }

    return (
        <div className="d-flex justify-content-center align-items-center p-20">
            <div className="card container p-20">
                <h1 className="mb-20">Liste de tâches</h1>
                <AddTodo addTodo={addTodo}/>
                <TodoList/>
            </div>
        </div>
    );
}

export default App;
```

Attention la fonction permettant d'ajouter une tâche ne modifie pas le tableau contenu dans l'état directement.

L'état local doit être considéré comme en lecture seule !

Il faut d'abord créer un nouveau tableau avec l'opérateur spread puis ajouter notre nouvelle tâche à celui-ci.

crypto.randomUUID() est une API web qui est compatible tout navigateur et permet de générer un UUID. C'est typiquement
le genre d'identifiant que l'on aura en BDD.

On passe cette fonction de modification au composant enfant AddTodo en prop. Ce composant pourra ensuite exécuter cette
fonction pour ajouter une tâche et donc modifier l'état du composant parent.

Il faut se rappeler que le composant enfant a l'interdiction totale de modifier une prop directement, c'est pour cela
qu'en React nous passons des fonctions pour que les composants enfants puissent demander la modification de l'état?

Autrement dit, un composant enfant ne doit jamais modifier l'état reçu en prop directement mais par l'intermédiaire
d'une fonction.

## Modification du composant AddTodo

Le composant AddTodo a en état local la valeur du champ avec une double liaison:

1. Lorsque nous modifions l'état avec setValue(), la valeur du champ est modifié grâce à la liaison value={value}.
2. Lorsque l'utilisateur modifie la valeur du champ, l'état local est modifié grâce à onChange={handleChange}.

Le composant reçoit en prop la fonction addTodo() et il invoque lorsque nous voulons ajouter une tâche, et donc modifier
l'état du composant parent.

```jsx
import {useState} from 'react';

export default function AddTodo({addTodo}) {
    const [value, setValue] = useState('');

    function handleChange(e) {
        const inputValue = e.target.value;
        setValue(inputValue);
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && value.length) {
            addTodo(value);
            setValue('');
        }
    }

    function handleClick() {
        if (value.length) {
            addTodo(value);
            setValue('');
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center mb-20">
            <input
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={value}
                className="mr-15 flex-fill"
                placeholder="Ajouter une tâche"
            />
            <button onClick={handleClick} className="btn btn-primary">
                Ajouter
            </button>
        </div>
    );
}
```

## Modification du partial _themes.scss

```css
input {
    border-radius: 4px;
    border: 1px solid var(--gray-2);
    padding: 10px 15px;
}
```