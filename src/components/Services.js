import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Pertanian</h3>
            <p>Pengembangan pertanian dengan teknologi modern.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Pendidikan</h3>
            <p>Fasilitas pendidikan untuk masyarakat desa.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Teknologi</h3>
            <p>Implementasi teknologi dalam kehidupan sehari-hari.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
