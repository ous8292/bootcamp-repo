
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className = "App">
      <div className="container">
      {/* This createst he links to click and link to does not refresh page*/}
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <hr />
      {/* This routes the click to the correct location */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </div>

  );
}

export default App;
