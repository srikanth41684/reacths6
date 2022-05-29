import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home'
import Navbar from './components/Navbar';
import NoPageFound from './components/NoPageFound';
import Students from './components/Student';
import './style.css';
import Details from './components/Details';
import AddNewStudent from './components/AddNewStudent';
import Edit from './components/Edit';

const App = () => {
  return (
    <div>

      <Details>

        <BrowserRouter>

          <Navbar />

          <Routes>
      
            <Route path='/home' element={<Home />} />
            <Route path='/student' element={<Students />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/add-student' element={<AddNewStudent />} />
            <Route path='/Edit-student' element={<Edit />} />
            <Route path='*' element={<NoPageFound />} />
      
          </Routes>


        </BrowserRouter>
     
      </Details>

    </div>
  );
}

export default App;
