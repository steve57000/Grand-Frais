import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Home from '../pages/Home';
function RouterApp() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="https://steve57000.github.io/Grand-Frais/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default RouterApp;
