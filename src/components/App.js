import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { uuid } from 'uuidv4';
import api from '../api/todos';
import './App.css';
import Header from './Header';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoDetail from './TodoDetail';
import EditTodo from './EditTodo';
function App() {
  const LOCAL_STORAGE_KEY = 'todos';
  const [todos, setTodos] = useState([]);

  //retriveTodos
  const retriveTodos = async () => {
    const response = await api.get('/todos');
    return response.data;
  };

  const addToDoHandler = async (theTodo) => {
    console.log(theTodo);

    const request = {
      id: uuid(),
      ...theTodo,
    };

    const response = await api.post('/todos', request);
    setTodos([...todos, response.data]);
  };

  const removeTodoHandler = async (id) => {
    await api.delete(`/todos/${id}`);
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  const updateToDoHandler = () => {
    
  }

  useEffect(() => {
    // using the localStorage
    // const retriveTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveTodos) {
    //   setTodos(retriveTodos);
    // }

    const getAllTodos = async () => {
      const allTodos = await retriveTodos();
      if (allTodos) setTodos(allTodos);
    };
    getAllTodos();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
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
        {/* <Route
          path="/edit"
          render={(props) => (
            <EditTodo {...props} updateToDoHandler={updateToDoHandler} />
          )}
        /> */}
        <Route path="/todo/:id" component={TodoDetail} />
      </Switch>

      {/* <AddTodo addToDoHandler={addToDoHandler} /> */}
      {/* <TodoList todos={todos} getTodoId={removeTodoHandler} /> */}
    </div>
  );
}

export default App;
