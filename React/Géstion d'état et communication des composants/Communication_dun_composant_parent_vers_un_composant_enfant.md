# Communication d'un composant parent vers un composant enfant

## Modification de App.js

```jsx
import {useState} from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
    const [todoList, setTodoList] = useState([]);

    function addTodo(content) {
        const todo = {id: crypto.randomUUID(), done: false, edit: false, content};
        setTodoList([...todoList, todo]);
    }

    function deleteTodo(id) {
        setTodoList(todoList.filter((todo) => todo.id !== id));
    }

    return (
        <div className="d-flex justify-content-center align-items-center p-20">
            <div className="card container p-20">
                <h1 className="mb-20">Liste de tâches</h1>
                <AddTodo addTodo={addTodo}/>
                <TodoList todoList={todoList} deleteTodo={deleteTodo}/>
            </div>
        </div>
    );
}

export default App;
```

La fonction suppression utilise la méthode filter() qyu retourne un nouveau tableau sans modifier le tableau dans la
variable d'état todoList. On respecte la régle de ne pas modifier directement l'état.

On passe la fonction suppression à notre todoList en prop.

## Modification de TodoList.js

Dans le composant TodoList on affiche un message s'il n'y a pas de tâches. S'il y a au moins une tâche dabs le tableau
todolist nous parcourons le tableau et créons un composant TodoItem pour chaque tâche.

On utilise l'identifiant unique de la tâche comme key.

On utlise une closure pour créer une fonction anonyme retournant la fonction de suppression liée à la valeur de
l'identifiant unique de la tâche.

```jsx
import TodoItem from './TodoItem';

export default function TodoList({todoList, deleteTodo}) {
    return todoList.length ? (
        <ul>
            {todoList.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={() => deleteTodo(todo.id)}
                />
            ))}
        </ul>
    ) : (
        <p>Aucune tâche en cours </p>
    );
}
```

## Modification de TodoItem.js

Dans le composant d'affichage de chaque tâche nous avons simplement :

```jsx
export default function TodoItem({todo, deleteTodo}) {
    return (
        <li className="mb-10 d-flex justify-content-center align-items-center p-10">
            <span className="flex-fill">{todo.content}</span>
            <button className="btn btn-primary mr-15">Valider</button>
            <button className="btn btn-primary mr-15">Modifier</button>
            <button className="btn btn-reverse-primary" onClick={deleteTodo}>
                Supprimer
            </button>
        </li>
    );
}
```