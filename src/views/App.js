import logo from './logo.svg';
import './App.scss';
import MyComponent from '../components/MyComponent';

/**
 * 2 components: class component / function component (function, arrow function)
 * 
 */

function App() {
  // this is JSX
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello reactJs with Duke
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <MyComponent></MyComponent>
      </header>
    </div>
  );
}

export default App;
