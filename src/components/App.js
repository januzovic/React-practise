import { useState } from 'react';

export default function App() {
  return (
    <div className=''>
      <ToDoInput />
      <ToDoList />
    </div>
  );
}

function ToDoInput() {
  return (
    <div className='header'>
      <div>
        <h2>TO DO LIST</h2>
      </div>
      <form className='form'>
        <label>Things To Do</label>
        <input type='text' />
        <button className='btn'>Submit</button>
      </form>
    </div>
  );
}

function ToDoList() {
  return (
    <div>
      <div className='item'>
        <input type='checkbox' />
        <p>Test</p>
        <button className='btn-close'>❌</button>
      </div>
    </div>
  );
}
