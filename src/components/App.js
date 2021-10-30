import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { uuid } from 'uuidv4';
import './App.css';
import Header from './Header';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoDetail from './TodoDetail';

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
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <TodoList {...props} todos={todos} getTodoId={removeTodoHandler} />
          )}
        />
        <Route
          path="/add"
          render={(props) => (
            <AddTodo {...props} addToDoHandler={addToDoHandler} />
          )}
        />
        <Route path="/todo/:id" component={TodoDetail} />
      </Switch>

      {/* <AddTodo addToDoHandler={addToDoHandler} /> */}
      {/* <TodoList todos={todos} getTodoId={removeTodoHandler} /> */}
    </div>
  );
}

export default App;
