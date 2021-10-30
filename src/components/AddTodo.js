import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function AddTodo(props) {
  const [todoDes, setTodoDes] = useState('');
  const [whatTodo, setWhatTodo] = useState('');

  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };


  const addForm = (e) => {
    e.preventDefault();
    if (todoDes === '' || whatTodo === '') {
      alert('All of the todo list is empty!!');
      return;
    }
    const theTodo = { todoDes, whatTodo };
    props.addToDoHandler(theTodo);
    setTodoDes('');
    setWhatTodo('');
  };


  return (
    <div className="ui main">
      <h2>Add TodoList</h2>
      <form className="ui form" onSubmit={addForm}>
        <div className="field">
          <label>What To do</label>
          <input
            type="text"
            name="what_todo"
            placeholder="What to do"
            value={whatTodo}
            onChange={(e) => setWhatTodo(e.target.value)}
          ></input>
        </div>
        <div className="field">
          <label>Todo</label>
          <input
            type="text"
            name="todo_description"
            value={todoDes}
            placeholder="Todo Description"
            onChange={(e) => setTodoDes(e.target.value)}
          ></input>
        </div>
        <button className="ui button blue">Add</button>
        <button className="ui button blue" onClick={handleClick}>
          Go home
        </button>
      </form>
    </div>
  );
}
