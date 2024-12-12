import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Ragister from './Components/Ragister';
import View from './Components/View';
import Sign from './Components/Sign';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Home/>
        <Routes>
          <Route path='/Ragister' element={<Ragister/>}/>
          <Route path='/View' element={<View/>}/>
          <Route path="/sign" element={<Sign/>}/>
        </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
