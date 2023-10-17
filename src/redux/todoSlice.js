
import { createSlice } from '@reduxjs/toolkit';

const initialState= localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [{id:1, text: 'Learn Redux', completed: false}];

const todosSlice = createSlice({
  name: 'todos',
  initialState ,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
      localStorage.setItem('todos', JSON.stringify(state));
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
          todo.completed = !todo.completed;
      }
      localStorage.setItem('todos', JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
      
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
