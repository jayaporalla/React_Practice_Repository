import { useState } from 'react';
import './App.css';

const IncrementButton = (props) => {

  console.log(props); // every component have default props and mention details in the console. and props are objects

  const incrementClick = () => {
    props.setCount(props.count + 1);
  }

  return (
    <button onClick={incrementClick}>Increment</button>
  )
}

const DecrementButton = ({ count, setCount }) => {
  
  const decrementClick = () => {
    setCount(count - 1);
  }

  return (
    <button onClick={decrementClick}>Decrement</button>
  )
}

function MyApp() {

  const [ count, setCount ] = useState(100);

  return (
    <>
      <div className='count'>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <span>Count - {count}</span>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </>
  );
}

function App() {

  const [ count, setCount ] = useState(100); //declared useState at parent level and sending those parameters to the child
  //level components

  return(
    <>
      <IncrementButton count={count} setCount={setCount}/>
      <span>The value is - {count}</span>
      <DecrementButton count={count} setCount={setCount}/>
    </>
  )
}

export default App;
export { MyApp };