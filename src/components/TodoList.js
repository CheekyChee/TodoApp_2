import React from 'react';
import { Link } from 'react-router-dom';
import TodoCard from './TodoCard';

export default function TodoList(props) {
  const deleteTodoHandler = (id) => {
    props.getTodoId(id);
  };

  // console.log(props);
  const renderTodoList = props.todos.map((todo) => {
    // console.log(todo);
    return (
      <TodoCard
        todoListItem={todo}
        clickHandler={deleteTodoHandler}
        key={todo.id}
      ></TodoCard>
    );
  });
  return (
    <div className="main">
      <h2>Todo List</h2>
      <Link to="/add">
        <button className="ui button blue right">Add Todo</button>
      </Link>

      <div className="ui celled list">{renderTodoList}</div>
    </div>
  );
}
