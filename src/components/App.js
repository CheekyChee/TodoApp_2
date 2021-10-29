import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import './App.css';
import Header from './Header';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

function App() {
  const LOCAL_STORAGE_KEY = 'todos';
  const [todos, setTodos] = useState([]);

  const addToDoHandler = (theTodo) => {
    console.log(theTodo);
    setTodos([...todos, { id: uuid(), ...theTodo }]);
  };

  const removeTodoHandler = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  useEffect(() => {
    const retriveTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveTodos) {
      setTodos(retriveTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container ui">
      <Header />
      <AddTodo addToDoHandler={addToDoHandler} />
      <TodoList todos={todos} getTodoId={removeTodoHandler} />
    </div>
  );
}

export default App;
