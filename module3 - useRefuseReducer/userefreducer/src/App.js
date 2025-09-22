import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [ count, setCount ] = useState(0);
  const timerRef = useRef(''); //useRef is used to store the value but it will not change the view or rerender the view.

  const onStartclick = () => {
    timerRef.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }

  const onStopClick = () => {
    clearInterval(timerRef.current);
  }

  return (
    <>
      <button onClick={onStartclick}>Start</button>
      <span>count - {count}</span>
      <button onClick={onStopClick}>Stop</button>
    </>
  );
}

export default App;
