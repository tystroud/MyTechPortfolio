import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner'
import ColoredMouse from './components/ColoredMouse'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <ColoredMouse/>
      <Router>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Banner/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </> 
  );
}

export default App;
