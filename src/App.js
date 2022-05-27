import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';

import Navbar from './components/Navbar';
import NoPageFound from './components/NoPageFound';
import Students from './components/Student';
import './style.css';

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar />

    <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/student' element={<Students />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='*' element={<NoPageFound />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
