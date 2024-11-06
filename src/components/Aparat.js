import React, { useEffect, useState } from 'react';
import aparatImagePlaceholder from '../assets/aparat.png'; // Gambar placeholder jika tidak ada gambar

const Aparat = () => {
  const [aparatDesa, setAparatDesa] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchAparatData = async () => {
      try {
        const response = await fetch('https://api-kawal-desa.lskk.co.id/api/village/profile?guid=2305e536-0ef6-48e7-9aac-79ca236433fa'); // Ganti dengan URL API Anda
        
        // Tambahkan pemeriksaan status HTTP
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // Tambahkan log untuk melihat struktur data

        // Periksa apakah jalur data sesuai
        if (data.vaillage && data.vaillage.organizationalStructure) {
          setAparatDesa(data.vaillage.organizationalStructure); // Ambil data jika sesuai
        } else {
          console.error('Struktur data tidak sesuai:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAparatData();

    const handleScroll = () => {
      const section = document.getElementById('aparat');
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (sectionPosition < screenPosition) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="aparat" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-8 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          Daftar Aparat Desa
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {aparatDesa.map((aparat, index) => (
            <div
              key={aparat.guid || index} // Tambahkan `index` sebagai fallback jika `guid` tidak ada
              className={`bg-white shadow-lg rounded-lg p-6 transform transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <img
                src= {`https://bucket-2.nos.wjv-1.neo.id/${aparat.file || ""}`}  // Gunakan gambar placeholder jika tidak ada gambar
                onError={(e) => (e.target.src = aparatImagePlaceholder)}
                alt={aparat.name}
                className="w-40 h-40 mx-auto rounded-full mb-4 object-cover border-4 border-gray-200 transform hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold">{aparat.name}</h3>
              <p className="text-gray-600">{aparat.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aparat;
