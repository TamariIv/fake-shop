import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Jewelry from './components/Jewelry/Jewelry';
import Electronics from './components/Electronics/Electronics';
import Books from './components/Books/Books';
import styles from './App.css';

function App() {
  return (
    <div className="App">
      <div className="topbar">
        <h3>FAKE STORE</h3>
      </div>
      <Router>
        <div className="wrapper">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jewelry" element={<Jewelry />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/books" element={<Books />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
