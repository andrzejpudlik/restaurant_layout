import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePage, LoginPage, RegisterPage } from './pages';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
  </Routes>
</Router>
);

export default App;