import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from '../redux/todoSlice.js';
import ListItem from './ListItem.jsx';

const TodoList = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
 const handleSubmit = (e) =>{
   e.preventDefault();
   dispatch(addTodo(value));
   setValue('');
 }
  return (
    <div>
         <form onSubmit={handleSubmit}>
            <input type='text' placeholder='write your todos' value={value} onChange={e=>setValue(e.target.value)} />
            <button type="submit">add todo</button>

         </form>

         <ListItem />


       
    </div>
  )
};

export default TodoList;
