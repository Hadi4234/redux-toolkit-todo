
import React from 'react';
import TodoList from './component/todoList';

function App() {
  return (
    <div className=" flex items-center flex-col">
      <h1 className=' text-3xl text-slate-900 font-bold mt-5'>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;

