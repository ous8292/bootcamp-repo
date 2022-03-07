import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'
import Catering from './components/Catering'
 
function App() {
  return (
    <div className="App">
      <div className="container">
      {/* This createst he links to click and link to does not refresh page*/}
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/menu">About</Link></li>
        <li><Link to="/catering">Contact</Link></li>
      </ul>
      <hr />
      {/* This routes the click to the correct location */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/catering" element={<Catering />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
