import {TodoCounter} from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoList } from './TodoLIst/TodoList';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';
import { TodoItem } from  './TodoItem/TodoItem';
import React from 'react';

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: false},
//   {text: 'Barrer la casa', completed: false},
//   {text: 'Lavar la loza', completed: true},
//   {text: 'Bañar el perro', completed: false},
//   {text: 'Usar estados derivados', completed: false},
//   {text: 'Escuchar canción favorita', completed: false},
//   {text: 'Ver white olander', completed: false},

// ]


// localStorage.setItem('TODOS_V!', JSON.stringify(defaulTodos))
//localeStorage.removeItem()//
function App() {
  const localeStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;

  if (!localeStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localeStorageTodos);
  }

  //Contador TODOS
  const [todos, setTodos] = React.useState(parsedTodos);

  const completedTodos = todos.filter( todo =>
    !!todo.completed).length;
  const totalTodos=todos.length;

  //Valores de busqueda
  const [searchValue, setSearchValue] = React.
  useState('');

  console.log("Usuario busca TODO de",searchValue);


  const searchedTodos = todos.filter(
    (todo) =>{
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
    }
  )

  //Modificar estado y localStorage
  const saveTodos = () => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed=true;

    setTodos(newTodos);
  }
  


  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter  completed={completedTodos} total={totalTodos}/>
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}/>

    <TodoList>
      {searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
        />
      ))}
      
    </TodoList>
    <CreateTodoButton/>
    </React.Fragment>
  );
}







export default App;
