import React from 'react';
// import { Link } from 'react-router-dom';
import todoIcon from '../images/correct-symbol.png';
import { useHistory } from 'react-router-dom';

export default function TodoDetail(props) {
  const { todoDes, whatTodo } = props.location.state.todoDescription;

  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={todoIcon} alt={'todo'} />
        </div>
        <div className="content">
          <div className="header">{todoDes}</div>
          <div className="description">{whatTodo}</div>
        </div>
      </div>
      <div className="center-div">
        <button className="ui button blue center" onClick={handleClick}>
          Go home
        </button>
      </div>
    </div>
  );
}
