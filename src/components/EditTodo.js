import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Edit(props) {
  const [todoDescription, setTodoDesription] = useState();
  const [whatTodoList, setWhatTodoList] = useState();
  // const [todoId, setTodoId] = useState();

  // const { id, todoDes, whatTodo } = props.location.state.todoDescription;
  
  // how do I convert this to use with setState???

 
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };

  const updateForm = (e) => {
    e.preventDefault();
    if (todoDescription === '' || whatTodoList === '') {
      alert('All of the todo list is empty!!');
      return;
    }
    const theTodo = { todoDescription, whatTodoList };
    props.updateToDoHandler(theTodo);
    setTodoDesription('');
    setWhatTodoList('');
  };

  return (
    <div className="ui main">
      <h2>Add TodoList</h2>
      <form className="ui form" onSubmit={updateForm}>
        <div className="field">
          <label>What To do</label>
          <input
            type="text"
            name="what_todo"
            placeholder="What to do"
            value={whatTodoList}
            onChange={(e) => setWhatTodoList(e.target.value)}
          ></input>
        </div>
        <div className="field">
          <label>Todo</label>
          <input
            type="text"
            name="todo_description"
            value={todoDescription}
            placeholder="Todo Description"
            onChange={(e) => setTodoDesription(e.target.value)}
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
