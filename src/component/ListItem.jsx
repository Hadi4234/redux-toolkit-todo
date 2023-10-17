import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {toggleTodo, deleteTodo } from '../redux/todoSlice.js';

const ListItem = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
  return (
    <div>
    <ul>
     {todos.map(todo => (
        <li key={todo.id}>
           <span
              className={`${todo.completed ? 'line-through' : 'no-underline'  }` }
              onClick={() => dispatch(toggleTodo(todo.id))}
           >
              {todo.text}
           </span>
           <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
        </li>
     ))}
    </ul>
    </div>
  )
}

export default ListItem