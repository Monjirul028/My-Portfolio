import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './PortfolioContainer/Home/Home';
import Navbar from './PortfolioContainer/Navbar/Navbar';
import Contact from './PortfolioContainer/ContactME/Contact';
import Projects from './PortfolioContainer/Projects/Projects';
import Achievements from './PortfolioContainer/Achievements/Achievements';
import MyFooter from './PortfolioContainer/Footer/MyFooter';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Projects></Projects>
      <Contact></Contact>
      <MyFooter></MyFooter>

      {/* <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/projects' element={<Projects></Projects>} />
        <Route path='/achievements' element={<Achievements></Achievements>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path="*" element={<Home />} />

      </Routes> */}


    </>
  );
}

export default App;
