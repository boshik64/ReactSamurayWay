import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Content/Profile/Profile';
import Dialogs from './components/Content/Dialogs/Dialogs';

import { Route, Routes } from "react-router-dom";



const App = () => {
  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar />

      <div className="content__wrapper">


        <Routes>
          <Route path='*' element={<Profile />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/dialogs' element={<Dialogs />} />

        </Routes>

      </div>
    </div>

  );
}



export default App;

// sfc - макет компоненты
// imr - import React from 'react';