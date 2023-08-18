import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import Education from './pages/Education';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatePresence>
          <motion.div
            initial={{ opacity:0, y:15}}
            animate={{ opacity:1, y:0}}
            transition={{ ease: "easeOut", duration: 2}}>
           <NavbarComponent />
          </motion.div>
        </AnimatePresence>
        <main className='d-flex justify-content-center align-items-center p-5 sm:p-1'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work/>} />
            <Route path="/education" element={<Education/>} />
          </Routes>
        </main>
      </BrowserRouter>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y:15}}
        whileInView={{ opacity: 1, y:0}}
        transition={{delay:0.25}}>
        <Footer />
      </motion.div>
    </AnimatePresence>
    </div>
  );
}

export default App;
