import React, { useEffect, useState } from 'react';

const Umkm = () => {
  const [umkmData, setUmkmData] = useState([]);

  // Memuat data dari API saat komponen pertama kali dirender
  useEffect(() => {
    const fetchUmkmData = async () => {
      try {
        const response = await fetch('https://api-kawal-desa.lskk.co.id/api/umkm/village?guid=2305e536-0ef6-48e7-9aac-79ca236433fa&page=1&limit=10');
        const result = await response.json();
        
        if (result.status) {
          // Map data sesuai struktur yang dibutuhkan komponen
          const formattedData = result.data.map(item => ({
            id: item._id,
            file: `https://bucket-2.nos.wjv-1.neo.id/${item.file || ""}`,  // Ganti URL_BASE dengan URL dasarnya
            description: item.description,
            name: item.name,
            address: `${item.address.street}, ${item.address.village}, ${item.address.subdistrict}, ${item.address.district}, ${item.address.province}`,
          }));
          setUmkmData(formattedData);
        }
      } catch (error) {
        console.error('Gagal memuat data UMKM:', error);
      }
    };

    fetchUmkmData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8" id="umkm">
      <h1 className="text-2xl font-bold text-center mb-6">UMKM Desa Sindanglaka</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {umkmData.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={item.file}
              alt={item.name}
              className="h-48 w-full object-cover rounded-md mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-500 mt-2">{item.description}</p>
            <p className="text-gray-400 text-sm mt-1">{item.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Umkm;
