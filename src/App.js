import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
          Jen Quiz
      </BrowserRouter>
    </div>
  );
}

export default App;
