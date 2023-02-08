import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Home from './components/Navbar/Home/home';
import Category from './components/Navbar/Category/category'
import Profile from './components/Navbar/Profile/profile';
import Statistic from './components/Navbar/Statistic/statistic';
import Favorites from './components/Navbar/Favorites/favorites';
import WantToWatch from './components/Navbar/WantToWatch/wantToWatch';
import Footer from './components/Footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/category' element={<Category />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/statistic' element={<Statistic />}/>
            <Route path='/favorites' element={<Favorites />}/>
            <Route path='/wantToWatch' element={<WantToWatch />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
