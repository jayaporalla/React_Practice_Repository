import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(100);

  return(
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <span className='count'>The value is - {count}</span>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}

export default App;