import React from 'react';
import logoDesa from '../assets/sugihmukti-removebg-preview.png'; // Mengimpor gambar dari folder src/assets

const Header = () => {
  return (
    <header className="bg-green-700 text-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoDesa} alt="Logo Desa" className="h-12 w-auto" />
          <div className="ml-3 flex flex-col">
            <div className="text-2xl font-bold">Desa Sindanglaka</div>
            <div className="text-lg">Kab. Cianjur</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-gray-300">Home</a>
          <a href="#aparat" className="text-white hover:text-gray-300">Aparat Desa</a>
          <a href="#news" className="text-white hover:text-gray-300">Berita Desa</a>
          <a href="#umkm" className="text-white hover:text-gray-300">UMKM Desa</a>
          <a href="#kegiatan" className="text-white hover:text-gray-300">Kegiatan Desa</a>
        </nav>

        {/* Tombol Login */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/login" className="bg-white text-green-700 font-semibold py-2 px-4 rounded hover:bg-gray-200">
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
