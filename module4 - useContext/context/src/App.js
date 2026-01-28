import './App.css';
import Button from './components/Button/Button';

// function App() {
//   const [count, setCount] = useState(0);

//   const handleIncrementClick = () => {
//     setCount(count+1);
//   }
  
//   //Below we are passing from grandparent to parent and parent to child as props this is called prop drilling
//   //in order to reduce prop drilling we are using useContext hook.

//   return (
//     <>
//       <Button count={count} setCount={setCount} handleIncrementClick={handleIncrementClick}/> 
//     </>
//   );
// }

export default App;

//or - below is by using useContext concept

function App() {
  
  //Below we are passing from grandparent to parent and parent to child as props this is called prop drilling
  //in order to reduce prop drilling we are using useContext hook.

  return (
    <>
      <Button /> 
    </>
  );
}