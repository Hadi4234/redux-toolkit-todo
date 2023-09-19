
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todoSlice.js';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
    <ul className=' flex flex-row justify-between mt-20 gap-40'>
      {todos.map((todo) => (
        <div className=' flex flex-row bg-yellow-200 gap-x-40 p-4 m-1 '>
      
        <li key={todo.id}>
          <span
            className={`${todo.completed ? 'line-through' : 'no-underline'  }` }
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
          </span>
         
        </li>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
      </div>
      ))}
    </ul>
    
    </>
    
  );
};

export default TodoList;
