import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jen Quiz
        </a>
      </BrowserRouter>
    </div>
  );
}

export default App;
