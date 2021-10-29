import React from 'react';
import TodoCard from './TodoCard';

export default function TodoList(props) {
  const deleteTodoHandler = (id) => {
    props.getTodoId(id);
  };

  console.log(props);
  const renderTodoList = props.todos.map((todo) => {
    return (
      <TodoCard
        todoListItem={todo}
        clickHandler={deleteTodoHandler}
        key={todo.id}
      ></TodoCard>
    );
  });
  return <div className="ui celled list">{renderTodoList}</div>;
}
