import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Welcome extends Component {
  render(){
    console.log(this);
    return (
      <h1>Hello {this.props.name}, Welcome to {this.props.firm}!!! Congarts on your onboarding day at {this.props.firm}!!!</h1>
    )
  }
}

class App extends Component{
  state = {
    name: 'Jayasri',
    count: 0
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render(){
    return(
      <>
      <Welcome name='Jayasri' firm='Amazon'/>
      <div>
        <input value={this.state.name} onChange={this.handleChange} type='text' placeholder='Enter you name...'/>
        <button onClick={this.handleClick}>Clicked - {this.state.count} times</button>
      </div>
      <span>Hi, {this.state.name}</span>
      </>
    )
  }
}

class App1 extends Component { // class based component
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;

/** LifeCycle Methods
 * Mount -> Update -> Unmount
 * component mounted means inserting in the dom node
 */

// componentDidMount(){ exceute only once like useEffect fetching data from backend}

// shouldComponentUpdate(nextProps, state){checking current value with updated value}

// componentDidUpdate(){check did component or node updated}

// componentWillUnmount(){means like timer it will stop or remove the timerId}

// componentDidCatch(){checking errors, if present it will throw it}