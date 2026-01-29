import { useState, memo } from 'react';
import './App.css';

const Greet = memo(function Greetings({name}){
  console.log('component re-render')
  return(
    <h1>Hola {name}, Welcome to Microsoft</h1>
  )
})

function App() {
  const [name, setName] = useState('Jayasri');
  const [city, setCity] = useState('Hyderabad');

  return (
    <div className="App">
      <h1>Memoization</h1>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='enter your name...'/>
      </div>
      <div>
        <input value={city} onChange={(e) => setCity(e.target.value)} placeholder='enter your city...'/>
      </div>
      <Greet name={name}/>
    </div>
  );
}

export default App;
