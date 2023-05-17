import './App.css';
import { Routes, Route } from 'react-router-dom';
import ReactPlayer from "react-player"
import Home from "../src/Pages/Home"
import Contact from "../src/Pages/Contact"
import Features from "../src/Pages/Features"
import Help from "../src/Pages/Help"
import Login from "../src/Pages/Login"



function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;
