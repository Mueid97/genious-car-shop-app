import Home from '../src/pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './common/Header/Header';
import About from './pages/About/About';
import Footer from './common/Footer/Footer';
import ServicesDetails from './pages/ServicesDetails/ServicesDetails';
import Login from './pages/Login/Login';
import { createContext, useState } from 'react';
import Register from './pages/Register/Register';

export const serviceDetail = createContext();


function App() {
  const [services, setServices] = useState([]);
  return (
    <div>
      <serviceDetail.Provider value={[services, setServices]}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:id' element={<ServicesDetails></ServicesDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      </serviceDetail.Provider>
      
    </div>
  );
}

export default App;
