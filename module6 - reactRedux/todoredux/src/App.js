import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { addToDo } from './slices/todoSlice';
import { deleteToDo } from './slices/todoSlice';

function App() {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  const { todos } = useSelector(state => state.todos);

  const handleAdd = () => {
    dispatch(addToDo({
      id: uuid(),
      todo: input
    }))
    setInput('');
  }

  const handleDelete = (id) => {
    dispatch(deleteToDo(id))
  }

  console.log(todos);

  return (
    <div className="App w-screen h-screen bg-slate-200">
      <h1 className='text-purple-950 text-2xl'>Todo App - React Redux</h1>
      <div>
        <input value={input} className='mt-4' type='text' placeholder='Enter your todo..' onChange={(e) => setInput(e.target.value)}/>
        <button className='bg-red-500 ml-1' onClick={handleAdd}>Add</button>
      </div>
      <div>
        {
          todos?.length > 0 && todos.map(todo => <div key={todo.id}>
            <input type='checkbox'/>
            <span className='ml-1'>{todo.todo}</span>
            <button className='ml-6' onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>)
        }
      </div>
    </div>
  );
}

export default App;