import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Jewelry from './components/Jewelry/Jewelry';
import Electronics from './components/Electronics/Electronics';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="wrapper">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jewelry" element={<Jewelry />} />
            <Route path="/electronics" element={<Electronics />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
