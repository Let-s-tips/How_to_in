# Implémentation de l'édition

## Modification de App.js

On ajoute une fonction pour éditer une tâche, elle change le contenue de celle-ci et passe le mode édition à false

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

    function editTodo(id, content) {
        setTodoList(
            todoList.map((todo) =>
                todo.id === id ? {...todo, edit: false, content} : todo
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
                    editTodo={editTodo}
                />
            </div>
        </div>
    );
}

export default App;
```

## Modification de TodoList.js

Dans le composant TodoList, on passe en prop au composant EditTodo la fonction permettant d'éditer la tâche en la liant
à l'id de celle-ci grance a une closure.

On passe également en prop la fonction permettant de modifier le mode édition de la tâche. On la renomme cancelEditTodo
car ici la propriété edit vaut forcement true et ne peut être passé qu'à false. On gange en lisibilité et on gagne en
maintenabilité

```jsx
import TodoItem from './TodoItem';
import EditTodo from './EditTodo';

export default function TodoList({
  todoList,
  deleteTodo,
  toggleTodo,
  toggleTodoEdit,
  editTodo,
}) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo
            key={todo.id}
            todo={todo}
            editTodo={(content) => editTodo(todo.id, content)}
            cancelEditTodo={() => toggleTodoEdit(todo.id)}
          />
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

## Modification de EditTodo.js

Le composant EditTodo est très similaire au composant pour ajouter une tâche:

```jsx
import { useState } from 'react';

export default function EditTodo({ todo, editTodo, cancelEditTodo }) {
  const [value, setValue] = useState(todo.content);

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && value.length) {
      editTodo(value);
      setValue('');
    }
  }

  function handleClick() {
    if (value.length) {
      editTodo(value);
      setValue('');
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center mb-10">
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
        className="mr-15 flex-fill"
        placeholder="Ajouter une tâche"
      />
      <button onClick={handleClick} className="btn btn-primary mr-15">
        Sauvegarder
      </button>
      <button onClick={cancelEditTodo} className="btn btn-reverse-primary">
        Annuler
      </button>
    </div>
  );
}
```