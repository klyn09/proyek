import React from 'react';
import backgroundImage from '../assets/desa.jpg'; // Ensure the path is correct

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="bg-cover bg-center h-screen mb-12"
        style={{ backgroundImage: `url(${backgroundImage})` }} // Use the imported image correctly
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold mb-4">Selamat Datang di Desa Sindanglaka</h1>
          <p className="text-white text-xl mb-8">Membangun desa dengan inovasi dan kolaborasi.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Tentang Desa Sindanglaka</h2>
          <p className="text-lg text-gray-700 mb-8">
            Desa Sindanglaka merupakan sebuah desa yang terletak di Kabupaten Cianjur, dikenal karena komunitas yang
            solid dan pembangunan yang berkelanjutan melalui inovasi serta kolaborasi antara warga dan pemerintah
            desa.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
