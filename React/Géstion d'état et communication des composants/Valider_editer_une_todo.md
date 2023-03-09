# Valider et éditer une todo

## modification de App.js

Dans le composant racine, on ajoute une fonction pour passer une tâche en mode édition.

Quand la propriété d'une tâche vaut true nous coulons afficher le formulaire d'édition de cette tâche et quand elle vaut
false, on veut afficher la tâche.

On doit donc ajouter cette mécanique pour déclencher le mode édition.

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

    function toggleTodo(id) {
        setTodoList(
            todoList.map((todo) =>
                todo.id === id ? {...todo, done: !todo.done} : todo
            )
        );
    }

    function toggleTodoEdit(id) {
        setTodoList(
            todoList.map((todo) =>
                todo.id === id ? {...todo, edit: !todo.edit} : todo
            )
        );
    }

    return (
        <div className="d-flex justify-content-center align-items-center p-20">
            <div className="card container p-20">
                <h1 className="mb-20">Liste de tâches</h1>
                <AddTodo addTodo={addTodo}/>
                <TodoList
                    todoList={todoList}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                    toggleTodoEdit={toggleTodoEdit}
                />
            </div>
        </div>
    );
}

export default App;
```

## Modification de Todolist.js

Dans TodoList, on veut affficher un composant différent en mode édition ou non.

On doit faire une closure et la passer en prop pour permettre au composant TodoItem de déclencher le mode édition pour
une tâche donnée.

```jsx
import TodoItem from './TodoItem';
import EditTodo from './EditTodo';

export default function TodoList({
  todoList,
  deleteTodo,
  toggleTodo,
  toggleTodoEdit,
}) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo key={todo.id} todo={todo} />
        ) : (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={() => deleteTodo(todo.id)}
            toggleTodo={() => toggleTodo(todo.id)}
            editTodo={() => toggleTodoEdit(todo.id)}
          />
        )
      )}
    </ul>
  ) : (
    <p>Aucune tâche en cours </p>
  );
}
```

## Modification de TodoItem.js

Dans TodoItem, on passe simplement notre prop editTodo en gestionnaire d'événement pour le clic sur le bouton "modifier"

```jsx
export default function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
    return (
        <li className="mb-10 d-flex justify-content-center align-items-center p-10">
      <span className="flex-fill">
        {todo.content} {todo.done && '✅'}
      </span>
            <button className="btn btn-primary mr-15" onClick={toggleTodo}>
                Valider
            </button>
            <button className="btn btn-primary mr-15" onClick={editTodo}>
                Modifier
            </button>
            <button className="btn btn-reverse-primary" onClick={deleteTodo}>
                Supprimer
            </button>
        </li>
    );
}
```