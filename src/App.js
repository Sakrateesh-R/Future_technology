import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import About from './Components/About';
import Plans from './Components/Plans';
import Contact from './Components/ContactUs';

function App() {
  return (
    
      <Router>
        <Navigation/>
        <Routes>
          <Route path = "/" element={<HomePage/>} />
          <Route path="/About" element={<About/>}/>
          <Route path="/plans" element={<Plans/>}/>
        </Routes>
        <Footer/>
      </Router>
  
  )
}

export default App;
