import './App.css';
import { Routes, Route, NavLink} from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import { PrivateRouter } from './pages/component/PrivateRouter';


function App() {
  const getStyle = ({isActive}) => {
    return {
      color: isActive ? "red" : ""
    }
  }

  return (
    <div className="App">
      <NavLink to='/' style={getStyle}>Home || </NavLink>
      <NavLink to='/cart' style={getStyle}>Cart || </NavLink>
      <NavLink to='/about' style={getStyle}>About || </NavLink>
      <NavLink to='/login' style={getStyle}>Login</NavLink>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<PrivateRouter><Cart /></PrivateRouter>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
