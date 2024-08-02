import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Recepie from './pages/Recepie';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home/> }/>
        <Route path='about'  element={<About/> }/>
        <Route path='contact'  element={<Contact/> }/>
        <Route path='recipe'  element={<Recepie/> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
