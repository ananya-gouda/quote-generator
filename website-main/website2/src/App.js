// Video following: https://www.youtube.com/watch?v=6IZDfxUzuVE
// (React JS - Build a Responsive Website using Bootstrap v5 in React JS from Scratch | Multiple Pages) by Sharma Tech Talks

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/inc/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />

      </switch>

    </Router>

  );
}

export default App;
