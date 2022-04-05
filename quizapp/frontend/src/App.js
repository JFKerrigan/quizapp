import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Register from './components/Register';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <Nav />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
