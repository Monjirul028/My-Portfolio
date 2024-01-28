import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './PortfolioContainer/Home/Home';
import Navbar from './PortfolioContainer/Navbar/Navbar';
import Contact from './PortfolioContainer/ContactME/Contact';
import Projects from './PortfolioContainer/Projects/Projects';
import Achievements from './PortfolioContainer/Achievements/Achievements';
function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/projects' element={<Projects></Projects>} />
        <Route path='/achievements' element={<Achievements></Achievements>} />
        <Route path='/contact' element={<Contact></Contact>} />
      </Routes>


    </>
  );
}

export default App;
