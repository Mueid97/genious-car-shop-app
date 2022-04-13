import Home from '../src/pages/Home/Home'
import Services from '../src/pages/Services/Services'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
