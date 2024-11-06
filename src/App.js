import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Router, Routes, Route
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Aparat from './components/Aparat'; // Import Aparat component
import Footer from './components/Footer';
import Berita from './components/Berita';
import Umkm from './components/Umkm';
import Map from './components/Map';
import Kegiatan from './components/Kegiatan';
import Login from './components/Login';  // Import Login
import Register from './components/Register';  // Import Register

function App() {
  return (
    <Router>
      <Routes>
        {/* Rute untuk Login tanpa Header dan komponen lainnya */}
        <Route path="/login" element={<Login />} />
        
        {/* Rute untuk Register tanpa Header dan komponen lainnya */}
        <Route path="/register" element={<Register />} />

        {/* Rute untuk halaman utama dan komponen lainnya */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Aparat />
              <Berita />
              <Umkm />
              <Kegiatan />
              <Services />
              <Contact />
              <Map />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
