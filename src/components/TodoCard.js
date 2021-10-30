import React from 'react';
import { Link } from 'react-router-dom';
import todoIcon from '../images/correct-symbol.png';

export default function TodoCard(props) {
  const { id, todoDes, whatTodo } = props.todoListItem;
  console.log(props.todoListItem);
  return (
    <div className="item">
      <img className="ui avatar image" alt="todoIcon" src={todoIcon} />
      <div className="content">
        <Link to={{ pathname: `/todo/${id}`, state: {todoDescription: props.todoListItem} }}>
          <div className="header">{whatTodo}</div>
          <div>{todoDes}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: 'red', marginTop: '7px' }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
}
