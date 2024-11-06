import React, { useEffect, useState } from 'react';

const Kegiatan = () => {
  const [kegiatanList, setKegiatanList] = useState([]);

  useEffect(() => {
    const fetchKegiatanData = async () => {
      try {
        const response = await fetch('https://api-kawal-desa.lskk.co.id/api/report/village?guid=2305e536-0ef6-48e7-9aac-79ca236433fa&page=1&limit=10&type=activity');
        const result = await response.json();

        if (result.status) {
          // Map data API ke format yang dibutuhkan komponen
          const formattedData = result.data.map(item => ({
            id: item._id,
            title: item.description,
            date: new Date(item.createAt).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }),
            description: item.description,
            image: `https://bucket-2.nos.wjv-1.neo.id/${item.file || ""}`, // Ganti URL_BASE dengan URL dasar untuk gambar
          }));
          setKegiatanList(formattedData);
        }
      } catch (error) {
        console.error('Gagal memuat data kegiatan:', error);
      }
    };

    fetchKegiatanData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8" id="kegiatan">
      <h1 className="text-2xl font-bold text-center mb-6">Kegiatan Desa Sindanglaka</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {kegiatanList.map((kegiatan) => (
          <div key={kegiatan.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={kegiatan.image}
              alt={kegiatan.title}
              className="h-48 w-full object-cover rounded-md mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
            <h2 className="text-xl font-semibold">{kegiatan.title}</h2>
            <p className="text-gray-500 text-sm mb-2">{kegiatan.date}</p>
            <p className="text-gray-700">{kegiatan.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kegiatan;
