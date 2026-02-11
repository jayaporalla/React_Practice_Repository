import './App.css';
import { useState } from 'react';

function App() {

  const [ count, setCount ] = useState(0);
  const [ text, setText ] = useState('');

  return (
      <>
      <div>
        <input type='text' placeholder='Enter your name...' onChange={(e) => setText(e.target.value)}/>
      </div>
      <div>
        Hello - {text}
      </div>
      <div>
        Count - {count}
        <button onClick={() => setCount(count + 5)}>Click Me!</button>
      </div>
      </>
  );
}

export default App;
