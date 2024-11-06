import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Berita = () => {
  const [beritaList, setBeritaList] = useState([]);
  
  // React Intersection Observer hook
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Fetch data from API
  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const response = await fetch('https://api-kawal-desa.lskk.co.id/api/report/village?guid=2305e536-0ef6-48e7-9aac-79ca236433fa&page=1&limit=10&type=news');
        const result = await response.json();
        
        if (result.status) {
          // Sesuaikan dengan struktur data dari API
          const formattedData = result.data.map(item => ({
            id: item._id,
            title: item.description,
            date: new Date(item.createAt).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }),
            image: `https://bucket-2.nos.wjv-1.neo.id/${item.file || ""}`,  // sesuaikan URL base dengan API yang tersedia
          }));
          setBeritaList(formattedData);
        }
      } catch (error) {
        console.error('Gagal memuat data berita:', error);
      }
    };

    fetchBerita();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8" id="news" ref={ref}>
      <h1
        className={`text-2xl font-bold text-center mb-6 transition-opacity duration-1000 ease-in-out ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Berita Desa Sindanglaka
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {beritaList.map((berita, index) => (
          <div
            key={berita.id}
            className={`bg-white shadow-md rounded-lg p-4 transform transition-all duration-1000 ease-out ${
              inView
                ? `opacity-100 translate-y-0 delay-${index * 200}`
                : 'opacity-0 translate-y-5'
            }`}
          >
            <img
              src={berita.image}
              alt={berita.title}
              className="h-48 w-full object-cover rounded-md mb-4 transform transition-transform duration-500 hover:scale-105 hover:shadow-lg"
            />
            <h2 className="text-xl font-semibold">{berita.title}</h2>
            <p className="text-gray-500 text-sm mb-2">{berita.date}</p>
            <p className="text-gray-700">{berita.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Berita;
