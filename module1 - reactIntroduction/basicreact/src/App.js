import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [text, setText ] = useState('');

  return (
      <><div>
      <input type='text' placeholder='Enter text' onChange={(e) => setText(e.target.value)} />
    </div><div>
        <p>Hello - {text}</p>
      </div><div>
        Count - {count}
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </div></>
  );
}

export default App;
