import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { loadPost } from './Slice/postSlice';

function App() {
  const dispatch = useDispatch();
  const { posts, status} = useSelector(state => state.posts);

  useEffect(() => {
    if(status === 'idle'){
      dispatch(loadPost());
    }
  }, []);
  console.log(posts?.data?.posts);
  return (
    <div className="App">
      <h1>Async Thunk React</h1>
    </div>
  );
}

export default App;
