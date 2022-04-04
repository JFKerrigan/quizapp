import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Nav />
            <h1>TEST</h1>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
