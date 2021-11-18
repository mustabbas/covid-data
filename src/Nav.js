import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Country from './components/Country.js';
import Detail from './components/Detail.js';

const Nav = () => (
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Country />} exact />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </div>
  </BrowserRouter>
);
export default Nav;
